# C07 · Add Bearer screenshots and gameplay loops

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Done (itch.io screenshots, no clips) |

**Depends on:** C06, C03
**Done 2026-09-13, as agreed with the studio:** the gallery uses the five screenshots from the itch.io page, in its order, as 640px WebP thumbnails with native-size WebP full views (all under 40 KB). They fall short of the brief: uneven sizes (795–1639px wide, not 1920×1080), and one shows the tutorial text. There are no clips. Swap in proper captures and add clips when the studio has them.
**Blocked on:** Bearer media captured by the studio, with the display order chosen:
- 4–6 screenshots, 1920×1080 PNG, with no debug/UI overlays and no text banners
- 3–5 gameplay clips, 5–10 s each, 1080p source, sound not needed
- A one-line caption for each clip

## Problem
The only Bearer image in the repo is the card art with a baked-in "COMING SOON..." banner (`public/games/bearer.png`, see F05). The Bearer page (C03) has nothing that shows the game in motion.

## Goal
The Bearer page shows 4–6 screenshots and 3–5 looping clips within C06's budgets.

## Suggested approach
- Export site variants with the F12/C06 settings: WebP at 1280 and 1920 px wide, plus MP4 clips at 720p with no audio. Generate each poster from the clip's first frame.
- Keep the full-resolution PNG screenshots and clip masters available for the press kit (C13). Only the compressed variants go into the page markup.
- Write specific alt text for each screenshot, describing the scene rather than repeating "Bearer screenshot".
- Add the entries to the `bearer` `media` array in `src/data/games.js`.

## Acceptance criteria
- [ ] The Bearer page shows 4–6 screenshots and 3–5 clips in the studio's chosen order
- [ ] Every screenshot has meaningful, distinct alt text
- [ ] Each clip is ≤ ~1.5 MB and each screenshot variant ≤ ~200 KB
- [ ] Media looks sharp at 1440 px and ~400 px on a 2× display
- [ ] `npm run build` succeeds

## Out of scope
- Gallery behaviour (C06), trailer (C09), GIF exports for press (C13)
