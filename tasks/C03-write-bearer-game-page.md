# C03 · Fill in the Bearer game page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** C01
**Blocked on:** Studio-approved Bearer copy and facts:
- A one-line pitch (≤ ~20 words)
- 3–5 feature bullets
- Genre
- Target platform(s)
- Engine
- Current status (e.g. "Demo available · In development"; a release window only if it is public)
- A 1200×630 share image (can be cut from the F01/F05 export)
- (Demo link `https://kolbes.itch.io/bearer` is confirmed correct.)

## Problem
- After C01, `/pjteam/games/bearer/` exists but only shows the title, status, cover and demo link that the home card has today (`src/main.js:40-41`).
- The card's only description is "In development" (`src/main.js:41`). Players and press get no pitch, features or facts.
- None of these facts are in the repo, and they must not be invented.

## Goal
The Bearer page tells a visitor in a few seconds what the game is, why it's interesting and what it runs on. The demo button is visible without scrolling.

## Suggested approach
- Fill the `bearer` entry in `src/data/games.js`: `pitch`, `features`, `genre`, `platforms`, `engine`, `status`.
- Put the demo button (`.button-dark`, `src/style.css:23-26`) directly under the pitch, so it's above the fold on desktop and mobile.
- In `games/bearer/index.html`, set `<meta name="description">` and `og:description` to the pitch. Point `og:image` at the new share image in `public/games/bearer/` (absolute URL, see F08).
- Write the cover `alt` against the actual art. Keep `alt=""` where the image is decorative next to the title.
- If a field isn't supplied, leave it empty so it doesn't render. No "TBA" filler.

## Acceptance criteria
- [ ] The page shows the pitch, 3–5 feature bullets and a facts list (genre, platform, engine, status) with studio-approved wording
- [ ] "Play demo on itch.io" is visible without scrolling at 1440×900 and 390×844 and opens the itch.io page in a new tab with `rel="noopener"`
- [ ] Heading order is `h1` (game title) then `h2`s; no skipped levels
- [ ] A share preview (Discord, or opengraph.xyz) shows the Bearer image and pitch
- [ ] No placeholder or invented text in the rendered page
- [ ] `npm run build` succeeds

## Out of scope
- Screenshots and loops (C07), trailer (C09), itch.io widget (C10), press kit (C13)
- Home hero/card art (F01, F05)
