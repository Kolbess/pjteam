# F17 · Self-host the Manrope and DM Mono fonts

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | S | Todo |

**Depends on:** — (pairs with F01: together they remove every third-party request on page load)
**Blocked on:** —

## Problem
- The fonts load from Google: `src/style.css:1` `@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');`. Every visit sends the visitor's IP to `fonts.googleapis.com` and `fonts.gstatic.com` without consent. For an EU studio this is a known GDPR risk (a German court, LG München I, fined a site for exactly this in 2022). The site also has no privacy policy to disclose it (C21).
- A CSS `@import` to a third-party stylesheet blocks rendering in a chain: page CSS, then Google's CSS, then the font files. This delays first text paint.
- The request asks for weights that nothing uses. The CSS only uses:
  - Manrope 400 (body, `src/style.css:7`), 700 (`:15`, `:78`, plus the browser-default bold on `h1`–`h3` and `<strong>` in `src/main.js`) and 800 (`:10`, `:23`, `:61`).
  - DM Mono 400 only. No DM Mono selector sets a weight (`:12`, `:18`, `:31`, `:40`, `:48`, `:49`, `:51`, `:68`, `:75`, `:80`).
  - Manrope 500/600 and DM Mono 500 are declared but unused.
- The copy includes Polish characters ("Białystok", `src/main.js:21`). These sit in the **latin-ext** subset, so a self-hosted "latin only" file would drop to the fallback font for `ł`.

## Goal
The fonts are served from the site itself in only the weights and subsets it uses. The page makes no requests to Google, and the text looks the same as today.

## Suggested approach
- **Preferred (no new dependencies):** download WOFF2 files for Manrope (the variable font, or static 400/700/800) and DM Mono 400. Get the **latin** and **latin-ext** subsets, e.g. via google-webfonts-helper or the fonts' upstream repos. Put them in `src/assets/fonts/`.
- Declare them with `@font-face` in a new `src/fonts.css` imported at the top of `src/style.css`, or directly at the top of `src/style.css`. Use `font-display: swap` and one `unicode-range` per subset. Because the `url()`s are relative paths under `src/`, Vite hashes the files and applies the `/pjteam/` base automatically. Don't put them in `public/` with hard-coded paths.
- **Alternative:** `@fontsource-variable/manrope` + `@fontsource/dm-mono`, importing only the needed weights/subsets in `src/main.js`. These are small, build-time-only packages. Acceptable if the developer prefers them, but it adds two dependencies for something the preferred option does in ~20 lines of CSS.
- Delete the `@import` at `src/style.css:1`.
- Both fonts are under the SIL Open Font License 1.1. Commit the licence text (`OFL.txt`) next to the font files.
- Compare before/after screenshots. The arrows `↗` / `↓` (`src/main.js:15`, `:24`) and `°` (`:28`) must still render the same (they may come from a fallback font today).
- Optional: a `<link rel="preload">` for the Manrope latin file. Only add it if it measurably improves first paint; hashed filenames make it awkward in `index.html`.

## Acceptance criteria
- [ ] DevTools Network tab (cache disabled) shows no request to `fonts.googleapis.com` or `fonts.gstatic.com`. `grep -rE "googleapis|gstatic" src index.html` returns nothing.
- [ ] DevTools > Rendered Fonts shows Manrope for body/headings and DM Mono for eyebrow/nav/status text, including the "ł" in "Białystok"
- [ ] Font files load from `/pjteam/assets/…` on the deployed site. Total font transfer is under ~120 KB.
- [ ] No visible layout or weight change at 1440 px and ~400 px compared with the current site
- [ ] `npm run build` succeeds

## Out of scope
- The Unsplash hero request (F01)
- Changing typefaces, sizes (F11) or weights in use
- Glyphs for other languages beyond Polish (latin-ext covers C22)
