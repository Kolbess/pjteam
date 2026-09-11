// Shared site chrome. The header and footer markup exists here and nowhere else,
// so the home page, the 404 page and later the game pages (C01) stay in sync.
const base = import.meta.env.BASE_URL;

// Section links are bare hashes on the home page and links back to it everywhere else.
const sectionHref = (hash, home) => (home ? `#${hash}` : `${base}#${hash}`);

const NAV_LINKS = [
  { hash: 'games', label: 'Games' },
  { hash: 'studio', label: 'Studio' },
  { hash: 'team', label: 'Team' },
  { hash: 'contact', label: 'Contact' },
];

/**
 * @param {object} [options]
 * @param {boolean} [options.home]     the page being rendered is the home page
 * @param {boolean} [options.nav]      include the main navigation and its mobile toggle
 * @param {boolean} [options.skipLink] include the skip link (needs a #content target)
 * @param {{hash: string, label: string}} [options.action] the header call to action
 */
export function renderHeader({
  home = false,
  nav = true,
  skipLink = true,
  action = { hash: 'contact', label: "Let's talk" },
} = {}) {
  // The mobile menu is CSS-driven: `.nav-toggle[aria-expanded="true"] ~ .site-nav`,
  // so the nav must stay a following sibling of the toggle.
  const navMarkup = nav
    ? `
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
${NAV_LINKS.map(({ hash, label }) => `      <a href="${sectionHref(hash, home)}">${label}</a>`).join('\n')}
    </nav>`
    : '';

  return `${skipLink ? `<a class="skip-link" href="#content">Skip to content</a>\n  ` : ''}<header class="site-header">
    <a class="wordmark" href="${home ? '#top' : base}" aria-label="PJTeam home">
      <img class="wordmark-logo" src="${base}logo-64.png" alt="" width="32" height="32" />
      <span>PJTeam</span>
    </a>${navMarkup}
    <a class="header-link" href="${sectionHref(action.hash, home)}">${action.label} <span aria-hidden="true">↗</span></a>
  </header>`;
}

/**
 * @param {object} [options]
 * @param {boolean} [options.year]    show the current year next to the studio name
 * @param {boolean} [options.socials] show the social channels (linked in F04)
 */
export function renderFooter({ year = true, socials = true } = {}) {
  const items = [
    `<span>PJTeam Studio${year ? `, ${new Date().getFullYear()}` : ''}</span>`,
    '<span>Made with curiosity.</span>',
  ];
  if (socials) items.push('<span>Instagram&nbsp; · &nbsp;Bluesky</span>');

  return `<footer class="site-footer section-shell">
    <div class="site-footer-inner">${items.join('')}</div>
  </footer>`;
}

// Mobile menu: toggle, close on link click, close on Escape and return focus to the toggle.
// Does nothing on pages rendered without the nav.
export function initNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('#site-nav');
  if (!navToggle || !siteNav) return;

  const isNavOpen = () => navToggle.getAttribute('aria-expanded') === 'true';
  const setNavOpen = (open) => navToggle.setAttribute('aria-expanded', String(open));

  navToggle.addEventListener('click', () => setNavOpen(!isNavOpen()));
  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isNavOpen()) {
      setNavOpen(false);
      navToggle.focus();
    }
  });
}
