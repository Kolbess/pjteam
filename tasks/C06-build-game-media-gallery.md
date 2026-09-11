# C06 · Build a lightweight media gallery for game pages

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | M | Todo |

**Depends on:** C01; F10 (reduced-motion rules); F12 (reuse its `<picture>`/`srcset` pattern)
**Blocked on:** — Real media arrives in C07/C08. Build and test with the existing `public/games/*.png` and any sample clip, but don't ship placeholder media.

## Problem
- A game can only show one image today (`src/main.js:40`, `:44`). `public/games/` holds just `bearer.png` and `kindred-paws.png`.
- Nothing on the site can play video, so there's no way to show how the games actually move.

## Goal
Game pages can show 4–6 screenshots and 3–5 short looping clips in a responsive, accessible grid. Clips load only when needed, and there is no gallery library.

## Suggested approach
- **Data:** a `media` array per game in `src/data/games.js`: `{ type: 'image' | 'video', src, poster, alt, width, height }`. Files go under `public/games/<slug>/`.
- **Markup:** a `<section aria-labelledby="…">` with an `<h2>` and a `<ul>` grid.
  - Images: `<img loading="lazy" width height alt>`, using F12's `<picture>` + `srcset` pattern.
  - Clips: `<video muted loop playsinline preload="none" poster="…">` with an MP4 (H.264) source and optionally WebM.
  - Use no GIFs on the site. They are many times larger than MP4. GIFs are for the press kit (C13).
- **Playback:**
  - Clips play only while in view (IntersectionObserver play/pause).
  - Under `prefers-reduced-motion: reduce` they don't autoplay; show the poster and a play button instead.
  - Each clip needs a visible pause/play control, because moving content longer than 5 s must be pausable (WCAG 2.2.2).
- **Enlarge:** clicking a screenshot opens it full size in a native `<dialog>`. Close on `Escape` or a backdrop click, and return focus to the thumbnail. Prev/next buttons are optional. Linking to the full-size file is an acceptable simpler fallback.
- **Budgets:**
  - Screenshots ≤ ~200 KB each at 1280 px wide (WebP).
  - Clips 5–10 s, 720p, no audio track, ≤ ~1.5 MB each. Example: `ffmpeg -i in.mp4 -an -vf scale=1280:-2 -c:v libx264 -crf 26 -preset slow -movflags +faststart out.mp4`.
- **Layout:** 2–3 columns on desktop, 1 column under 760 px (same breakpoint as `src/style.css:81`).
- Render nothing when a game has no media.

## Acceptance criteria
- [ ] Keyboard: Tab reaches each screenshot, Enter opens the dialog, `Escape` closes it and focus returns to the same thumbnail
- [ ] With "prefers-reduced-motion: reduce" emulated, no clip plays until the user starts it
- [ ] Every clip has a visible, keyboard-operable pause/play control
- [ ] Network tab: video files are not requested until their clip scrolls near the viewport
- [ ] No layout shift as media loads (width/height or `aspect-ratio` set; Lighthouse CLS < 0.1)
- [ ] Single column with no horizontal scroll at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Capturing and choosing the media (C07, C08)
- Trailer embed (C09), fan-art wall (C26)
