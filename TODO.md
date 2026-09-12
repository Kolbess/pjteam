# PJTeam site — to-do

Snapshot: 2026-09-12. Live at <https://kolbess.github.io/pjteam/> (branch `site-improvements` → `main`).
Full task files, with acceptance criteria, live in [`tasks/`](tasks/README.md). This file is the short view: what's left and who it waits on.

## Next task

**F07 — Resolve the "???" placeholder team members** ([task](tasks/F07-resolve-team-placeholder-members.md)) — *in progress*
The team section says "Five curious minds." above two real people and three cards reading "???" (3D/2D Artist, Game Designer, Sound Artist). It's the most visibly unfinished thing left on the live site.

**Decided 2026-09-12: the studio is hiring.** The three slots become one "We're hiring" card listing the open roles, and the section gets retitled. Applications go to Instagram for now, because there's no working email until `pjteam.games` is bought (see C02). This also unblocks [C24](tasks/C24-add-work-with-us-page.md), a Work with us page, once role descriptions exist.

## Ready now — needs nothing from the studio

| Task | What it is | Note |
|---|---|---|
| [C06](tasks/C06-build-game-media-gallery.md) | Media gallery for game pages (grid, lightbox, click-to-play clips) | Buildable and testable now, but shows nothing until C07/C08 media exists |

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

## Waiting on assets or copy

| Task | What's needed |
|---|---|
| [C03](tasks/C03-write-bearer-game-page.md) / [C04](tasks/C04-write-kindred-paws-game-page.md) | Per game: one-line pitch, 3–5 features, genre, platforms, engine. **Replaces the live placeholder slots and removes their `noindex`** |
| [C07](tasks/C07-add-bearer-screenshots-and-loops.md) / [C08](tasks/C08-add-kindred-paws-screenshots-and-loops.md) | 4–6 screenshots (1920×1080) and 3–5 clips of 5–10 s per game |
| [C09](tasks/C09-embed-trailers-with-click-to-load-facade.md) | A YouTube trailer per game |
| [F06](tasks/F06-replace-low-res-kindred-paws-image.md) | Kindred Paws key art or a 1080p screenshot — its art is still a 315×250 menu shot, the weakest image on the site |
| [C13](tasks/C13-add-bearer-press-kit.md) / [C14](tasks/C14-add-kindred-paws-press-kit.md) | Per-game press kits — needs C12 plus the media above |
| [C16](tasks/C16-add-team-photos-and-bios.md) | Team photos (4:5, ≥800×1000) with consent, plus 1–2 sentence bios |
| [C19](tasks/C19-add-traction-and-social-proof.md) | Demo download numbers, jam results, player quotes (with permission) |
| [C22](tasks/C22-add-polish-language-home-page.md) | Polish copy, approved by a native speaker |
| [C24](tasks/C24-add-work-with-us-page.md) | Open roles and terms — needs the F07 decision |
| [C26](tasks/C26-add-fan-art-wall.md) | Fan art, with permission |

## Waiting on something external

| Task | Blocked by |
|---|---|
| [C02](tasks/C02-move-site-to-pjteam-games-domain.md) | **`pjteam.games` isn't bought.** No DNS at all, so `hello@pjteam.games` can't receive mail — that's why the contact link points at itch.io (F18). Buying it also restores the email and moves the site off `kolbess.github.io/pjteam/` |
| [C10](tasks/C10-add-itch-io-widget-to-game-pages.md) | itch.io numeric game IDs |
| [C11](tasks/C11-add-steam-wishlist-widgets.md) | Steam app IDs, once store pages exist |

## Done and live

18 fixes and 2 content tasks: mobile menu, focus styles and skip link, 12px minimum text, reduced motion, real `<footer>` with the current year, social link previews (OG/Twitter), self-hosted fonts, favicon set and manifest, branded 404, sitemap and robots, optimised images, real Bearer art in the hero and card, Instagram link, contact email swapped for itch.io, shared layout modules, and game pages with placeholder slots.

Two known compromises, both deliberate:
- The game pages show `[image 1]` / `[one-line pitch]` placeholders. They carry `noindex` and aren't in the sitemap, but they are reachable from the home cards. C03/C04 fix this.
- `public/logo.png` (162 KB) still ships but no page uses it; C12 needs it for the press kit.
