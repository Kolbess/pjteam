# C21 · Add a privacy policy page

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** C01 (page structure), F03 (footer link); F01, F17 (soft: remove third parties first so the policy has less to disclose)
**Blocked on:**
- **Controller identity:** who legally runs PJTeam — the person's or company's legal name, a postal address in Poland and a contact email.
- **Services in use or planned:** the newsletter provider (C15), YouTube (C09), itch.io (C10), Steam (C11), and any analytics (none today).
- **Sign-off:** approval of the final text, ideally with a quick legal review. The developer drafts it from a reputable template; the draft is not legal advice.

## Problem
- There is no privacy policy. GDPR (Art. 13) requires telling visitors when their personal data is processed. Today that happens through:
  - GitHub Pages hosting, which logs IPs
  - Google Fonts (`src/style.css:1`, removed by F17)
  - the Unsplash hero (`src/style.css:27`, removed by F01)
  - email to `hello@pjteam.games` (`src/main.js:78`)
- The newsletter (C15) and embeds (C09–C11) add more processing, and C15 must link to this page from its consent box.

## Goal
`/pjteam/privacy/` explains in plain language:
- who is responsible
- which data each service processes, and why
- how long data is kept
- the visitor's rights

It is linked from every footer and from the newsletter form.

## Suggested approach
- Static page (`privacy/index.html` in `build.rollupOptions.input`) using the shared layout, with a static head.
- Sections:
  - **Controller** and contact details
  - **Hosting:** GitHub Pages; GitHub processes IP addresses in server logs. Link GitHub's privacy statement.
  - **Email contact**
  - **Newsletter:** provider, consent as the legal basis, double opt-in, how to unsubscribe, retention
  - **Content that loads only on click:** YouTube via youtube-nocookie
  - **Other embeds:** itch.io, Steam
  - **Cookies and analytics:** none set by the site itself; verify this
  - **Visitor rights:** access, rectification, erasure, restriction, portability, objection, and withdrawal of consent
  - **Right to complain:** to the Polish supervisory authority, the President of the Personal Data Protection Office (UODO)
  - **Last updated** date
- Before publishing, open the deployed home and game pages with DevTools and list every third-party host requested, both on load and after clicks. The policy must match what the site actually does.
- Link "Privacy" in the F03 footer, from the C15 consent text and from the C09 trailer note.

## Acceptance criteria
- [ ] The page is reachable from the footer on every page
- [ ] Every third-party host seen in the Network tab (home and game pages, on load and after clicking the trailer/widgets) is named in the policy
- [ ] Controller details are complete; no placeholders remain
- [ ] A "Last updated" date is shown
- [ ] Reads well at ~400 px
- [ ] `npm run build` succeeds

## Out of scope
- A cookie banner. Not planned while nothing non-essential loads before the visitor acts; re-evaluate if analytics are added.
- Terms of service
- The Polish translation (a follow-up to C22)
