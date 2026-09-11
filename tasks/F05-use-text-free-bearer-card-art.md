# F05 · Replace the "COMING SOON" Bearer card art with a text-free image

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | XS | Blocked |

**Depends on:** —
**Blocked on:** A text-free Bearer image from the studio: key art or a 1080p+ gameplay screenshot with no "COMING SOON..." banner. The Bearer logo may stay or go (the card already shows the title as `<h3>`). The same export can serve F01.

## Problem
- `public/games/bearer.png` (1919×1079, 1.4 MB) has the Bearer wordmark and a yellow "COMING SOON..." banner baked into the bottom strip of the image.
- The card right under it offers "Play demo on itch.io" (`src/main.js:41`), and the image itself links to `https://kolbes.itch.io/bearer` (`src/main.js:40`). The art says the game isn't out while the link says you can play it now.
- At desktop sizes the card crops the image (`.game-image` height `clamp(180px, 19vw, 270px)`, `src/style.css:38`; `object-fit: cover`, `src/style.css:41`), so the banner is partly cut off, which looks like a mistake.

## Goal
The Bearer card shows clean game art that doesn't contradict the "Play demo" call to action.

## Suggested approach
- Drop the new export into `public/games/` (keep the file name `bearer.png` or update the `src` at `src/main.js:40`).
- Check the crop at the card's desktop ratio (~1.75:1) and the mobile height of 300 px (`src/style.css:93`). Add an `object-position` modifier if the subject sits off-centre.
- Leave format conversion and `srcset` to F12.

## Acceptance criteria
- [ ] No baked-in "COMING SOON" (or other marketing text) is visible on the Bearer card at any width
- [ ] Subject reads clearly at 1440 px, 1024 px and ~400 px widths
- [ ] Link targets at `src/main.js:40-41` are unchanged
- [ ] `npm run build` succeeds

## Out of scope
- Hero image (F01)
- Compression / WebP / AVIF (F12)
- Changing the "In development" status copy
