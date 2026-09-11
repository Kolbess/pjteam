# C23 · Add FAQs to the game pages

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | S | Blocked |

**Depends on:** C03, C04
**Blocked on:** Answers per game, and only for questions the studio can answer honestly today:
- Platforms (current and planned)
- Release timing ("no date yet" is a fine answer)
- Languages
- Steam Deck / controller support
- Whether demo progress carries over

## Problem
Players and press ask the same practical questions. The game pages (C03/C04) only give the facts list, and there's nowhere to say "no date yet" or "controller support planned".

## Goal
Each game page ends with a short FAQ that can be scanned and expanded, and works without JavaScript.

## Suggested approach
- Add `faq: [{ q, a }]` per game in `src/data/games.js`.
- Render an `<h2>FAQ</h2>` followed by one `<details><summary>question</summary><p>answer</p></details>` per item. No JS is needed. Style the summary marker to match the site.
- Steam Deck wording: don't write "Steam Deck Verified" unless Valve has verified the game. "Runs on Steam Deck" or "Tested on Steam Deck" is fine if true.
- Render nothing for games with no FAQ.

## Acceptance criteria
- [ ] Each summary toggles with Enter/Space and shows a visible focus ring (F09)
- [ ] Answers are studio-approved; no invented dates or platforms
- [ ] Reads well at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- FAQPage structured data (JSON-LD)
- A studio-wide FAQ page
