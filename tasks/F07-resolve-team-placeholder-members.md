# F07 · Resolve the "???" placeholder team members

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | S | Done |

**Depends on:** F18/C27 (the contact route and the shared layout it uses)
**Blocked on:** —

## Studio decision (2026-09-12)
**Option A: the studio is hiring.** Replace the three "???" cards with one "We're hiring" card listing the three open roles (3D/2D Artist, Game Designer, Sound Artist) and retitle the section.

**How applicants get in touch:** there is no working email — `pjteam.games` isn't bought, which is why F18 replaced the contact link with itch.io. Point the hiring card at the studio's Instagram instead (`https://www.instagram.com/pjteam.official`, the same URL F04 uses), worded so it's clear that's where to send a message. Do **not** use `mailto:hello@pjteam.games`, and don't invent an address. When the studio supplies a working email, the card switches to `mailto:` with a subject line — keep that a one-line change, next to F18's `CONTACT_EMAIL` constant.

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
- [x] No "???" or "?" placeholder remains in the rendered page
- [x] The heading's number (if any) matches the number of people shown
- [x] With Option A, the hiring card is a single focusable link with a descriptive name and works with the keyboard
- [x] The grid has no awkward gaps at 1440 px, 760 px and ~400 px
- [x] `npm run build` succeeds

## Outcome
Option A. The three "???" cards are one hiring card: heading "Two curious minds (for now).", card
"We're hiring ↗ / 3D/2D Artist, Game Designer, Sound Artist / Message us on Instagram", the whole
card a single link to the F04 Instagram URL. `.team-grid` is `repeat(3, 1fr)` capped at 760px, and
the hiring card spans the full second row at the 2-column breakpoint. Role descriptions and terms
are still open (C24); the card becomes a `mailto:` one-liner when `CONTACT_EMAIL` (F18) is real.

## Out of scope
- Real portraits/photos for the named members (future content task)
- Nav, "Meet the team" link (F02)
