# F05 · Replace the "COMING SOON" Bearer card art with a text-free image

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | XS | Done |

**Depends on:** F01 (same source image and generated variants; do F01 first and reuse them)
**Blocked on:** — **The studio supplied `public/games/BearerNoText.png` (1672×940, no text) on 2026-09-12.** The current card variants (`bearer-*.avif/webp/jpg`) were generated from the old "COMING SOON" art and must be regenerated from this source.

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
- [x] No baked-in "COMING SOON" (or other marketing text) is visible on the Bearer card at any width
- [x] Subject reads clearly at 1440 px, 1024 px and ~400 px widths
- [x] Link targets at `src/main.js:40-41` are unchanged
- [x] `npm run build` succeeds

## Result
The `bearer-*` variants were regenerated from `art-src/BearerNoText.png` (the F01 source) at the same
names and widths, so the old "COMING SOON" exports are replaced rather than left behind as orphans:
`bearer-{640,960,1280,1600}.{avif,webp}` plus the `bearer-1280.jpg` fallback, 4.7–42.4 KB each.
Markup, `sizes`, the intrinsic 1280×720 and both link targets are unchanged. The card's default
centred crop keeps the bear in frame from 1440 px down to 400 px, so no `object-position` modifier
was needed.

## Out of scope
- Hero image (F01)
- Compression / WebP / AVIF (F12)
- Changing the "In development" status copy
