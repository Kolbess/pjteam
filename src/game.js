import './style.css';
import { getGame } from './data/games.js';
import { initGallery, renderGallery } from './gallery.js';
import { initNav, renderFooter, renderHeader } from './layout.js';
import { renderCover } from './media.js';

// One entry for every game page. The page picks its game from `<body data-game="...">`
// and renders from src/data/games.js, so titles, statuses, itch.io URLs and copy stay defined once.
// Every section renders from the game's data, and a field that isn't supplied simply doesn't
// render: no placeholders and no invented text.
const base = import.meta.env.BASE_URL;
const slug = document.body.dataset.game;
const game = getGame(slug);
if (!game) throw new Error(`Unknown game slug: ${slug}`);

const { about = [], features = [], facts = {} } = game;

const section = (id, title, body) => `<section class="game-section" aria-labelledby="${id}-heading">
        <h2 id="${id}-heading">${title}</h2>
        ${body}
      </section>`;

// Bearer has written alt text (F01); Kindred Paws does not yet, so its art stays decorative
// rather than getting a description nobody approved.
const art = game.keyArt ?? game.cover;

const playButton = game.demoUrl
  ? `<a class="button button-dark" href="${game.demoUrl}" target="_blank" rel="noopener">${game.playLabel} <span aria-hidden="true">↗</span></a>`
  : '';

// C06's gallery renders as soon as a game has a `media` array (C07/C08 supply the files).
const gallery = renderGallery(game.media);

const factList = [
  ['Genre', facts.genre],
  ['Platforms', facts.platforms],
  ['Engine', facts.engine],
  ['Made for', facts.madeFor],
  ['Status', game.status],
].filter(([, value]) => value);

const sections = [
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
  section(
    'facts',
    'Facts',
    `<dl class="game-facts">
          ${factList.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('\n          ')}
        </dl>`,
  ),
].filter(Boolean);

document.querySelector('#app').innerHTML = `
  ${renderHeader()}

  <main id="content" tabindex="-1">
    <article class="game-page section-shell">
      <p class="eyebrow"><a class="crumb" href="${base}#games">All games</a></p>
      <h1>${game.title}</h1>
      <p class="game-pitch">${game.pitch}</p>
      <p class="status">${game.status}</p>
      ${playButton}

      <div class="game-page-art">${renderCover(art)}</div>

      ${sections.join('\n\n      ')}
    </article>
  </main>

  ${renderFooter()}
`;

initNav();
initGallery();
