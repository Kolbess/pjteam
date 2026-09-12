import './style.css';
import { getGame } from './data/games.js';
import { initNav, renderFooter, renderHeader } from './layout.js';
import { renderCover } from './media.js';

// One entry for every game page. The page picks its game from `<body data-game="...">`
// and renders from src/data/games.js, so titles, statuses and demo URLs stay defined once.
//
// The studio has not delivered copy or media for these pages yet (C03/C04 for copy,
// C06-C09 for media), so every missing field renders as a clearly marked placeholder slot:
// no invented facts, no fake screenshots, and nothing that reads as a broken image.
// While the placeholders are on the page it carries <meta name="robots" content="noindex">
// and stays out of public/sitemap.xml.
const base = import.meta.env.BASE_URL;
const slug = document.body.dataset.game;
const game = getGame(slug);
if (!game) throw new Error(`Unknown game slug: ${slug}`);

const slot = (label, modifier = '') => `<div class="slot${modifier}"><span>[${label}]</span></div>`;
const placeholder = (label) => `<span class="placeholder">[${label}]</span>`;

// Bearer has written alt text (F01); Kindred Paws does not yet, so its art stays decorative
// rather than getting a description nobody approved. C04 supplies it.
const art = game.keyArt ?? game.cover;

const demoButton = game.demoUrl
  ? `<a class="button button-dark" href="${game.demoUrl}" target="_blank" rel="noopener">Play demo on itch.io <span aria-hidden="true">↗</span></a>`
  : '';

const facts = [
  ['Genre', placeholder('genre')],
  ['Platforms', placeholder('platforms')],
  ['Engine', placeholder('engine')],
  ['Status', game.status],
];

document.querySelector('#app').innerHTML = `
  ${renderHeader()}

  <main id="content" tabindex="-1">
    <article class="game-page section-shell">
      <p class="eyebrow"><a class="crumb" href="${base}#games">All games</a></p>
      <h1>${game.title}</h1>
      <p class="game-pitch">${placeholder('one-line pitch')}</p>
      <p class="status">${game.status}</p>
      ${demoButton}

      <div class="game-page-art">${renderCover(art)}</div>

      <p class="page-note">This page is still being built: the marked slots are waiting on final copy and media from the studio.</p>

      <section class="game-section" aria-labelledby="media-heading">
        <h2 id="media-heading">Media</h2>
        <div class="slot-grid">
          ${slot('image 1')}
          ${slot('image 2')}
          ${slot('image 3')}
        </div>
        ${slot('trailer', ' slot-trailer')}
      </section>

      <section class="game-section" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <ul class="game-features">
          <li>${placeholder('feature 1')}</li>
          <li>${placeholder('feature 2')}</li>
          <li>${placeholder('feature 3')}</li>
        </ul>
      </section>

      <section class="game-section" aria-labelledby="facts-heading">
        <h2 id="facts-heading">Facts</h2>
        <dl class="game-facts">
          ${facts.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('\n          ')}
        </dl>
      </section>
    </article>
  </main>

  ${renderFooter()}
`;

initNav();
