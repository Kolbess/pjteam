# C09 · Embed game trailers with a click-to-load YouTube facade

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** C01; C03, C04 (soft)
**Blocked on:** A trailer uploaded to the studio's YouTube channel (the video ID) for each game, plus a 1280×720 poster frame. The downloadable trailer file for press is handled in C13/C14. The component can be built against any public video ID, but don't merge it without a real trailer.

## Problem
- No game has a trailer on the site.
- A standard YouTube `<iframe>` loads a large player and contacts Google servers on page load, even from `youtube-nocookie.com`. The thumbnail alone comes from `i.ytimg.com`. That is the same GDPR problem F01 and F17 remove, and it slows the page.

## Goal
Game pages show a trailer poster with a play button. YouTube only loads after the visitor clicks, and nothing plays with sound before that.

## Suggested approach
- Add `trailer: { youtubeId, poster }` per game in `src/data/games.js`. The poster file lives in `public/games/<slug>/`, not on `i.ytimg.com`.
- Render the facade in two steps:
  - The server-rendered fallback is an `<a href="https://www.youtube.com/watch?v=<ID>">` wrapping the poster, which is what visitors without JS get.
  - JS upgrades it to a `<button>` with the accessible name "Play the <Game> trailer (loads YouTube)" and a visible play icon.
  - Add a small note under it: "Plays via YouTube", linking to the privacy policy (C21).
- On click, replace the button with an iframe and move focus to it:
  - `<iframe src="https://www.youtube-nocookie.com/embed/<ID>?autoplay=1&rel=0" title="<Game> trailer" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin">`
  - `autoplay=1` here is user-initiated.
- Set `aspect-ratio: 16 / 9` on the container so swapping poster for player doesn't shift layout.
- Keep it to ~30 lines of vanilla JS. No `lite-youtube` or other package.

## Acceptance criteria
- [ ] On page load (cache disabled), the Network tab has no requests to `youtube.com`, `youtube-nocookie.com`, `ytimg.com`, `googlevideo.com` or `doubleclick.net`
- [ ] Clicking, or pressing Enter/Space on the focused button, loads and starts the trailer; the focus ring is visible (F09)
- [ ] Nothing plays or makes sound without a click
- [ ] The poster keeps 16:9 with no overflow at ~400 px
- [ ] With JavaScript disabled, the poster links to the video on YouTube
- [ ] `npm run build` succeeds

## Out of scope
- Trailer download for press (C13, C14)
- A background video in the home hero
