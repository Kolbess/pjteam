# C26 · Add a fan-art wall

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | S | Blocked |

**Depends on:** C06 (reuse the gallery), C01; C17, C21 (soft: submission channel and privacy wording)
**Blocked on:**
- **Artwork:** at least 6 fan-art pieces, each with the artist's written permission to show it on the site, their preferred credit name and a link.
- **Submission route:** e.g. email or a Discord channel from C17.
- **Moderation and takedown:** a simple rule for what gets shown and how removal requests are handled.

## Problem
The site has nowhere to celebrate the community. Fan art is social proof, and it rewards the players who care most.

## Goal
`/pjteam/fan-art/` shows credited fan art in the C06 gallery, with a clear way to submit and to request removal.

## Suggested approach
- Static page (`fan-art/index.html` in `build.rollupOptions.input`) using the shared layout.
- Keep the entries in a data array (e.g. `src/data/fanart.js`: `{ src, alt, artist, artistUrl, game }`) and render them with the C06 gallery. Show "by <artist>" linked under each piece.
- Self-host every image in `public/fan-art/`, resized with the F12 pattern. Never hotlink from social networks.
- Add a short "Share your art" paragraph with the submission route, and one line saying artists can ask for removal at any time.
- Link it from the footer and optionally from the game pages.

## Acceptance criteria
- [ ] Every piece shows a credit and every artist link works
- [ ] All images load from the site's own origin (Network tab)
- [ ] Gallery keyboard behaviour matches C06
- [ ] Reads well at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Upload forms, voting or user accounts
