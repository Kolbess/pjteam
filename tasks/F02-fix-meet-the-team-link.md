# F02 · Point "Meet the team" at the team section

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | XS | Done |

**Depends on:** —
**Blocked on:** —

## Problem
The "Meet the team" link in the studio section goes to `#contact` (`src/main.js:57`, `<a class="text-link" href="#contact">Meet the team …</a>`). The team section is `id="team"` (`src/main.js:60`), so clicking it jumps past the team to the contact block.

## Goal
"Meet the team" scrolls to the team section.

## Suggested approach
- In `src/main.js:57` change `href="#contact"` to `href="#team"`.

## Acceptance criteria
- [ ] Clicking "Meet the team" lands on the "The people" heading, on desktop and at ~400 px
- [ ] Activating the link with the keyboard (Tab to it, then Enter) moves to the team section
- [ ] `npm run build` succeeds

## Out of scope
- Team section content (F07)
- Header nav links (already correct at `src/main.js:10-13`)
