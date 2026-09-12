# C19 · Show traction: demo downloads, jam results and player quotes

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P2 | S | In progress |

**Depends on:** C03, C04; C13, C14 (soft: press kit placement)
**Progress 2026-09-13:** jam results are done. The Kindred Paws page has a Recognition section built from the public Games for a Cause 2025 results (#4 Overall, #3 Compassion, #5 Gameplay of 19 entries), stored as `jamResults` in `src/data/games.js`. Still blocked: demo stats (itch.io analytics, private), quotes with permission, and any awards.
**Blocked on:** Figures and permissions from the studio:
- **Demo stats:** downloads/plays/ratings per demo from the itch.io analytics, each with an "as of" month.
- **Jam results:** jam name, year, placement/category, and a link to the results page.
- **Quotes:** player and press quotes, each with the source name, a link, and permission to quote.
- **Awards:** any awards or festival selections.

## Problem
- Game status is the only signal on the site ("In development", `src/main.js:41`, `:45`).
- Nothing shows that people have played or liked the demos, which is the strongest persuasion for both players and press.

## Goal
Each game page and press kit shows a small, honest block of proof: 1–3 stats, jam results and 2–3 quotes, all sourced and dated.

## Suggested approach
- Add `traction` fields per game in `src/data/games.js`:
  - `stats: [{ label, value, asOf }]`
  - `awards: [{ title, url }]`
  - `quotes: [{ text, source, url }]`
- On game pages, render a stats strip under the facts list. Render each quote as `<figure><blockquote>…</blockquote><figcaption>— <a>source</a></figcaption></figure>`.
- In the press kits (C13/C14), list the same data under "Awards & recognition" and "Selected quotes".
- Numbers are static and updated by hand. Round them down ("2,000+ downloads") and show the as-of date. Don't call the itch.io API from the browser; it needs a private key.
- Render nothing for a game with no data.

## Acceptance criteria
- [ ] Every figure shows its as-of date; every quote and award links to its source
- [ ] Nothing renders for games without traction data
- [ ] Reads well at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Live counters, review aggregation, testimonials without permission
