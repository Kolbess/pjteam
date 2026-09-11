# C15 · Add a newsletter signup with explicit GDPR consent

| Type | Priority | Effort | Status |
|---|---|---|---|
| Content | P1 | S | Blocked |

**Depends on:** C21 (the consent text must link to the privacy policy); C01 (soft: for the game-page placement)
**Blocked on:**
- **Provider:** a newsletter provider account (e.g. Buttondown or MailerLite) with double opt-in enabled and its data-processing terms accepted. Prefer a provider that accepts a plain HTML form POST, so no provider script loads on page view.
- **Sender:** the sender name/address.
- **Incentive wording and frequency** the studio commits to, e.g. "Beta invites and demo news for Bearer and Kindred Paws, about one email a month".

## Problem
- The only ways to keep in touch are a `mailto:` link (`src/main.js:78`) and the itch.io links. Interested visitors leave with no way to hear about betas or releases.
- The site is static on GitHub Pages (`.github/workflows/deploy.yml`), so there is no backend to store addresses.

## Goal
The home page, and each game page in a compact form, has a short signup form with a clear incentive and an unticked consent checkbox. It submits straight to the provider.

## Suggested approach
- Build a plain `<form action="<provider endpoint>" method="post">`:
  - A visible `<label>` for an email input (`type="email"`, `autocomplete="email"`, `required`).
  - A required, **unticked** consent checkbox: "I'd like to receive the PJTeam newsletter. I can unsubscribe at any time. See the privacy policy." Link to C21.
  - The provider's honeypot field if it has one.
  - A submit button styled as `.button-dark` (`src/style.css:23-26`).
- For Buttondown, the embed endpoint is `https://buttondown.com/api/emails/embed-subscribe/<username>`; confirm this in their docs. If the chosen provider only offers a JS embed, load its script on focus/submit, not on page load.
- State the incentive and frequency above the field. Name the provider below it.
- **Placement:** a new home section before the contact section (`src/main.js:75`), plus a compact variant on game pages near the demo button.
- **After submit:** use the provider's hosted confirmation page, or configure a redirect to a small `/pjteam/thanks/` page (optional).
- Add no analytics or tracking pixels.

## Acceptance criteria
- [ ] A test address receives a double-opt-in email and only becomes a subscriber after confirming
- [ ] The form can't be submitted without the consent box ticked (native `required`), and the box is unticked by default
- [ ] The Network tab shows no requests to the provider on page load
- [ ] Works by keyboard with visible labels and focus; no overflow at ~400 px
- [ ] The privacy-policy link opens C21's page
- [ ] `npm run build` succeeds

## Out of scope
- Writing or sending newsletters
- Any backend, analytics or cookie banner
