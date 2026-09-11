# F03 · Move the footer into a real `<footer>` and show the current year

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | S | Todo |

**Depends on:** —
**Blocked on:** —

## Problem
- The footer row is hard-coded as "PJTeam Studio, 2025" (`src/main.js:79`), so the year is already out of date.
- The row (`<div class="contact-footer">`, `src/main.js:79`) sits inside `<section class="contact" id="contact">` (`src/main.js:75-80`), which is inside `<main>` (`src/main.js:18-81`). There is no `<footer>` element and no `contentinfo` landmark.
- Its spacing is tied to the contact section: `.contact { padding-bottom: 30px }` (`src/style.css:76`), `.contact-footer { margin-top: 150px; … }` (`src/style.css:80`), and the mobile override at `src/style.css:102`.

## Goal
The site ends with a semantic `<footer>` outside `<main>` that shows the current year automatically. It looks the same as it does today.

## Suggested approach
- In `src/main.js`, move the footer row out of the contact section and place it after `</main>` as `<footer class="site-footer section-shell">…</footer>`.
- Render the year as `${new Date().getFullYear()}`. The page is rendered in the browser, so this is always current. Alternatively use a range like `2025–${year}` if the studio wants its founding year shown (ask; do not guess).
- Move the `.contact-footer` rules (`src/style.css:80`, `:102`) to the new footer class, so the 150 px / 95 px gap and the top border look unchanged.
- Keep the three items: year, "Made with curiosity.", and the social slot (the social slot is handled in F04).

## Acceptance criteria
- [ ] The DOM has exactly one `<footer>`, a sibling after `<main>`; the accessibility tree shows a `contentinfo` landmark
- [ ] The footer shows the current year (2026 at time of writing), with no hard-coded year left in `src/main.js`
- [ ] Visual spacing and border match the current design at desktop and ~400 px (items wrap cleanly on mobile)
- [ ] `npm run build` succeeds

## Out of scope
- Turning "Instagram · Bluesky" into links (F04)
- Footer font size (F11)
