# C18 · Publish a streamer and content-creator video policy

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P2 | XS | Blocked |

**Depends on:** C12 (the policy lives on the press page); C03, C04 (soft: game-page links)
**Blocked on:** The studio's policy decisions:
- **Scope:** may creators stream, record and monetize videos of all PJTeam games, including the demos?
- **Conditions:** any conditions, e.g. a link to the game page appreciated, no re-uploading builds, spoiler etiquette.
- **Music rights:** are all music and sound owned by or licensed to the studio for streaming? If not, which tracks could trigger YouTube Content ID claims?
- **Contact:** who creators should contact for keys and questions.

## Problem
There is no guidance for creators anywhere on the site. Unclear rights make streamers hesitate or skip a game, and each question costs the studio an email.

## Goal
A short, plain-language policy that creators can link to, reachable in one click from the press kit and every game page.

## Suggested approach
- Add a section `id="video-policy"` titled "Streaming and videos" to `/pjteam/press/` (C12). Keep it to 3–5 sentences. Example to adapt, once the studio confirms: "You're welcome to stream, record and monetize videos of our games on any platform. A link to the game page in your description is appreciated. Questions or keys: hello@pjteam.games."
- If any music isn't cleared, say so plainly and name the tracks or settings to mute.
- Add a one-line link on each game page ("Creators: see our video policy") and in the footer.
- Optionally add the text to the press ZIPs as `video-policy.txt`.

## Acceptance criteria
- [ ] `/pjteam/press/#video-policy` scrolls to the policy when opened directly
- [ ] The policy is linked from each game page and the footer
- [ ] The wording matches what the studio approved
- [ ] `npm run build` succeeds

## Out of scope
- Key-distribution tools or creator programmes
