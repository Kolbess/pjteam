# F11 · Raise the minimum text size to 12 px

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | S | Todo |

**Depends on:** —
**Blocked on:** —

## Problem
Much of the meaningful text is 9–10 px monospace uppercase, which is hard to read, especially on phones:

| Selector | Size | Where |
|---|---|---|
| `.art-coordinate` | 9px | `src/style.css:31` |
| `.status` ("In development") | 9px | `src/style.css:51` |
| `.team-member p` (roles) | 9px | `src/style.css:75` |
| `.contact-footer` | 9px | `src/style.css:80` |
| `.eyebrow` | 10px | `src/style.css:18` |
| `.game-image span` (01/02/03) | 10px | `src/style.css:40` |
| `.game-meta p` ("Details coming soon") | 10px | `src/style.css:48` |
| `.demo-link` ("Play demo on itch.io") | 10px | `src/style.css:49` |
| `.site-nav` | 11px | `src/style.css:12` |
| `.team-portrait span` | 11px | `src/style.css:68` |

## Goal
No readable text renders below 12 px (0.75rem) at any breakpoint, and the tracked-caps look stays.

## Suggested approach
- Bump each selector above to at least `0.75rem`. Use `0.8125rem` for the call to action `.demo-link` and for `.status`.
- Use `rem` so the text follows the user's browser font-size setting.
- Re-check the layouts that depend on small sizes: `.status` is absolutely positioned top-right of `.game-meta` (`src/style.css:51`) and may collide with the `<h3>` / `.demo-link` in narrow cards; `.contact-footer` wraps on mobile (`src/style.css:102`).
- The purely decorative `.art-coordinate` and card numbers may be excepted if marked `aria-hidden="true"`. Note any exception in the PR.

## Acceptance criteria
- [ ] No computed `font-size` below 12 px on visible text at 1440 px, 760 px and ~400 px (spot-check with DevTools)
- [ ] "In development" doesn't overlap the game title or demo link at any width between 320 px and 1440 px
- [ ] Page still looks right with browser font size set to "Large"
- [ ] `npm run build` succeeds

## Out of scope
- The 9 px `.site-nav` rule at `src/style.css:105` (≤430 px), which is replaced by the mobile menu in F14
- Colour/contrast changes
