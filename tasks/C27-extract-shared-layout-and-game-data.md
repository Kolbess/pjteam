# C27 · Extract the shared layout and game data (C01 groundwork)

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Done |

**Depends on:** F03, F09, F14, F12, F18 (their header, footer, menu, image and contact markup is what gets extracted)
**Blocked on:** —

## Problem
- Game pages (C01) can't be built yet: there's no copy for them, and thin pages would make the site look emptier. The studio chose to lay the groundwork now with no visible change.
- The header (skip link, F14 mobile menu and its script), the F03 footer and the game cards all live in one template string in `src/main.js`. `404.html` (F15) carries its own copy of the header/footer look. A second page type would mean a third copy.
- Game facts (title, status, demo URL, cover sources from F12) are hard-coded in the card markup.

## Goal
The header, footer, nav behaviour and game data each live in one shared module, and the home page and 404 page render from them. The site looks and behaves exactly as before.

## Suggested approach
- `src/layout.js`: `renderHeader()`, `renderFooter()` and `initNav()` (menu toggle, Escape, close-on-link-click). Section links need to work from sub-pages later: support a page option (e.g. `renderHeader({ home: true })` uses `#games`; other pages use `${import.meta.env.BASE_URL}#games`). The home page must keep today's behaviour.
- `src/data/games.js`: an array of `{ slug, number, title, status, demoUrl, cover }` for Bearer, Kindred Paws and Potion Stacker (no demo, "Details coming soon"). `cover` holds what F12's `<picture>` markup needs (AVIF/WebP sources, fallback, sizes, and whether it's pixel art). Leave `pitch`, `features`, `genre`, `platforms`, `engine` out or empty for C03/C04.
- Render the home game cards from that array, producing the same markup as today.
- If `404.html` duplicates header/footer markup, switch it to the shared layout too, keeping every URL under `/pjteam/`.
- Don't add game pages, Vite build inputs or card links to game pages. That stays in C01.

## Acceptance criteria
- [ ] Desktop and true-400 px screenshots of the home page (hero, cards, footer) and the 404 page look the same as before the change, and the mobile menu still opens
- [ ] Title, status and demo URL for each game are defined only in `src/data/games.js`
- [ ] Header and footer markup exist in exactly one place (`src/layout.js`)
- [ ] Skip link, mobile menu (toggle, Escape, link click) and focus styles still work, checked by code review
- [ ] `npm run build` succeeds and emits `dist/index.html` and `dist/404.html` with all asset URLs under `/pjteam/`

## Out of scope
- Game pages, URL scheme and build inputs (C01)
- Any visible change to copy, layout or styling
