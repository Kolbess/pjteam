# F14 · Add a usable mobile navigation

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | M | Todo |

**Depends on:** F09 (reuse its focus styles)
**Blocked on:** —

## Problem
- Under 760 px the header only tightens the nav gap and hides "Let's talk" (`src/style.css:83-84`).
- Under 430 px the nav shrinks to `font-size: 9px; gap: 10px` (`src/style.css:105`) and the wordmark text is hidden (`src/style.css:106`). That leaves four 9 px uppercase links (`src/main.js:10-13`) with tap targets far below 44×44 px, next to a bare 32 px logo.
- The "Let's talk" contact action (`src/main.js:15`) disappears from the header entirely on mobile.

## Goal
On narrow screens the nav is a readable, tappable menu, text at least 14 px and targets at least 44 px, that works with touch, keyboard and screen readers.

## Suggested approach
- Pick the simplest option that fits the design:
  - **Disclosure menu:** add a `<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>` to the header in `src/main.js`. Under 760 px, hide `.site-nav` until the button is toggled, then show it as a full-width stacked list with "Let's talk" as the last item. Wire it up with a few lines of vanilla JS after the `innerHTML` assignment in `src/main.js`: toggle `aria-expanded`, close on link click and on `Escape`, and return focus to the button.
  - **Or wrap:** if the studio prefers no hamburger, let the header wrap so the nav sits on its own row below the wordmark at ≥13 px with padded links. Simpler, but check it doesn't crowd the hero.
- Remove the 9 px rule at `src/style.css:105`, and restore the wordmark text if space allows.
- Keep it CSS + vanilla JS, with no dependencies. Respect F10 (no slide animation under reduced motion).

## Acceptance criteria
- [ ] At 360–430 px every nav item is at least 14 px and each tap target at least 44×44 px
- [ ] With the disclosure option: the button announces "Menu, collapsed/expanded"; Tab order is button → links; `Escape` closes and returns focus to the button; choosing a link closes the menu and scrolls to the section
- [ ] "Let's talk" / Contact is reachable from the mobile header
- [ ] Desktop (≥761 px) header looks unchanged
- [ ] No horizontal scroll at 320 px
- [ ] `npm run build` succeeds

## Out of scope
- Sticky/fixed header behaviour
- Other font-size fixes (F11)
