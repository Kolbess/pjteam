# C14 · Add the Kindred Paws press kit

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** C13 (template), C08; C09, C19 (soft)
**Blocked on:** The same set as C13, for Kindred Paws:
- **Factsheet:** release date or "TBA", platforms, price or "TBA", genre, languages
- **Copy:** short and long descriptions, a feature list, and credits
- **Key art:** with and without logo/text
- **Logo:** transparent PNG in light and dark versions
- **Screenshots:** full-resolution originals (from C08)
- **GIFs:** 2–3
- **Trailer file:** a downloadable trailer, or an external download link

## Problem
After C13, only Bearer has a press kit. Kindred Paws has nothing for press beyond the itch.io page, and its only in-repo art is a low-res menu screen (F06).

## Goal
`/pjteam/press/kindred-paws/` offers the same package as the Bearer kit.

## Suggested approach
- Add `press/kindred-paws/index.html` from the C13 template and add it to `build.rollupOptions.input`.
- Put assets in `public/press/kindred-paws/` and build `public/press/kindred-paws-presskit.zip` offline.
- Pixel art: provide screenshots at native resolution and at an integer upscale (e.g. 4×). Journalists often resize with smoothing, so clean large versions help.
- Link to it from the Kindred Paws game page and the C12 Projects section.

## Acceptance criteria
- [ ] Every item in the "Blocked on" list is present and downloadable
- [ ] The ZIP opens and matches the page contents; no password or form
- [ ] Reachable from the Kindred Paws game page and the studio press page
- [ ] `npm run build` succeeds

## Out of scope
- Changes to the C13 template beyond what Kindred Paws needs
