# C22 · Add a Polish-language version of the home page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P3 | M | Blocked |

**Depends on:** C01; F17 (the self-hosted fonts must include latin-ext for ą ć ę ł ń ó ś ź ż)
**Blocked on:**
- Polish copy for the home page, written or approved by a native speaker on the team (not unreviewed machine translation)
- Confirmation of the URL: `/pjteam/pl/`

## Problem
- All copy is in English, and the document is `<html lang="en">` (`index.html:2`).
- The studio is based in Białystok (`src/main.js:21`), and the dev agent brief says to use Polish for a Polish audience.
- Local press, schools and players have no Polish entry point.

## Goal
`/pjteam/pl/` serves the home page in Polish, with the correct `lang`, reciprocal `hreflang` links and a visible language switch.

## Suggested approach
- Move the home page copy into locale files (e.g. `src/i18n/en.js`, `src/i18n/pl.js`) and pass the locale to the render functions from C01's layout and home entry.
- Add `pl/index.html` with:
  - `<html lang="pl">`
  - its own title and description
  - `og:locale="pl_PL"`
  - the same entry script, reading the locale from a `data-locale` attribute
- Put `<link rel="alternate" hreflang="en" …>`, `hreflang="pl"` and `hreflang="x-default"` in the static head of both pages.
- Add an "EN · PL" switcher in the header that links to the equivalent page, with `lang` and `hreflang` on each link. Don't redirect automatically based on browser language.
- Polish words run longer. Check the very large headings (`h1`, `src/style.css:20`; `.contact h2`, `src/style.css:77`) and the nav at 320 px.

## Acceptance criteria
- [ ] Polish diacritics render in Manrope/DM Mono, not a fallback font (DevTools > Rendered Fonts)
- [ ] `lang` is correct on each page; the `hreflang` links are reciprocal and absolute
- [ ] The switcher works by keyboard and returns to the matching page
- [ ] No overflow or horizontal scroll at 320 px and ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- Polish game pages, press kit and privacy policy. Create follow-up tasks once their English copy is final (C03, C04, C12, C21).
