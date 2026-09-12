# F01 · Replace the stock hero photo with real Bearer art

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | S | Done |

**Depends on:** — (shares the asset with F05; optimise the new image as part of this task, following F12's approach)
**Blocked on:** — **The studio supplied `public/games/BearerNoText.png` (1672×940, 1.6 MB, no text) on 2026-09-12.** It shows a teddy bear on a ledge looking out over a ruined, foggy low-poly city; the bear sits bottom-centre, so tune `object-position` to keep it visible in the near-square hero crop. The 1.6 MB PNG must not ship as-is: generate AVIF/WebP variants like F12 did for the card, and keep the raw PNG out of `dist/`.

## Problem
- The hero image is an Unsplash stock photo loaded from a third-party host: `src/style.css:27` (`.hero-art { background: url('https://images.unsplash.com/photo-1500530855697-…') … }`).
- The element claims to be game art: `src/main.js:26` `role="img" aria-label="A colorful mountain landscape from an independent game"`. The label overlay at `src/main.js:27` says "Currently making / Something worth getting lost in.", which suggests the picture is from a studio game. It is not.
- Every visit makes a request to `images.unsplash.com`, which shares the visitor's IP with a third party (a GDPR concern) and is an extra point of failure.

## Goal
The hero shows real, self-hosted Bearer art with honest alt text, and the page no longer requests anything from Unsplash.

## Suggested approach
- Add the supplied image under `public/` (e.g. `public/games/bearer-hero.jpg` or `.webp`). Do not hotlink it from itch.io.
- Replace the CSS background with a real `<img>` inside `.hero-art` (`src/main.js:26`), sized with `object-fit: cover` and absolute positioning, like `.game-cover` at `src/style.css:41`. Use `${import.meta.env.BASE_URL}` for the path. Give it `fetchpriority="high"`, explicit `width`/`height` and no `loading="lazy"`, because it is above the fold.
- Remove `role="img"` and `aria-label` from the wrapper `div`. Give the `<img>` an `alt` that describes what is actually in the image (write it against the final asset, e.g. "Bearer: a teddy bear looks out over a ruined, foggy city street").
- Remove the Unsplash `background` from `src/style.css:27`. Keep the box-shadow, min-height and padding. Tune `object-position` so the subject stays visible at the mobile `min-height: 390px` (`src/style.css:88`).
- Revisit the tint overlay at `src/style.css:28` (`.hero-art::after`). Keep it only if the art still reads clearly.
- Optionally change the label at `src/main.js:27` to name the game (e.g. "Currently making / **Bearer**"). Confirm the wording with the studio.

## Acceptance criteria
- [x] No request to `images.unsplash.com` in the DevTools Network tab; `grep -r unsplash src index.html` returns nothing
- [x] Hero shows the Bearer art at desktop (1440 px) and mobile (~400 px) widths, subject not cropped out, no text or overlay collisions with `.art-label` / `.art-coordinate`
- [x] The hero image has meaningful `alt`; no `role="img"` / `aria-label` claiming unrelated content remains
- [x] Image loads correctly on the deployed `/pjteam/` base path (not just on `localhost:5173/`)
- [x] `npm run build` succeeds

## Result
The source PNG now lives in `art-src/BearerNoText.png` (outside `public/`, so it is never served or
copied into `dist/`). The shipped hero variants `public/games/bearer-hero-{640,960,1280,1600}.{avif,webp}`
plus a `bearer-hero-1280.jpg` fallback were generated from it: 4.7–24.4 KB each, 140 KB for the whole
set, against 1.6 MB for the raw PNG. `object-position: 42% 100%` keeps the bear inside the crop.

## Out of scope
- Image format/size optimisation and `srcset` (F12)
- Self-hosting the Google Fonts `@import` at `src/style.css:1`, which is also an external request (separate change)
- Changing the hero copy or layout
