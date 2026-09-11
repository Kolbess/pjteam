# C01 · Set up a multi-page structure and shared layout for game pages

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | M | Todo |

**Depends on:** F03, F09, F14 (soft: land them first so the header, footer, skip link and mobile menu are extracted once, in their final form)
**Blocked on:** — (the studio confirms the URL scheme below; the domain question is C02)

## Problem
- The whole site is one page. `index.html:13-14` loads `src/main.js`, which writes everything into `#app` from a single template string (`src/main.js:3-82`). There is nowhere to put per-game content.
- The only game destinations are itch.io (`src/main.js:40-41`, `:44-45`). Press and players link there, so links and search authority go to itch rather than the studio's own domain.
- `vite.config.js:4-6` only sets `base`. With no `build.rollupOptions.input`, only `index.html` is built.
- Header links are same-page hashes (`#top`, `#games`, `#studio`, `#team`, `#contact`, `src/main.js:5`, `:10-15`). They break on any other page.
- Game facts are hard-coded in the card markup (`src/main.js:39-50`). A game page would duplicate them and drift.

## Goal
The build produces the home page plus one page per released-demo game at clean URLs (`/pjteam/games/bearer/`, `/pjteam/games/kindred-paws/`). All pages share one header, footer and stylesheet, and game data is defined once.

## Suggested approach
- **URL scheme** (confirm with the studio): `games/<slug>/index.html` becomes `/pjteam/games/<slug>/`. Later tasks use `/pjteam/press/` (C12) and `/pjteam/privacy/` (C21) the same way.
- **Vite multi-page:** in `vite.config.js`, add `build.rollupOptions.input` listing `index.html` and each game HTML file (resolve paths with `fileURLToPath(new URL(…, import.meta.url))`). Keep `base: '/pjteam/'`. No plugins.
- **Shared layout:** move the header (with F09's skip link and F14's menu script) and the F03 footer out of `src/main.js` into `src/layout.js`, e.g. `renderHeader()` / `renderFooter()` / `initNav()`. Prefix section links with `import.meta.env.BASE_URL` (`${BASE}#games`) so they work from sub-pages.
- **Game data:** add `src/data/games.js`, an array of `{ slug, title, status, demoUrl, cover, pitch, features, genre, platforms, engine }`. Fill only what exists today (title, status, demo URL, cover). C03/C04 fill the rest. Render the home cards (`src/main.js:39-50`) from this array.
- **Game page template:** add `src/game.js` as the entry for game pages. It reads the slug from a `data-game` attribute on `<body>` and renders:
  - an `<h1>` title
  - the pitch
  - a feature `<ul>`
  - a facts `<dl>` (genre, platform, engine, status)
  - a primary "Play demo on itch.io" button (reuse `.button-dark`, `src/style.css:23-26`)
  - the cover image

  Any empty field renders nothing, never "TBD".
- **Static `<head>` per page:** each game HTML needs its own `<title>`, description, canonical and og/twitter tags written statically, because crawlers don't run JS (see F08). Use the same absolute origin as F08. Until key art exists, `og:image` may reuse the F08 image. Add a `<noscript>` like F08's.
- **Home cards:** the title and the image link go to the game page. "Play demo" still goes to itch.io. The image link at `src/main.js:40` / `:44` keeps `aria-hidden="true" tabindex="-1"` but points to the game page, so each destination has exactly one focusable link.
- Potion Stacker gets no page yet (C05).
- If F16 is done, add the new URLs to `public/sitemap.xml`.

## Acceptance criteria
- [ ] `npm run build` outputs `dist/index.html`, `dist/games/bearer/index.html` and `dist/games/kindred-paws/index.html`
- [ ] `npm run dev` and `npm run preview` serve `/pjteam/games/bearer/` with styles, fonts and images
- [ ] From a game page, the wordmark and every nav link reach the right home section. The skip link and mobile menu work on both page types, by keyboard and at ~400 px.
- [ ] Home cards link to the game pages; "Play demo" links are unchanged
- [ ] View-source (not DevTools) of each game page shows its own title, description, canonical and og tags
- [ ] Game titles, statuses and demo URLs are defined only in `src/data/games.js`
- [ ] `npm run build` succeeds

## Out of scope
- Game copy (C03, C04), media (C06–C08), trailer (C09), itch widget (C10)
- Custom domain (C02), press pages (C12)
