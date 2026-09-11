# F06 · Replace the low-resolution Kindred Paws card image

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | S | Blocked |

**Depends on:** —
**Blocked on:** Proper Kindred Paws art from the studio: key art or a gameplay (not menu) screenshot, ideally 1920×1080, or at minimum an integer-scaled pixel-art export at least 1260 px wide (4× the current 315 px).

## Problem
- `public/games/kindred-paws.png` is only 315×250 px. It's the itch.io menu screen (logo, PLAY and CREDITS buttons), not gameplay.
- It fills a `.game-image` box of ~300×270 px on desktop (`src/style.css:37-38`). In the single-column layout under 760 px it fills a full-width × 300 px box (`src/style.css:92-93`), which means upscaling it 2× or more and cropping it heavily, since the image is 1.26:1 and the box is up to ~2.3:1. The fake menu buttons end up cut off at the edges.
- `.game-cover-pixel { image-rendering: pixelated }` (`src/style.css:42`, used at `src/main.js:44`) keeps the pixels sharp but can't add detail.

## Goal
The Kindred Paws card shows sharp, representative game art at every breakpoint.

## Suggested approach
- Add the new asset to `public/games/` and update the `src` at `src/main.js:44` if the name changes.
- If the art is pixel art exported at an integer scale, keep `game-cover-pixel`. If it's a painted or high-resolution image, remove that class.
- Set `object-position` so the key subject survives both the desktop (~1.1:1) and mobile (~2.3:1) crops.

## Acceptance criteria
- [ ] No visible blur or blockiness at 1440 px, 1024 px and ~400 px widths (check on a 2× DPR display too)
- [ ] The image shows the game itself, not menu UI with buttons cut off at the edges
- [ ] `npm run build` succeeds

## Out of scope
- Compression / modern formats (F12)
- Card layout or grid changes
