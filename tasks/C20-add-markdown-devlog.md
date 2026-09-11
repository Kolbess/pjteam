# C20 · Add a markdown devlog built at build time

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P2 | L | Blocked |

**Depends on:** C01; F16, C02 (soft: sitemap and final URLs)
**Blocked on:**
- **A cadence commitment:** e.g. one post every 2–4 weeks for at least three months. If nobody will write regularly, close this task; a stale devlog looks worse than none.
- **First posts:** 2–3 posts in markdown, each with a title, date, one-line summary, author and a 1200×630 cover image.

## Problem
- The site has no news or updates section. Progress updates, which earn links and search traffic, live elsewhere (or nowhere), not on the studio's domain.
- The build only knows about fixed HTML entries (`vite.config.js:4-6`, extended by C01).

## Goal
`/pjteam/devlog/` lists posts newest first. Each post has its own static URL with its own title and share tags. Posts are markdown files in the repo, so publishing one means adding a file and pushing.

## Suggested approach
- Posts live in `content/devlog/YYYY-MM-DD-<slug>.md`, with simple front matter (`title`, `date`, `summary`, `cover`, `author`).
- Add a small Node script, `scripts/build-devlog.mjs`:
  - It converts each post to HTML and writes `devlog/index.html` plus `devlog/<slug>/index.html`, each with a static `<head>` (title, description, canonical, og:image) and the shared layout entry.
  - Add the generated folders to `.gitignore`.
  - One small build-time devDependency for markdown (e.g. `marked`) is acceptable. Parse the simple front matter by hand rather than adding another package.
- Run the script before Vite: `"build": "node scripts/build-devlog.mjs && vite build"`, and the same for `dev`. The deploy workflow already runs `npm run build` (`.github/workflows/deploy.yml:27`), so it needs no change.
- In `vite.config.js`, read the generated `devlog/` folders with `fs` at config time and add them to `build.rollupOptions.input`.
- Post images go in `public/devlog/<slug>/`.
- Add "Devlog" to the nav or footer. Optionally list the latest 3 posts on the home page.
- Have the script append post URLs to the sitemap (F16), or regenerate it.

## Acceptance criteria
- [ ] Adding a new `.md` file and running `npm run build` produces a new post page with no other edits
- [ ] Posts render headings, lists, links and images; the index is sorted newest first
- [ ] View-source of each post shows its own title, description, canonical and og tags
- [ ] The GitHub Actions deploy succeeds unchanged
- [ ] Reads well at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- RSS feed (a good follow-up), comments, pagination, a CMS
