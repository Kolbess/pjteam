# C17 · Link Discord, YouTube and other community channels

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P2 | S | Blocked |

**Depends on:** F04 (same footer markup; do it first)
**Blocked on:**
- **Discord:** a non-expiring invite link (or vanity URL).
- **YouTube:** the channel URL.
- **itch.io:** confirmed. `https://kolbes.itch.io/` is the studio's profile (the one "s" is correct, even though the GitHub user is `kolbess`). This item doesn't block the task.
- **Other networks:** any the studio actively maintains (TikTok, X, Reddit, a Steam developer page). List only maintained channels.

## Problem
- The footer social slot is plain text (`src/main.js:79`). F04 turns it into links, but only for Instagram and Bluesky.
- There is no Discord or YouTube link anywhere, although a Discord server is usually the main home for an indie game's playtesters and fans.

## Goal
Every active channel is a real link in the footer. Discord also gets a visible "Join our Discord" call to action near the contact email and on the game pages.

## Suggested approach
- Keep all profile URLs in one module (e.g. `src/data/social.js`) so the footer, press kit (C12) and game pages share it.
- Extend F04's footer list with Discord, YouTube and itch.io. Match the existing new-tab links: `target="_blank" rel="noopener"`, as at `src/main.js:41`.
- Use text labels. No icon library is installed; don't add one just for this.
- Add "Join our Discord" as a secondary button:
  - under the contact email (`src/main.js:78`)
  - on each game page, next to the demo button

## Acceptance criteria
- [ ] Every link opens the correct profile in a new tab
- [ ] The Discord invite is set to never expire (check in Discord's invite settings)
- [ ] The footer wraps cleanly at ~400 px; all links are keyboard-reachable with visible focus
- [ ] `npm run build` succeeds

## Out of scope
- Embedded Discord widgets or social feeds (third-party iframes)
