# C25 · Add a public roadmap to the game pages

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | S | Blocked |

**Depends on:** C03, C04
**Blocked on:**
- The studio's commitment to keep the roadmap current (e.g. a monthly review)
- The initial Now / Next / Later items per game. No dates unless the studio is confident in them.

## Problem
Visitors see "In development" (`src/main.js:41`, `:45`) with no sense of what's being worked on or what comes next. Followers have no reason to come back.

## Goal
Each game page shows a short Now / Next / Later roadmap with a "last updated" date.

## Suggested approach
- Add `roadmap: { updated, now: [], next: [], later: [] }` per game in `src/data/games.js`.
- Render three short lists under an `<h2>Roadmap</h2>`, in columns on desktop and stacked under 760 px, with "Last updated <date>" beneath.
- Keep it static, with no Trello/Notion embeds (a third-party request, and heavy). If the studio already keeps a public board, a plain link out is fine.
- Render nothing for a game without a roadmap.

## Acceptance criteria
- [ ] A "Last updated" date is shown
- [ ] Items are studio-approved; no invented dates
- [ ] Stacks cleanly at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Voting, comments or issue-tracker integrations
