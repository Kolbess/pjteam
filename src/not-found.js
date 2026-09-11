import { renderFooter, renderHeader } from './layout.js';

// The 404 page keeps its own static <main>; only the shared chrome comes from src/layout.js.
// It is inserted as a sibling of <main> (not a wrapper) so `.not-found + .site-footer` still matches.
// No nav or skip link here, and the footer stays minimal, exactly as the page shipped in F15.
const main = document.querySelector('#content');

main.insertAdjacentHTML(
  'beforebegin',
  renderHeader({ nav: false, skipLink: false, action: { hash: 'games', label: 'Our games' } }),
);
main.insertAdjacentHTML('afterend', renderFooter({ year: false, socials: false }));
