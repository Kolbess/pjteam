# C13 · Add the Bearer press kit

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | M | Blocked |

**Depends on:** C12, C07; C09, C19 (soft)
**Blocked on:** From the studio, for Bearer:
- **Factsheet:** release date or "TBA", platforms, price or "TBA", genre, languages
- **Copy:** short (~50 words) and long (~150–300 words) descriptions, a feature list (can reuse C03), and credits
- **Key art:** 1920×1080 or larger, with and without logo/text
- **Logo:** the Bearer logo as transparent PNG in light and dark versions
- **Screenshots:** full-resolution PNGs (from C07)
- **GIFs:** 2–3, ≤ ~8 MB each (e.g. converted from the C07 clips)
- **Trailer file:** a downloadable trailer, 1080p H.264 MP4. GitHub rejects files over 100 MB, so keep it under ~90 MB or supply an external download link.

## Problem
After C12 there is a studio press page but no game-level kit. Press covering Bearer have no factsheet, no clean key art (the only art in the repo has a baked-in banner, see F05) and no downloadable screenshots or trailer.

## Goal
`/pjteam/press/bearer/` offers everything needed to write about Bearer: facts, copy, key art, logos, screenshots, GIFs, the trailer and credits. It is available as individual files and one ZIP, with no password.

## Suggested approach
- Add `press/bearer/index.html` to `build.rollupOptions.input`. Reuse C12's layout and section styles as a per-game template, so C14 is mostly content.
- Sections:
  1. Factsheet
  2. Description (short + long)
  3. Features
  4. Videos: the C09 facade, plus a direct download link
  5. Images: thumbnails linking to full-res files
  6. GIFs
  7. Logo & key art
  8. Awards & quotes (C19, when available)
  9. Credits
  10. Contact
  11. Video policy link (C18)
- Pull the pitch, features and facts from `src/data/games.js` wherever they overlap with the game page, so the two can't drift.
- Put the assets under `public/press/bearer/`. Build `public/press/bearer-presskit.zip` offline (images, GIFs, logos, `factsheet.txt`) and link the trailer separately if it's large.
- Link to this kit from the Bearer game page ("Press kit") and from the C12 Projects section.
- Keep the committed press assets for Bearer under ~100 MB in total. GitHub Pages sites have a 1 GB limit.

## Acceptance criteria
- [ ] Every item in the "Blocked on" list is present and downloadable from the page
- [ ] The ZIP opens and matches the page contents; no password or form
- [ ] Full-res screenshots download at their original resolution (not the compressed site variants)
- [ ] Reachable from the Bearer game page and the studio press page
- [ ] Reads correctly at ~400 px and by keyboard
- [ ] `npm run build` succeeds

## Out of scope
- The Kindred Paws kit (C14)
- Writing the copy or producing the art
