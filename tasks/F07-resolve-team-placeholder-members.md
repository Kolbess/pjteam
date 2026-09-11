# F07 · Resolve the "???" placeholder team members

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | S | Blocked |

**Depends on:** —
**Blocked on:** A studio decision: (a) are the 3D/2D Artist, Game Designer and Sound Artist roles actually open, and should the site advertise them? (b) If yes, what should applicants do (email address, subject line, a short line per role)? (c) Or should the empty slots just be removed?

## Problem
- The heading says "Five curious minds." (`src/main.js:63`), but only two people are named (`src/main.js:67-68`). The other three cards show "???" with a "?" portrait (`src/main.js:69-71`), which reads as unfinished.
- The studio copy says the team "brings together design, code, art and sound under one roof" (`src/main.js:57`), which overstates the current named team.
- The grid is built for five (`.team-grid` is `repeat(5, 1fr)` at `src/style.css:65`, 2 columns at `:98`, 1 column at `:107`).

## Goal
The team section only shows real people, plus at most one clear "join us" card, and the heading and copy match that.

## Suggested approach
- **Option A: hiring.** Keep the two members and replace the three "???" cards with one "We're hiring" card that lists the open roles (from `src/main.js:69-71`) and links to `mailto:hello@pjteam.games` (the address used at `src/main.js:78`) with a subject such as "Join PJTeam". Retitle the section, e.g. "Two curious minds (for now)." Final wording is the studio's call.
- **Option B: remove.** Delete the three placeholder cards and retitle to match the number of members.
- Either way, change `.team-grid` so the remaining cards don't leave empty columns (e.g. `repeat(auto-fill, minmax(200px, 1fr))` or a fixed 3-column grid), and check the 2-column and 1-column breakpoints.
- Tone down "design, code, art and sound" at `src/main.js:57` if Option B is chosen. The studio confirms the copy.

## Acceptance criteria
- [ ] No "???" or "?" placeholder remains in the rendered page
- [ ] The heading's number (if any) matches the number of people shown
- [ ] With Option A, the hiring card is a single focusable link with a descriptive name and works with the keyboard
- [ ] The grid has no awkward gaps at 1440 px, 760 px and ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Real portraits/photos for the named members (future content task)
- Nav, "Meet the team" link (F02)
