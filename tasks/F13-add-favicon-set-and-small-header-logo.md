# F13 · Add a proper favicon set and a small header logo

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P3 | S | Done |

**Depends on:** —
**Blocked on:** — (optional: a vector/SVG version of the logo from the studio would allow an SVG favicon; without it, use PNG/ICO only)

## Problem
- `public/logo.png` is 800×800 and 166 KB (166,423 bytes). It's shown at 32×32 CSS px in the header (`src/main.js:6`, `src/style.css:11`), so the header downloads ~100× more pixels than it needs.
- The same file is the only favicon and apple-touch icon (`index.html:8-9`). There's no `favicon.ico`, no sized PNGs (32/180/192/512), no `site.webmanifest`, and no SVG icon.

## Goal
The header logo weighs a few KB, and browsers, iOS home-screen and Android get correctly sized icons.

## Suggested approach
- Export from `public/logo.png`:
  - `public/logo-64.png` (and optionally `.webp`) for the header at 2× DPR. Update `src/main.js:6` and keep `width="32" height="32"`.
  - `public/favicon.ico` (16+32), `public/favicon-32.png`, `public/apple-touch-icon.png` (180×180, opaque background), `public/icon-192.png`, `public/icon-512.png`.
- Add `public/site.webmanifest` with `name`, `short_name`, icons, `theme_color: #4767e5` (matches `index.html:7`), `background_color: #f6f9ff` (`--paper`, `src/style.css:4`), `start_url: "/pjteam/"`, `scope: "/pjteam/"`.
- Update `index.html:8-9` and add `<link rel="manifest">`. Keep root-absolute hrefs (`/favicon-32.png`) so Vite prefixes the `/pjteam/` base at build time. Verify that in `dist/index.html`.
- Leave `logo.png` in place if anything else (e.g. the F08 share image) still uses it.

## Acceptance criteria
- [ ] Header logo request is under 10 KB and still sharp on a 2× display
- [ ] `dist/index.html` icon/manifest hrefs start with `/pjteam/` and all resolve on the deployed site
- [ ] Browser tab shows the favicon; Chrome DevTools > Application > Manifest shows no errors
- [ ] `npm run build` succeeds

## Out of scope
- Redesigning the logo
- Game image optimisation (F12)
