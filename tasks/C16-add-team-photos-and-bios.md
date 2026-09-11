# C16 · Replace the gradient portraits with team photos and short bios

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** F07 (settles who is shown); F11 (soft: bio text size)
**Blocked on:** For each person shown after F07:
- A portrait photo, at least 800×1000 px (4:5) and in a consistent style/background
- The person's written consent to publish it
- A 1–2 sentence bio (≤ ~160 characters)
- Optionally, one personal link (portfolio, Bluesky)

## Problem
- Every portrait is a CSS gradient with initials (`src/main.js:67-71`, `.portrait-one`…`.portrait-five` at `src/style.css:69-73`).
- Each card shows only a name and a 9 px role (`src/main.js:67-68`, `src/style.css:75`). The studio sells itself as "people who care" (`src/main.js:56`), yet no one's face or voice appears.

## Goal
Each team member shows a real photo and a short bio. The same data can feed the press kit credits (C12).

## Suggested approach
- Move the team into a small data array (e.g. `src/data/team.js`: `name`, `role`, `bio`, `photo`, `link`) and render the cards from it. C12 reuses it.
- Photos go in `public/team/`, following the F12 pattern: WebP at 1× and 2× for the 240 px desktop box (`src/style.css:66`), the 220 px box at ≤760 px (`:99`) and the 280 px box at ≤430 px (`:108`).
- Use `<img width height loading="lazy" alt="">` inside `.team-portrait`. The name in the `<h3>` right below already identifies the person, so a descriptive alt would just repeat it.
- Remove the `portrait-*` gradient from members who have a photo. Keep it as the fallback for anyone without one. Keep the `::before` frame (`src/style.css:67`) if it still suits real photos.
- Show the bio as `<p class="team-bio">` at ≥ 14 px. Don't reuse the 9 px role style.

## Acceptance criteria
- [ ] Every shown member has a photo and bio (or the gradient fallback, if the studio chooses)
- [ ] Photos are sharp on a 2× display and ≤ ~60 KB each; no layout shift while loading
- [ ] The grid has no awkward gaps at 1440 px, 760 px and ~400 px (`src/style.css:65`, `:98`, `:107`)
- [ ] `npm run build` succeeds

## Out of scope
- Who is on the team or hiring (F07, C24)
