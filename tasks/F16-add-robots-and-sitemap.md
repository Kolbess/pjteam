# F16 · Add sitemap.xml and robots.txt

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P3 | XS | Done |

**Depends on:** F08 (use the same canonical URL)
**Blocked on:** — (same custom-domain question as F08)

## Problem
- `public/` contains no `robots.txt` or `sitemap.xml`, so neither is deployed.
- The site is a GitHub Pages project site under `/pjteam/` (`vite.config.js:3-5`). Crawlers only read `robots.txt` at the host root (`https://kolbess.github.io/robots.txt`), which this repo does not control. A `robots.txt` shipped here ends up at `/pjteam/robots.txt` and is ignored until the site moves to its own domain.

## Goal
Search engines can find a sitemap for the site, and a correct `robots.txt` is ready for when the site has its own domain.

## Suggested approach
- Add `public/sitemap.xml` with a single `<url>` for the canonical page (`https://kolbess.github.io/pjteam/`, or the custom domain), with `<lastmod>` in `YYYY-MM-DD` format.
- Add `public/robots.txt` with `User-agent: *`, `Allow: /`, and `Sitemap: <absolute sitemap URL>`. Add a comment explaining it only takes effect at a host root.
- Note in the PR that, until there is a custom domain, the sitemap must be submitted manually in Google Search Console / Bing Webmaster Tools. The studio owner does that step.

## Acceptance criteria
- [ ] `https://kolbess.github.io/pjteam/sitemap.xml` returns valid XML (check with a sitemap validator)
- [ ] `robots.txt` and the sitemap use the same absolute origin as the F08 canonical tag
- [ ] `npm run build` succeeds, and both files exist in `dist/`

## Out of scope
- Setting up a custom domain / `CNAME`
- 404 page (F15)
