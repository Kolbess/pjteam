# PJTeam site: task index

One file per task. Template, ID scheme and rules: `.claude/agents/tasker.md`.
Effort: XS < 30 min · S ≈ 1–2 h · M ≈ half day · L ≈ 1+ day.

## Fixes

| ID | Title | Type | Priority | Effort | Status | Depends on |
|---|---|---|---|---|---|---|
| F01 | [Replace the stock hero photo with real Bearer art](F01-replace-stock-hero-with-bearer-art.md) | Fix | P1 | S | Done | — |
| F02 | [Point "Meet the team" at the team section](F02-fix-meet-the-team-link.md) | Fix | P1 | XS | Done | — |
| F03 | [Move the footer into a real `<footer>` and show the current year](F03-move-footer-into-footer-element-with-current-year.md) | Fix | P2 | S | Done | — |
| F04 | [Link the Instagram and Bluesky profiles in the footer](F04-link-social-profiles-in-footer.md) | Fix | P2 | XS | Done (Instagram only) | F03, C27 |
| F05 | [Replace the "COMING SOON" Bearer card art with a text-free image](F05-use-text-free-bearer-card-art.md) | Fix | P1 | XS | Done | F01 |
| F06 | [Replace the low-resolution Kindred Paws card image](F06-replace-low-res-kindred-paws-image.md) | Fix | P2 | S | Blocked | — |
| F07 | [Resolve the "???" placeholder team members](F07-resolve-team-placeholder-members.md) | Fix | P2 | S | Done | F18, C27 |
| F08 | [Add Open Graph / Twitter tags, canonical, a descriptive title and a `<noscript>` fallback](F08-add-social-meta-canonical-and-noscript.md) | Fix | P1 | S | Done | — |
| F09 | [Add visible focus styles and a skip link](F09-add-focus-styles-and-skip-link.md) | Fix | P1 | S | Done | — |
| F10 | [Respect `prefers-reduced-motion`](F10-respect-prefers-reduced-motion.md) | Fix | P2 | XS | Done | — |
| F11 | [Raise the minimum text size to 12 px](F11-raise-minimum-text-size.md) | Fix | P2 | S | Done | — |
| F12 | [Serve game and hero images as WebP/AVIF with `srcset`](F12-optimise-game-images.md) | Fix | P2 | M | Done | F01, F05, F06 (soft) |
| F13 | [Add a proper favicon set and a small header logo](F13-add-favicon-set-and-small-header-logo.md) | Fix | P3 | S | Done | — |
| F14 | [Add a usable mobile navigation](F14-add-mobile-navigation-menu.md) | Fix | P1 | M | Done | F09 |
| F15 | [Add a branded 404 page that works under `/pjteam/`](F15-add-404-page.md) | Fix | P3 | S | Done | — |
| F16 | [Add sitemap.xml and robots.txt](F16-add-robots-and-sitemap.md) | Fix | P3 | XS | Done | F08 |
| F17 | [Self-host the Manrope and DM Mono fonts](F17-self-host-google-fonts.md) | Fix | P2 | S | Done | — |
| F18 | [Hide the unreachable contact email until pjteam.games exists](F18-hide-unreachable-contact-email.md) | Fix | P1 | XS | Done | F03 |

## Content

