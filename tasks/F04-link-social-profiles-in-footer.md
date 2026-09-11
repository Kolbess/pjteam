# F04 · Link the Instagram and Bluesky profiles in the footer

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P2 | XS | Blocked |

**Depends on:** F03 (same markup, move footer first)
**Blocked on:** The studio's real Instagram and Bluesky profile URLs, and confirmation that both accounts exist and should be public.

## Problem
The footer shows "Instagram&nbsp; · &nbsp;Bluesky" as plain text in a `<span>` (`src/main.js:79`). It looks like a link but can't be clicked, focused or used by screen readers.

## Goal
Each network name is a working link to the studio's profile. If a profile doesn't exist, its name is removed.

## Suggested approach
- Replace the `<span>` with two `<a>` elements (`target="_blank" rel="noopener"`, matching the itch.io links at `src/main.js:41`), separated by a decorative ` · ` wrapped in `aria-hidden="true"`.
- Give them a hover style consistent with `.text-link` / `.demo-link` (`src/style.css:13-14`, `:50`).
- If the URLs can't be supplied, remove the text rather than shipping dead labels. The studio decides.

## Acceptance criteria
- [ ] Both names are links that open the correct profiles in a new tab
- [ ] Both are reachable with Tab and show a visible focus indicator (see F09)
- [ ] Footer still wraps cleanly at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Adding other networks or icons
- Footer structure and year (F03)
