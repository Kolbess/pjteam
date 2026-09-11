# C05 · Add the Potion Stacker game page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | S | Blocked |

**Depends on:** C01; C15 (soft: a "Get notified" call to action needs the newsletter)
**Blocked on:** The studio deciding to announce Potion Stacker publicly, plus a pitch, facts (genre, platform, engine, status) and at least one piece of real art or a screenshot.

## Problem
- The Potion Stacker card has no link, only "Details coming soon" and "Planning phase" (`src/main.js:47-50`).
- It uses the studio mark as placeholder art (`src/main.js:48`, `.game-cover-mark`, `src/style.css:45`).
- C01 deliberately skips a page for it.

## Goal
Once announced, Potion Stacker has its own page like the other games. The home card links to it and offers a way to follow the game, since there is no demo yet.

## Suggested approach
- Add a `potion-stacker` entry to `src/data/games.js`, a `games/potion-stacker/index.html` with a static head (C01 pattern), and the entry in `build.rollupOptions.input`.
- With no demo, replace the demo button with "Get notified" linking to the newsletter signup (C15), or to `mailto:hello@pjteam.games` until C15 exists.
- Swap the placeholder card image once art exists. Remove `.game-cover-mark` from the card if it's no longer used.
- Add the URL to the sitemap if F16 is done.

## Acceptance criteria
- [ ] `/pjteam/games/potion-stacker/` builds and renders with the shared layout
- [ ] The home card title and image link to it; "Details coming soon" is gone
- [ ] No demo button is shown while there is no demo; the follow action works
- [ ] `npm run build` succeeds

## Out of scope
- Media gallery, trailer and press kit for Potion Stacker (reuse C06/C09/C13 later)
