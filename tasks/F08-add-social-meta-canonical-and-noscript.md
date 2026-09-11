# F08 · Add Open Graph / Twitter tags, canonical, a descriptive title and a `<noscript>` fallback

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P1 | S | Todo |

**Depends on:** — (the share image can be refreshed after F01/F05 deliver real Bearer art)
**Blocked on:** — (use `https://kolbess.github.io/pjteam/` in every absolute URL. `pjteam.games` is not bought yet; C02 switches the URLs only after the purchase)

## Problem
- `index.html:10` has the title `PJTeam`, which is generic in tabs, bookmarks and search results.
- `index.html` has no `og:*`, `twitter:*` or `<link rel="canonical">` tags. Links shared on Discord, Bluesky, Facebook etc. get no preview card.
- All content is injected by JavaScript (`src/main.js:3`, into `<div id="app">` at `index.html:13`). Social crawlers don't run JS, so these tags must be written statically in `index.html`, not added from `main.js`.
- Without JS the page is completely blank. There is no `<noscript>` content.
- The site's origin is `https://kolbess.github.io/pjteam/` (comment at `vite.config.js:3`, `base: '/pjteam/'` at `vite.config.js:5`).

## Goal
Shared links show a branded 1200×630 preview with a clear title and description. The page has a canonical URL and a useful title. Visitors without JS still see who the studio is and how to reach it.

## Suggested approach
- Title, e.g. `PJTeam · Independent game studio` (the phrase comes from the hero eyebrow at `src/main.js:21`).
- Keep or refine the existing description at `index.html:6` and reuse it for `og:description` / `twitter:description`.
- Add `og:type=website`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (+ `og:image:width=1200`, `og:image:height=630`, `og:image:alt`), `twitter:card=summary_large_image`, and `<link rel="canonical" href="https://kolbess.github.io/pjteam/">`.
- `og:image` must be an absolute URL, e.g. `https://kolbess.github.io/pjteam/og-image.png`. Vite won't rewrite it, so write the full URL.
- Create `public/og-image.png` (1200×630, under ~300 KB). Until real key art arrives, a card built from `public/logo-mark.png` on the brand gradient (`--brand-gradient`, `src/style.css:4`) with the wordmark is fine. Replace it once F01/F05 art exists.
- Add a short `<noscript>` block inside `<body>` with the studio name, one line of description and the two itch.io links (`src/main.js:41`, `:45`). Keep it minimal and inline-styled. Don't copy `hello@pjteam.games` into it: the domain isn't bought yet, so the address can't receive mail. Add a contact email only once the studio confirms a working one.

## Acceptance criteria
- [ ] View-source (not DevTools DOM) of the deployed page shows all og/twitter/canonical tags
- [ ] `og:image` resolves to a 1200×630 image at its absolute URL (open it directly)
- [ ] A preview checker (e.g. opengraph.xyz, or pasting the URL into Discord/Bluesky) shows image, title and description
- [ ] With JavaScript disabled, the page shows the `<noscript>` content with working email and itch.io links
- [ ] `npm run build` succeeds, and `dist/index.html` contains the tags unchanged

## Out of scope
- Structured data (JSON-LD)
- Favicon / manifest (F13)
- robots.txt / sitemap.xml (F16)
