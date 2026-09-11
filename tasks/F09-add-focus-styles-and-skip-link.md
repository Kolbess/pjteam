# F09 · Add visible focus styles and a skip link

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | S | Todo |

**Depends on:** —
**Blocked on:** —

## Problem
- `src/style.css` has no `:focus` or `:focus-visible` rules at all. `a { color: inherit; text-decoration: none; }` (`src/style.css:8`) removes underlines, so keyboard users rely on the browser default ring. That ring is hard to see on the blue studio section (`src/style.css:53`) and on the dark `.button-dark` (`src/style.css:25`).
- There is no skip link. Keyboard users must tab through the wordmark, four nav links and "Let's talk" (`src/main.js:5-15`) before reaching content.
- `<main id="top">` (`src/main.js:18`) is used as the wordmark's target (`src/main.js:5`) but is not focusable.

## Goal
Every interactive element shows a clear, on-brand focus indicator when reached by keyboard. The first Tab stop on the page is a "Skip to content" link.

## Suggested approach
- Add a global `:focus-visible` rule (e.g. `outline: 2px solid var(--blue-dark); outline-offset: 3px;`). Add a light variant inside `.studio` (e.g. `outline-color: white` or `var(--ink)`) so it shows on the gradient.
- Add `<a class="skip-link" href="#content">Skip to content</a>` as the first element in the markup in `src/main.js`. Hide it visually until focused (translate it off-screen, show it on `:focus-visible`). Don't use `display: none`.
- Give `<main>` a target such as `id="content" tabindex="-1"`, keeping or migrating the `#top` anchor used by the wordmark. Also cover `.demo-link`, `.text-link`, `.contact-email` and `.button`.
- Don't reintroduce focus on the `aria-hidden`, `tabindex="-1"` image links at `src/main.js:40` and `:44`. They are intentionally skipped.

## Acceptance criteria
- [ ] Tabbing from the address bar shows "Skip to content" first; Enter moves focus into `<main>`
- [ ] Every link/button shows a visible focus ring with ≥3:1 contrast against its background, including in the blue studio section and on `.button-dark`
- [ ] Mouse clicks don't leave a ring behind (`:focus-visible`, not `:focus`)
- [ ] Works at ~400 px as well as desktop
- [ ] `npm run build` succeeds

## Out of scope
- Mobile menu (F14): its toggle button should reuse these styles
- Reduced motion (F10), font sizes (F11)
