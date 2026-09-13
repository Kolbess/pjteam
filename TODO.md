# PJTeam site — to-do

Snapshot: 2026-09-13. Live at <https://kolbess.github.io/pjteam/> (branch `site-improvements` → `main`).
Full task files, with acceptance criteria, live in [`tasks/`](tasks/README.md). This file is the short view: what's left and who it waits on.

## Next task

**Both game pages now have real copy** (C03/C04, taken from the itch.io pages). The next tasks all need material from you, in this order of value:

1. **[C07](tasks/C07-add-bearer-screenshots-and-loops.md) — better Bearer screenshots, plus clips.** The gallery is live with the five itch.io screenshots, but they're 795–1639 px wide, uneven in shape, and one shows the tutorial text. 4–6 captures at 1920×1080 and 3–5 clips of 5–10 s would replace them.
2. **[F06](tasks/F06-replace-low-res-kindred-paws-image.md) — Kindred Paws key art.** Its 315×250 menu screenshot is the weakest image on the site. It's also the page's header art, and the share preview still uses the studio card.
3. **[C08](tasks/C08-add-kindred-paws-screenshots-and-loops.md) — more Kindred Paws screenshots, plus clips.** Its gallery shows the only gameplay shot on itch.io. 3–5 more at integer scale, and 3–5 clips, would fill it out.

Cheap wins whenever you have a spare minute: a Bluesky handle or Discord invite ([C17](tasks/C17-link-discord-and-community-channels.md)), a yes to streamers recording and monetising your games ([C18](tasks/C18-publish-streamer-video-policy.md)), or buying `pjteam.games` ([C02](tasks/C02-move-site-to-pjteam-games-domain.md)), which also restores the contact email and the hiring card's inbox.

## Ready now — needs nothing from the studio

Nothing. Every open task waits on material, a decision or something external — see the sections below.

## One answer from you unblocks it

| Task | What's needed |
|---|---|
| [C17](tasks/C17-link-discord-and-community-channels.md) / [F04](tasks/F04-link-social-profiles-in-footer.md) | Bluesky handle, Discord invite (non-expiring), YouTube URL |
| [C18](tasks/C18-publish-streamer-video-policy.md) | Confirm streamers may record and monetise your games; any limits (music cleared?) |
| [C21](tasks/C21-add-privacy-policy-page.md) | Legal name + postal address of whoever runs PJTeam, and a contact email |
| [C12](tasks/C12-add-studio-press-kit-page.md) | Factsheet (founded, team size, press contact) + transparent logo exports, light and dark |
| [C23](tasks/C23-add-faqs-to-game-pages.md) / [C25](tasks/C25-add-public-roadmap-to-game-pages.md) | FAQ answers; roadmap items you're willing to commit to |
| [C15](tasks/C15-add-newsletter-signup.md) | A newsletter provider account (Buttondown/MailerLite) — needs C21 first |
| [C20](tasks/C20-add-markdown-devlog.md) | A posting cadence you'll keep, plus the first 2–3 posts |
| [C05](tasks/C05-add-potion-stacker-game-page.md) | Whether to announce Potion Stacker yet, and its pitch/art |
| [C16](tasks/C16-add-team-photos-and-bios.md) | The home page says "Two curious minds", but Bearer's itch.io credits list ten people. Who should the team section show? |

## Waiting on assets or copy

| Task | What's needed |
|---|---|
| [C07](tasks/C07-add-bearer-screenshots-and-loops.md) / [C08](tasks/C08-add-kindred-paws-screenshots-and-loops.md) | 4–6 screenshots (1920×1080) and 3–5 clips of 5–10 s per game |
| [C09](tasks/C09-embed-trailers-with-click-to-load-facade.md) | A YouTube trailer per game |
| [F06](tasks/F06-replace-low-res-kindred-paws-image.md) | Kindred Paws key art or a 1080p gameplay screenshot — its art is still a 315×250 menu shot |
| [C13](tasks/C13-add-bearer-press-kit.md) / [C14](tasks/C14-add-kindred-paws-press-kit.md) | Per-game press kits — needs C12 plus the media above |
| [C16](tasks/C16-add-team-photos-and-bios.md) | Team photos (4:5, ≥800×1000) with consent, plus 1–2 sentence bios |
| [C19](tasks/C19-add-traction-and-social-proof.md) | Download numbers from itch.io analytics and player quotes (with permission). Kindred Paws' jam results are already on its page |
| [C22](tasks/C22-add-polish-language-home-page.md) | Polish copy, approved by a native speaker |
| [C24](tasks/C24-add-work-with-us-page.md) | Open roles and terms — needs the F07 decision |
| [C26](tasks/C26-add-fan-art-wall.md) | Fan art, with permission |

## Waiting on something external

| Task | Blocked by |
|---|---|
| [C02](tasks/C02-move-site-to-pjteam-games-domain.md) | **`pjteam.games` isn't bought.** No DNS at all, so `hello@pjteam.games` can't receive mail — that's why the contact link points at itch.io (F18). Buying it also restores the email and moves the site off `kolbess.github.io/pjteam/` |
| [C11](tasks/C11-add-steam-wishlist-widgets.md) | Steam app IDs, once store pages exist |

## Done and live

18 fixes and 4 content tasks: mobile menu, focus styles and skip link, 12px minimum text, reduced motion, real `<footer>` with the current year, social link previews (OG/Twitter), self-hosted fonts, favicon set and manifest, branded 404, sitemap and robots, optimised images, real Bearer art in the hero and card, Instagram link, contact email swapped for itch.io, shared layout modules, the media gallery, and full Bearer and Kindred Paws game pages (indexed and in the sitemap).

Known compromises, all deliberate:
- Both galleries use the itch.io screenshots until proper captures arrive: Bearer's five are uneven sizes, and Kindred Paws has just one.
- `public/logo.png` (162 KB) still ships but no page uses it; C12 needs it for the press kit.
