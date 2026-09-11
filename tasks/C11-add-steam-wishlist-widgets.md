# C11 · Add Steam wishlist widgets

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | XS | Blocked |

**Depends on:** C10 (same pattern and data field); C21 (soft: the policy must list Steam)
**Blocked on:** Live Steam store pages for Bearer and/or Kindred Paws, with their Steam app IDs. Also a studio decision on whether "Wishlist on Steam" should outrank "Play demo" as the primary button once the store page is live.

## Problem
No Steam store pages exist yet, so the site has no wishlist action. Wishlists drive Steam visibility at launch.

## Goal
Once a store page exists, the game page offers a clear "Wishlist on Steam" button and, on wide screens, the official Steam widget.

## Suggested approach
- Add `steamAppId` to the game in `src/data/games.js`.
- Add a button "Wishlist on Steam" linking to `https://store.steampowered.com/app/<appid>/`. The studio decides whether it sits beside or above the demo button.
- Add the Steam widget iframe (`https://store.steampowered.com/widget/<appid>/`, about 646×190; confirm against Steam's docs). Apply C10's rules: `loading="lazy"`, a `title`, not rendered below ~700 px, and not on home cards.
- Add the Steam link to the game's press kit factsheet (C13/C14) and footer socials if the studio wants.

## Acceptance criteria
- [ ] The wishlist button opens the right store page in a new tab
- [ ] The widget shows on desktop; no overflow or horizontal scroll at ~400 px
- [ ] Nothing Steam-related renders for games without `steamAppId`
- [ ] `npm run build` succeeds

## Out of scope
- Creating the Steam pages themselves
