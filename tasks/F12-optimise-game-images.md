# F12 · Serve game and hero images as WebP/AVIF with `srcset`

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | M | Done |

**Depends on:** F01, F05, F06 (soft: can run now against the current files, then re-run for new art)
**Blocked on:** —

## Problem
- `public/games/bearer.png` is a 1.4 MB (1,395,889 bytes) 1919×1079 PNG, used at `src/main.js:40`. The largest box it fills is ~470×270 CSS px on desktop and full-width × 300 px on mobile (`src/style.css:38`, `:93`).
- No image offers modern formats or responsive sizes. Every `<img>` has a single `src` and no `srcset`/`sizes`/`<picture>` (`src/main.js:40`, `:44`, `:48`).
- Game covers have no `width`/`height` attributes. That doesn't cause layout shift today, because the parent box has a fixed height, but it's worth adding.

## Goal
Each image downloads at roughly the size it's displayed, in WebP/AVIF with a PNG/JPEG fallback, and the Bearer card weighs well under 150 KB on mobile.

## Suggested approach
- Pre-generate variants offline (Squoosh, `cwebp`/`avifenc`, or `sharp` run once from a local script) and commit them to `public/games/`, e.g. `bearer-640.webp`, `bearer-1280.webp`, `bearer-640.avif`, `bearer-1280.avif`, plus a compressed JPEG fallback. Don't add a Vite image plugin or other build-time dependency unless there's a clear reason.
- Use `<picture>` with AVIF/WebP `<source srcset>` entries and `sizes` that match the grid (`src/style.css:37`: 1.4fr/1fr/1fr on desktop, `100vw` under 760 px). Keep the existing `class`, `alt=""` and `loading="lazy"`.
- Do the same for the new hero image from F01, but without `loading="lazy"` and with `fetchpriority="high"`.
- Kindred Paws: if it stays pixel art, export lossless WebP at integer scales (1×/2×/4×) and keep `image-rendering: pixelated`.
- Keep the original PNGs out of the markup once variants exist. Delete them only if nothing else references them.

## Acceptance criteria
- [ ] Network tab at ~400 px width (DPR 2) shows the Bearer card downloading a WebP/AVIF under 150 KB
- [ ] At 1440 px the image is still sharp (no visible blur versus today)
- [ ] Browsers without AVIF fall back to WebP, then to JPEG/PNG (test by removing sources in DevTools)
- [ ] Lighthouse "Properly size images" and "Serve images in modern formats" pass for the game images
- [ ] `npm run build` succeeds; image paths work under the `/pjteam/` base

## Out of scope
- Favicon / header logo (F13)
- Replacing the art itself (F01, F05, F06)
