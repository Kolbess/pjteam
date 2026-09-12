# C04 · Fill in the Kindred Paws game page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Done |

**Depends on:** C01; F06 (soft: the share image and cover need the new Kindred Paws art)
**Done 2026-09-13:** copy, genre, platforms, engine, jam and status ("Released") taken from the studio's itch.io page. The share image stays the studio card, and the header art stays the 315×250 menu shot, until F06 delivers art.
**Blocked on:** Studio-approved Kindred Paws copy and facts:
- A one-line pitch (≤ ~20 words)
- 3–5 feature bullets
- Genre
- Target platform(s)
- Engine
- Current status
- A 1200×630 share image (gameplay or key art; if it's pixel art, an integer-scaled export)
- (Demo link `https://kolbes.itch.io/kindred-paws` is confirmed correct.)

## Problem
- After C01, `/pjteam/games/kindred-paws/` only shows what the home card has today: title, "In development" and the demo link (`src/main.js:44-45`).
- The only art is a 315×250 menu screenshot (see F06), which can't carry a page header or a share preview.

## Goal
The Kindred Paws page tells a visitor what the game is and what it runs on. The demo button is visible without scrolling.

## Suggested approach
- Fill the `kindred-paws` entry in `src/data/games.js`: `pitch`, `features`, `genre`, `platforms`, `engine`, `status`.
- Put the demo button (`.button-dark`, `src/style.css:23-26`) directly under the pitch.
- In `games/kindred-paws/index.html`, set the description/og:description to the pitch. Point `og:image` at a share image in `public/games/kindred-paws/` (absolute URL, see F08).
- Pixel art: keep `image-rendering: pixelated` (`.game-cover-pixel`, `src/style.css:42`) on upscaled images. Export the share image at an integer scale rather than a smooth resize.
- If a field isn't supplied, leave it empty so it doesn't render.

## Acceptance criteria
- [ ] The page shows the pitch, 3–5 feature bullets and a facts list with studio-approved wording
- [ ] "Play demo on itch.io" is visible without scrolling at 1440×900 and 390×844 and opens in a new tab with `rel="noopener"`
- [ ] Header art is sharp (no blur/blockiness) at 1440 px and ~400 px on a 2× display
- [ ] A share preview shows the Kindred Paws image and pitch
- [ ] No placeholder or invented text in the rendered page
- [ ] `npm run build` succeeds

## Out of scope
- Screenshots and loops (C08), trailer (C09), itch.io widget (C10), press kit (C14)
- The home card image (F06)
