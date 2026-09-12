import './style.css';
import { getGame } from './data/games.js';
import { initGallery, renderGallery } from './gallery.js';
import { initNav, renderFooter, renderHeader } from './layout.js';
import { renderCover } from './media.js';

// One entry for every game page. The page picks its game from `<body data-game="...">`
// and renders from src/data/games.js, so titles, statuses and itch.io URLs stay defined once.
//
// A game with a `pitch` has studio-approved copy (C03/C04): every section renders from its data,
// and a field that isn't supplied simply doesn't render. A game without one is still a draft and
// shows clearly marked placeholder slots, with <meta name="robots" content="noindex"> on its page
// and no entry in public/sitemap.xml.
const base = import.meta.env.BASE_URL;
const slug = document.body.dataset.game;
const game = getGame(slug);
if (!game) throw new Error(`Unknown game slug: ${slug}`);
const draft = !game.pitch;

const slot = (label, modifier = '') => `<div class="slot${modifier}"><span>[${label}]</span></div>`;
const placeholder = (label) => `<span class="placeholder">[${label}]</span>`;

const section = (id, title, body) => `<section class="game-section" aria-labelledby="${id}-heading">
        <h2 id="${id}-heading">${title}</h2>
        ${body}
      </section>`;

// Bearer has written alt text (F01); Kindred Paws does not yet, so its art stays decorative
// rather than getting a description nobody approved.
const art = game.keyArt ?? game.cover;

const demoButton = game.demoUrl
  ? `<a class="button button-dark" href="${game.demoUrl}" target="_blank" rel="noopener">${game.playLabel ?? 'Play demo on itch.io'} <span aria-hidden="true">↗</span></a>`
  : '';

// C06's gallery renders as soon as a game has a `media` array (C07/C08 supply the files).
const gallery = renderGallery(game.media);

const draftSections = () => {
  const facts = [
    ['Genre', placeholder('genre')],
    ['Platforms', placeholder('platforms')],
    ['Engine', placeholder('engine')],
    ['Status', game.status],
  ];
  return [
    section(
      'media',
      'Media',
      `${gallery || `<div class="slot-grid">${slot('image 1')}${slot('image 2')}${slot('image 3')}</div>`}
        ${slot('trailer', ' slot-trailer')}`,
    ),
    section(
      'features',
      'Features',
      `<ul class="game-features">${['feature 1', 'feature 2', 'feature 3'].map((f) => `<li>${placeholder(f)}</li>`).join('')}</ul>`,
    ),
    section('facts', 'Facts', renderFacts(facts)),
  ];
};

const renderFacts = (facts) =>
  `<dl class="game-facts">
          ${facts.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('\n          ')}
        </dl>`;

const copySections = () => {
  const { about = [], features = [], facts = {} } = game;
  const factList = [
    ['Genre', facts.genre],
    ['Platforms', facts.platforms],
    ['Engine', facts.engine],
    ['Made for', facts.madeFor],
    ['Status', game.status],
  ].filter(([, value]) => value);
  return [
    about.length && section('about', 'About', `<div class="game-about">${about.map((p) => `<p>${p}</p>`).join('')}</div>`),
    gallery && section('media', 'Media', gallery),
    features.length &&
      section(
        'features',
        'Features',
        `<ul class="game-features">
          ${features.map(([title, text]) => `<li><strong>${title}.</strong> ${text}</li>`).join('\n          ')}
        </ul>`,
      ),
    section('facts', 'Facts', renderFacts(factList)),
  ].filter(Boolean);
};

document.querySelector('#app').innerHTML = `
  ${renderHeader()}

  <main id="content" tabindex="-1">
    <article class="game-page section-shell">
      <p class="eyebrow"><a class="crumb" href="${base}#games">All games</a></p>
      <h1>${game.title}</h1>
      <p class="game-pitch">${draft ? placeholder('one-line pitch') : game.pitch}</p>
      <p class="status">${game.status}</p>
      ${demoButton}

      <div class="game-page-art">${renderCover(art)}</div>
      ${draft ? '<p class="page-note">This page is still being built: the marked slots are waiting on final copy and media from the studio.</p>' : ''}

      ${(draft ? draftSections() : copySections()).join('\n\n      ')}
    </article>
  </main>

  ${renderFooter()}
`;

initNav();
initGallery();
