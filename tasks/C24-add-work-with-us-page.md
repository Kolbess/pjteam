# C24 · Add a "Work with us" page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | S | Blocked |

**Depends on:** F07 (the hiring decision); C01; C21 (soft: applicant data retention)
**Blocked on:**
- **Roles:** the F07 hiring decision, then for each open role a title, a 2–3 line description and what the studio offers (paid, revenue share or volunteer; remote or Białystok). State these honestly.
- **How to apply:** email and subject line, portfolio expectations.
- **Retention:** how long applications are kept.

## Problem
- The team grid advertises three unnamed roles as "???" (`src/main.js:69-71`).
- At most, F07 turns them into one "We're hiring" card with a mailto link. There's still nowhere to describe a role, set expectations or explain how applications are handled.

## Goal
`/pjteam/jobs/` lists the open roles and how to apply, and the F07 hiring card links to it. If no roles are open, the page says so and invites portfolios, or this task is closed.

## Suggested approach
- Static page (`jobs/index.html` in `build.rollupOptions.input`) using the shared layout.
- Show one `<article>` per role (title, description, what we offer, location), plus a "How to apply" section with `mailto:hello@pjteam.games?subject=…` (URL-encoded subject).
- Add a line on how long application data is kept, linking to the privacy policy (C21).
- Link it from the team section's hiring card (F07 Option A) and from the footer.

## Acceptance criteria
- [ ] The F07 hiring card and the footer both lead to `/pjteam/jobs/`
- [ ] The apply link opens a pre-filled email with the right subject
- [ ] No role is listed that the studio hasn't confirmed
- [ ] Reads well at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Application forms, file uploads or an applicant tracking system
