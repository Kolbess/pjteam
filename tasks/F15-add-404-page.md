# F15 · Add a branded 404 page that works under `/pjteam/`

| Type | Priority | Effort | Status |
|---|---|---|---|
| Fix | P3 | S | Todo |

**Depends on:** —
**Blocked on:** —

## Problem
- There is no `404.html` anywhere in the repo (`public/` has only `logo.png`, `logo-mark.png`, `games/`). Mistyped or stale links such as `https://kolbess.github.io/pjteam/games` show GitHub's generic 404.
- GitHub Pages serves a custom `404.html` from the root of the published artifact, which here is `dist/` (`.github/workflows/deploy.yml:29-31`). The site lives under `base: '/pjteam/'` (`vite.config.js:5`) and the 404 page can be returned for any depth of URL (e.g. `/pjteam/a/b/c`). Relative asset paths in it would break, so every URL in the page must be root-absolute with the `/pjteam/` prefix.

## Goal
Any unknown URL under the site shows a small on-brand 404 page with a link back home, with styles and images that load at any path depth.

## Suggested approach
- Simplest: add a static `public/404.html`. Vite copies it to `dist/404.html` unprocessed. Hard-code `/pjteam/` in its links and images (`/pjteam/logo-mark.png`, home link `/pjteam/`). Inline a few lines of CSS that reuse the palette from `src/style.css:4` rather than importing the full stylesheet.
- Content: wordmark/logo, "Page not found", one line of copy, a "Back to PJTeam" link, and the contact email. Add `<meta name="robots" content="noindex">`.
- Alternative: add it as a second Vite entry via `build.rollupOptions.input` in `vite.config.js` to share CSS. Only worth it if the page needs more than a few inline styles.

## Acceptance criteria
- [ ] After deploy, `https://kolbess.github.io/pjteam/does-not-exist` and `/pjteam/a/b/c` both show the custom page with logo and styling intact
- [ ] "Back to PJTeam" goes to `/pjteam/`
- [ ] Readable at ~400 px; link has a visible focus state
- [ ] `npm run build` succeeds and `dist/404.html` exists

## Out of scope
- SPA-style client routing / redirect tricks
- robots.txt / sitemap (F16)
