# F10 · Respect `prefers-reduced-motion`

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | XS | Todo |

**Depends on:** —
**Blocked on:** —

## Problem
The site animates without checking the user's motion preference:
- `html { scroll-behavior: smooth; }` (`src/style.css:6`) smooth-scrolls on every nav/anchor click, including long jumps from the header to `#contact`.
- `.button:hover { transform: translateY(-3px); }` with a transform transition (`src/style.css:23-24`).
- Game cover zoom: `.game-cover { transition: transform .4s ease; }` + `.game-image-link:hover .game-cover { transform: scale(1.04); }` (`src/style.css:41`, `:43`).
- `src/style.css` has no `@media (prefers-reduced-motion: reduce)` block.

## Goal
Users who ask their OS for reduced motion get instant scrolling and no movement or zoom effects. Colour transitions may stay.

## Suggested approach
- Add one block at the end of `src/style.css`:
  - `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .button:hover { transform: none; } .game-image-link:hover .game-cover { transform: none; } … }`
- Alternatively, move `scroll-behavior: smooth` into `@media (prefers-reduced-motion: no-preference)` so it's opt-in.
- Check any motion added later (e.g. the F14 menu) against the same query.

## Acceptance criteria
- [ ] With DevTools "Emulate CSS prefers-reduced-motion: reduce": nav links jump instantly, buttons don't lift, game covers don't zoom
- [ ] With no preference, current behaviour is unchanged
- [ ] `npm run build` succeeds

## Out of scope
- Removing or redesigning the animations for everyone
- Focus styles (F09)
