# C10 · Add the itch.io widget to game pages

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Done |

**Depends on:** C03, C04; C21 (soft: the policy must list itch.io)
**Done 2026-09-13:** the game IDs (Bearer 4406413, Kindred Paws 3937008) come from the public itch.io pages. It uses the task's default for the third-party request: `loading="lazy"`, and hidden below 600px. The C21 privacy policy must list itch.io once it exists.
**Blocked on:**
- The numeric itch.io game IDs for Bearer and Kindred Paws. Only the page owner can copy them, from the embed/widget option in the itch.io dashboard (see https://itch.io/docs/creators/widget).
- A studio decision on the third-party request (see below).

## Problem
- The demo call to action is a small text link (`src/main.js:41`, `:45`).
- itch.io's official widget adds the price/free label and a "Download/Play" button with itch branding, which players recognise and trust.

## Goal
Each game page with a demo shows the official itch.io widget beside the demo button, without breaking the mobile layout.

## Suggested approach
- The widget is an iframe (`https://itch.io/embed/<game_id>` plus colour/linkback options) with a fixed size of about 552×167. Check the exact URL and parameters in the itch.io docs. Pass the brand colours from `src/style.css:4` (`--ink`, `--blue-dark`, `--paper`).
- **Mobile:** 552 px overflows at ~400 px.
  - Below ~600 px, don't render the iframe; the existing demo button remains.
  - Alternatively, use a smaller widget variant if the docs offer one.
  - Don't scale it down with CSS transforms, which blur it and shrink tap targets.
- **Game pages only:** don't add it to the home cards, which are far narrower (`.game-grid`, `src/style.css:37`).
- **Third-party request:** the iframe contacts itch.io as soon as it loads.
  - Default: `loading="lazy"`, and list itch.io in the privacy policy (C21).
  - If the studio wants zero third-party requests without consent, skip the widget. The demo button already covers the action.
- Give the iframe `title="<Game> on itch.io"`. Store `itchEmbedId` in `src/data/games.js` and render nothing when it's missing.

## Acceptance criteria
- [ ] At ≥ 1024 px the widget shows the correct game and its button opens the right itch.io page
- [ ] At ~400 px and 320 px there's no widget overflow and no horizontal scroll; the demo button is still visible
- [ ] The iframe has a descriptive `title`
- [ ] `npm run build` succeeds

## Out of scope
- Steam widget (C11)
- Changing the home card demo links