| ID | Title | Type | Priority | Effort | Status | Depends on |
|---|---|---|---|---|---|---|
| C01 | [Set up a multi-page structure and shared layout for game pages](C01-set-up-multi-page-structure-for-game-pages.md) | Content | P1 | M | Done (placeholders — do not publish) | C27 |
| C02 | [Move the site to the pjteam.games domain](C02-move-site-to-pjteam-games-domain.md) | Content | P1 | S | Blocked (domain not bought yet) | F08, F13, F15, F16 (soft) |
| C03 | [Fill in the Bearer game page](C03-write-bearer-game-page.md) | Content | P1 | S | Done (copy from itch.io) | C01 |
| C04 | [Fill in the Kindred Paws game page](C04-write-kindred-paws-game-page.md) | Content | P1 | S | Done (copy from itch.io; share image waits on F06) | C01, F06 (soft) |
| C05 | [Add the Potion Stacker game page](C05-add-potion-stacker-game-page.md) | Content | P3 | S | Blocked | C01, C15 (soft) |
| C06 | [Build a lightweight media gallery for game pages](C06-build-game-media-gallery.md) | Content | P1 | M | Done (inactive until C07/C08 supply media) | C01, F10, F12 |
| C07 | [Add Bearer screenshots and gameplay loops](C07-add-bearer-screenshots-and-loops.md) | Content | P1 | S | Blocked | C06, C03 |
| C08 | [Add Kindred Paws screenshots and gameplay loops](C08-add-kindred-paws-screenshots-and-loops.md) | Content | P1 | S | Blocked | C06, C04 |
| C09 | [Embed game trailers with a click-to-load YouTube facade](C09-embed-trailers-with-click-to-load-facade.md) | Content | P1 | S | Blocked | C01; C03, C04 (soft) |
| C10 | [Add the itch.io widget to game pages](C10-add-itch-io-widget-to-game-pages.md) | Content | P1 | S | Done (lazy-loaded, desktop only; list itch.io in C21) | C03, C04; C21 (soft) |
| C11 | [Add Steam wishlist widgets](C11-add-steam-wishlist-widgets.md) | Content | P3 | XS | Blocked | C10; C21 (soft) |
| C12 | [Add the studio press kit page](C12-add-studio-press-kit-page.md) | Content | P1 | M | Blocked | C01; C02, C16, C17 (soft) |
| C13 | [Add the Bearer press kit](C13-add-bearer-press-kit.md) | Content | P1 | M | Blocked | C12, C07; C09, C19 (soft) |
| C14 | [Add the Kindred Paws press kit](C14-add-kindred-paws-press-kit.md) | Content | P1 | S | Blocked | C13, C08; C09, C19 (soft) |
| C15 | [Add a newsletter signup with explicit GDPR consent](C15-add-newsletter-signup.md) | Content | P1 | S | Blocked | C21; C01 (soft) |
| C16 | [Replace the gradient portraits with team photos and short bios](C16-add-team-photos-and-bios.md) | Content | P1 | S | Blocked | F07; F11 (soft) |
| C17 | [Link Discord, YouTube and other community channels](C17-link-discord-and-community-channels.md) | Content | P2 | S | Blocked | F04 |
| C18 | [Publish a streamer and content-creator video policy](C18-publish-streamer-video-policy.md) | Content | P2 | XS | Blocked | C12; C03, C04 (soft) |
| C19 | [Show traction: demo downloads, jam results and player quotes](C19-add-traction-and-social-proof.md) | Content | P2 | S | In progress (jam results done) | C03, C04; C13, C14 (soft) |
| C20 | [Add a markdown devlog built at build time](C20-add-markdown-devlog.md) | Content | P2 | L | Blocked | C01; F16, C02 (soft) |
| C21 | [Add a privacy policy page](C21-add-privacy-policy-page.md) | Content | P1 | S | Blocked | C01, F03; F01, F17 (soft) |
| C22 | [Add a Polish-language version of the home page](C22-add-polish-language-home-page.md) | Content | P3 | M | Blocked | C01, F17 |
| C23 | [Add FAQs to the game pages](C23-add-faqs-to-game-pages.md) | Content | P3 | S | Blocked | C03, C04 |
| C24 | [Add a "Work with us" page](C24-add-work-with-us-page.md) | Content | P3 | S | Blocked | F07, C01; C21 (soft) |
| C25 | [Add a public roadmap to the game pages](C25-add-public-roadmap-to-game-pages.md) | Content | P3 | S | Blocked | C03, C04 |
| C26 | [Add a fan-art wall](C26-add-fan-art-wall.md) | Content | P3 | S | Blocked | C06, C01; C17, C21 (soft) |
| C27 | [Extract the shared layout and game data (C01 groundwork)](C27-extract-shared-layout-and-game-data.md) | Content | P1 | S | Done | F03, F09, F14, F12, F18 |

## Suggested order

Fixes first, then content in dependency order.

