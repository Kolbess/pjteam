# C12 · Add the studio press kit page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | M | Blocked |

**Depends on:** C01; C02 (soft: publish press URLs on the final domain), C16 (soft: team credits), C17 (soft: social links)
**Blocked on:**
- **Logos:** the PJTeam logo as transparent PNGs in a light (white) and a dark (ink `#101b3f`) version, at least 1000 px, plus SVG if one exists. The repo doesn't have these:
  - `public/logo.png` is the mark on a solid blue gradient square, not transparent.
  - `public/logo-mark.png` looks like a white mark on transparency (light version only). Confirm it's the approved export.
- **Factsheet:** founding year, team size, location (Białystok, Poland; confirm), press contact (`hello@pjteam.games` or a dedicated address) and social links.
- **Copy:** a studio description, short (~50 words) and long (~150–250 words), plus a short history.
- **Credits:** team credits (name + role) for everyone who agrees to be listed.

## Problem
- There is no press page. Journalists and creators have to piece things together from itch.io or email the studio.
- The main nav (`src/main.js:9-14`) has only Games, Studio, Team and Contact.

## Goal
A presskit()-style page at `/pjteam/press/` that has every studio fact and asset on one page, one ZIP download, no password or sign-up form, and a link in the main nav.

## Suggested approach
- Add `press/index.html` to `build.rollupOptions.input` with a static `<head>` (title "PJTeam press kit", description, canonical, og tags). Use the shared layout from C01. This page is mostly static text; writing the body as static HTML is fine and works without JS.
- Sections, in presskit() order:
  1. **Factsheet** (`<dl>`: Developer, Based in, Founded, Team size, Website, Press contact, Social)
  2. **Description**
  3. **History**
  4. **Projects**: cards linking to each game page and its press kit (C13/C14)
  5. **Logo & icon**: previews on light and dark swatches, each with a download link
  6. **Team**: from C16 data
  7. **Streaming and videos**: anchor `#video-policy`, filled by C18
  8. **Contact**
- **Downloads:**
  - Individual files as `<a href="…" download>`.
  - One `public/press/pjteam-presskit.zip` (logos, factsheet and descriptions as `.txt`).
  - Build the ZIP offline and commit it; no build dependency. Keep it under ~25 MB.
- Keep all copy as real text so press can copy-paste it.
- Add "Press" to the shared header nav and the footer. Check that F14's mobile menu fits the extra item.

## Acceptance criteria
- [ ] "Press" is in the header nav on every page (desktop and mobile menu) and leads to `/pjteam/press/`
- [ ] Every download link works on the deployed base path; the ZIP opens and contains the listed files
- [ ] No password, email gate or form anywhere on the page
- [ ] Logo previews are visible on both the light and dark swatches
- [ ] Text is selectable; the page reads correctly at ~400 px and by keyboard
- [ ] `npm run build` succeeds

## Out of scope
- Per-game press kits (C13, C14)
- Streamer policy wording (C18), traction/quotes (C19)
