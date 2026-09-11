# F18 · Hide the unreachable contact email until pjteam.games exists

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | XS | Todo |

**Depends on:** F03 (footer markup it sits next to)
**Blocked on:** —

## Problem
- The Contact section's only call to action is `mailto:hello@pjteam.games` (`src/main.js`, the `.contact-email` link). The studio hasn't bought `pjteam.games`, and on 2026-09-11 the domain had no DNS records at all (no A, no MX). Mail sent there bounces, so visitors who try to reach the studio fail silently.
- The studio decided (2026-09-11) to hide the address until the domain and its mailbox exist.

## Goal
The Contact section offers a working way to reach the studio, and the shipped site contains no reference to `pjteam.games`. Re-enabling the email later is a one-line change.

## Suggested approach
- Keep the address in one constant, e.g. `const CONTACT_EMAIL = null; // set to 'hello@pjteam.games' once the domain and mailbox exist`. Render the mailto link only when it's set.
- While it's `null`, replace the link with the studio's itch.io profile, `https://kolbes.itch.io/`, e.g. "Find us on itch.io ↗". Reuse the `.contact-email` styling so the section keeps its look. Open it in a new tab with `rel="noopener"`, matching the other itch.io links.
- Adjust the copy above it only if it would read wrongly ("Say hello." can stay). Don't invent new social URLs; Instagram/Bluesky stay as they are until F04.
- The header "Let's talk" button and the nav "Contact" link keep pointing at `#contact`.

## Acceptance criteria
- [ ] The Contact section shows a working itch.io profile link and no email address
- [ ] `grep -r "pjteam.games" dist/` finds nothing after `npm run build`
- [ ] Setting `CONTACT_EMAIL` to an address brings the mailto link back (check by code review; don't commit that change)
- [ ] The section looks the same at desktop and ~400 px (no overflow), and the link is keyboard-reachable with a visible focus ring
- [ ] `npm run build` succeeds

## Out of scope
- Buying the domain or setting up mail (C02)
- Instagram/Bluesky/Discord links (F04, C17)
- Task files that mention the address for future pages (C12, C18, C21, C24); they're blocked until a working address exists