1. **Quick wins, no dependencies:** F02 → F10 → F09.
2. **Mobile and readability:** F14 (after F09) → F11.
3. **Structure and sharing:** F03 → F08 → F16 → F15.
4. **Performance and privacy:** F17 (drops Google Fonts), F13, then F12 on the current images (re-run it when new art lands).
5. **As soon as the studio delivers assets and decisions:**
   - F05 + F01: one text-free Bearer export unblocks both.
   - F06: Kindred Paws art.
   - F07: team decision.
   - F04: social profile URLs; do it after F03.
   - Then refresh the F08 share image with the new Bearer art.
6. **Content foundation (unblocked now):** C01 (after F03, F09, F14) → C06 (build with test media; ship with C07/C08). C02 waits until `pjteam.games` is actually bought. Until then every absolute URL uses `https://kolbess.github.io/pjteam/`, and nothing may point at a domain the studio does not own.
7. **Game pages, as copy and media arrive:** C03 + C04 → C07 + C08 → C09 (trailers) → C10 (itch.io widget).
8. **Privacy, then audience:** C21 → C15 (newsletter). C17 after F04. C16 after F07.
9. **Press:** C12 → C13 → C14 → C18 (video policy lives on the press page). Fill in C19 (traction) on game pages and press kits once the figures exist.
10. **Only with commitment:** C20 (devlog), if the studio commits to a cadence.
11. **Optional, any order:** C23 (FAQ), C25 (roadmap), C24 (after F07), C26 (after C06), and C22 (Polish) last, once the English copy is stable. C05 when Potion Stacker is announced; C11 when Steam pages exist.

### Open requests to the studio

**Art and media**
- Text-free Bearer key art / screenshot, ≥1600 px wide (F01, F05)
- Kindred Paws key art or 1080p gameplay screenshot (F06)
- Per game: 4–6 screenshots (1920×1080 PNG) and 3–5 gameplay clips of 5–10 s, with captions (C07, C08)
- Per game: a YouTube trailer ID, a 1280×720 poster, and a downloadable 1080p MP4 under ~90 MB (C09, C13, C14)
- Per game: key art with and without logo, logo as transparent PNG (light and dark), 2–3 GIFs, and a 1200×630 share image (C03, C04, C13, C14)
- Studio logo as transparent PNG in light and dark versions, ≥1000 px, plus SVG if one exists (C12). `public/logo.png` is on an opaque blue square; confirm `public/logo-mark.png` is the approved white export.
- Team portrait photos (4:5, ≥800×1000) with each person's written consent, plus 1–2 sentence bios (C16)

**Copy and facts**
- Per game: one-line pitch, 3–5 features, genre, platforms, engine, status (C03, C04); release date or TBA, price, languages, long and short descriptions, credits (C13, C14)
- Studio factsheet: founding year, team size, location, press contact, studio description (short and long), history, credits list (C12)
- Streaming/monetization policy, including whether all music is cleared for Content ID (C18)
- Traction figures with "as of" dates, jam results with links, quotes with permission (C19)
- FAQ answers (C23), roadmap items and an update commitment (C25), open roles and terms (C24)
- Polish home-page copy approved by a native speaker (C22)
- Whether to announce Potion Stacker, plus its pitch and art (C05)

**Accounts, URLs and decisions**
- Hiring vs. remove decision for the three open team roles (F07)
- Instagram and Bluesky profile URLs (F04)
- Non-expiring Discord invite, YouTube channel URL, other active networks (C17). The itch.io profile `https://kolbes.itch.io/` is confirmed correct.
- Custom domain: `pjteam.games` is **not bought yet**. C02 starts only after the purchase; until then the live origin is `https://kolbess.github.io/pjteam/` (F08, F16, C02)
- A working contact email for the site. `hello@pjteam.games` (`src/main.js:78`) can't receive mail until the domain is bought and mail is set up
- itch.io numeric game IDs for the widget, and whether to accept the itch.io third-party request (C10)
- Steam app IDs once store pages exist (C11)
- Newsletter provider account with double opt-in, sender details, incentive wording and frequency (C15)
- Legal name and postal address of the data controller, and sign-off on the privacy policy (C21)
- A devlog cadence commitment and the first 2–3 posts (C20)
- Confirm the URL scheme `/games/<slug>/`, `/press/`, `/privacy/`, `/jobs/`, `/pl/` (C01 and the page tasks)
