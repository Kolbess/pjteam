# C08 · Add Kindred Paws screenshots and gameplay loops

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** C06, C04
**Blocked on:** Kindred Paws media captured by the studio, with the display order chosen:
- 4–6 gameplay screenshots (not menus). Native resolution, or integer-scaled if pixel art.
- 3–5 gameplay clips, 5–10 s each
- A one-line caption for each clip

## Problem
The only Kindred Paws image is a 315×250 itch.io menu screen (`public/games/kindred-paws.png`, see F06). The page (C04) has no gameplay to show.

## Goal
The Kindred Paws page shows 4–6 crisp screenshots and 3–5 looping clips within C06's budgets.

## Suggested approach
- Pixel art must stay crisp:
  - Upscale screenshots only by whole numbers (2×/3×/4×) with nearest-neighbour.
  - Export as lossless WebP or PNG.
  - Keep `image-rendering: pixelated` (`src/style.css:42`) on the gallery images.
- Scale clips with nearest-neighbour too, e.g. `-vf scale=iw*4:ih*4:flags=neighbor`. Use a lower CRF than C06's default if edges smear.
- Keep full-resolution originals for the press kit (C14).
- Write specific alt text per screenshot. Add the entries to the `kindred-paws` `media` array in `src/data/games.js`.

## Acceptance criteria
- [ ] The Kindred Paws page shows 4–6 screenshots and 3–5 clips in the studio's chosen order
- [ ] No blur or uneven pixel sizes at 1440 px and ~400 px on a 2× display
- [ ] Every screenshot has meaningful, distinct alt text
- [ ] Each clip ≤ ~1.5 MB
- [ ] `npm run build` succeeds

## Out of scope
- Gallery behaviour (C06), trailer (C09), press exports (C14)
