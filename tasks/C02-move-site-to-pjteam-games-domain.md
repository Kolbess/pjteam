# C02 · Move the site to the pjteam.games domain

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** F08, F13, F15, F16 (soft: this task updates the URLs they hard-code)
**Blocked on:**
- **The purchase of `pjteam.games`.** The studio does not own the domain yet. Until it does, nothing in the repo may point at `pjteam.games` (canonical, og tags, sitemap, CNAME, links), and `kolbess.github.io/pjteam/` stays the only live origin. Do not start this task before the purchase is confirmed.
- DNS access to add the GitHub Pages records (apex A/AAAA and/or `www` CNAME).
- The repo owner sets the custom domain under Settings > Pages and enables "Enforce HTTPS".
- Note: the contact address `hello@pjteam.games` (`src/main.js:78`) depends on the same domain; see the README's open requests.

## Problem
- The site is served from `https://kolbess.github.io/pjteam/` (`vite.config.js:3-5`). Links from press, streamers and itch.io pages build authority for `github.io`, not for the studio.
- The longer the site stays there, the more published links a later move has to redirect.
- `robots.txt` only works at a host root (see F16), so it can't take effect until the site has its own domain.

## Goal
`https://pjteam.games/` serves the site at the root over HTTPS, and old `kolbess.github.io/pjteam/…` URLs redirect to it.

## Suggested approach
- Change `base` to `'/'` in `vite.config.js` and update the comment on line 3.
- The site deploys through GitHub Actions (`.github/workflows/deploy.yml`), so the custom domain is set in the repo's Pages settings. A `public/CNAME` file isn't needed for Actions deployments. Confirm this against GitHub's current Pages docs and add the file anyway if they say otherwise.
- Replace hard-coded `/pjteam/` paths and `kolbess.github.io` URLs: F08 og/canonical tags, F15 `404.html`, F16 sitemap/robots, and F13 manifest `start_url`/`scope`. Code that uses `import.meta.env.BASE_URL` needs no change. Afterwards, `grep -rnE "/pjteam/|github\.io" index.html public src` should only match intentional references.
- **Don't touch existing MX/TXT records.** Email for `hello@pjteam.games` must keep working.
- After the switch, the owner resubmits the sitemap in Google Search Console.

## Acceptance criteria
- [ ] `https://pjteam.games/` loads over HTTPS with all styles, fonts and images
- [ ] `https://kolbess.github.io/pjteam/` (and a deep link such as `/pjteam/games/bearer/`, once C01 exists) redirects to the same path on `pjteam.games`
- [ ] Canonical, og:url/og:image, sitemap and robots.txt all use `https://pjteam.games/`
- [ ] An unknown URL shows the F15 404 page with its styling intact
- [ ] A test email to `hello@pjteam.games` still arrives
- [ ] `npm run build` succeeds

## Out of scope
- Email hosting or DNS records other than those GitHub Pages needs
- A `www` vs apex marketing decision beyond picking one canonical host
