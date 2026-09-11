import './style.css';
import { games } from './data/games.js';
import { initNav, renderFooter, renderHeader } from './layout.js';

// The studio has no working mailbox yet: the custom domain isn't bought (C02), so mail would bounce.
// Set this to a working contact address and the Contact section shows the mailto link again.
const CONTACT_EMAIL = null;
const contactLink = CONTACT_EMAIL
  ? `<a class="contact-email" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL} <span aria-hidden="true">↗</span></a>`
  : `<a class="contact-email" href="https://kolbes.itch.io/" target="_blank" rel="noopener">Find us on itch.io <span aria-hidden="true">↗</span></a>`;

const renderCover = ({ sources = [], src, width, height, pixelArt, mark }) => {
  const classes = ['game-cover', pixelArt && 'game-cover-pixel', mark && 'game-cover-mark'].filter(Boolean).join(' ');
  const size = width ? ` width="${width}" height="${height}"` : '';
  const img = `<img class="${classes}" src="${src}" alt=""${size} loading="lazy" />`;
  if (!sources.length) return img;

  const tags = sources
    .map(({ type, srcset, sizes }) => `<source type="${type}" srcset="${srcset}"${sizes ? ` sizes="${sizes}"` : ''} />`)
    .join('');
  return `<picture>${tags}${img}</picture>`;
};

const renderCard = (game) => {
  const cover = `${renderCover(game.cover)}<span>${game.number}</span>`;
  // The cover repeats the demo link, so it is hidden from assistive tech and taken out of the tab order.
  const image = game.demoUrl
    ? `<a class="game-image game-image-link" href="${game.demoUrl}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${cover}</a>`
    : `<div class="game-image image-planning">${cover}</div>`;
  const action = game.demoUrl
    ? `<a class="demo-link" href="${game.demoUrl}" target="_blank" rel="noopener">Play demo on itch.io <span aria-hidden="true">↗</span></a>`
    : `<p>${game.note}</p>`;
  const status = `<span class="status${game.statusMuted ? ' status-muted' : ''}">${game.status}</span>`;

  return `<article class="game-card${game.large ? ' game-card-large' : ''}">
          ${image}
          <div class="game-meta"><h3>${game.title}</h3>${action}${status}</div>
        </article>`;
};

document.querySelector('#app').innerHTML = `
  ${renderHeader({ home: true })}

  <main id="content" tabindex="-1">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">Independent game studio · Białystok / everywhere</p>
        <h1>Small team.<br /><em>Big worlds.</em></h1>
        <p class="hero-intro">We make warm, strange and memorable games for people who like to wander a little further.</p>
        <a class="button button-dark" href="#games">See our games <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-art" role="img" aria-label="A colorful mountain landscape from an independent game">
        <div class="art-label">Currently making<br /><strong>Something worth<br />getting lost in.</strong></div>
        <span class="art-coordinate">53°08' N · 23°10' E</span>
      </div>
    </section>

    <section class="games section-shell" id="games">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2>Worlds in progress<span class="blue-dot">.</span></h2>
        <p>Stories, systems and small details that stay with you.</p>
      </div>
      <div class="game-grid">
        ${games.map(renderCard).join('\n        ')}
      </div>
    </section>

    <section class="studio section-shell" id="studio">
      <img class="studio-mark" src="${import.meta.env.BASE_URL}logo-mark.png" alt="" aria-hidden="true" />
      <div class="studio-statement"><p class="eyebrow">The studio</p><h2>Games with a pulse, made by people who care.</h2></div>
      <div class="studio-copy"><p>PJTeam is a small independent studio building characterful games with a point of view. We believe a game can be quiet and still leave a mark.</p><p>Our team brings together design, code, art and sound under one roof, with room for the unexpected.</p><a class="text-link" href="#team">Meet the team <span aria-hidden="true">↗</span></a></div>
    </section>

    <section class="team section-shell" id="team">
      <div class="section-heading">
        <p class="eyebrow">The people</p>
        <h2>Five curious minds<span class="blue-dot">.</span></h2>
        <p>A small crew with different obsessions and one shared desk playlist.</p>
      </div>
      <div class="team-grid">
        <article class="team-member"><div class="team-portrait portrait-one"><span>MR</span></div><h3>Mateusz Roszko</h3><p>CEO · Team Leader</p></article>
        <article class="team-member"><div class="team-portrait portrait-two"><span>PS</span></div><h3>Piotr Sowul</h3><p>Game Developer</p></article>
        <article class="team-member"><div class="team-portrait portrait-three"><span>?</span></div><h3>???</h3><p>3D/2D Artist</p></article>
        <article class="team-member"><div class="team-portrait portrait-four"><span>?</span></div><h3>???</h3><p>Game Designer</p></article>
        <article class="team-member"><div class="team-portrait portrait-five"><span>?</span></div><h3>???</h3><p>Sound Artist</p></article>
      </div>
    </section>

    <section class="contact section-shell" id="contact">
      <p class="eyebrow">Have a good feeling?</p>
      <h2>Say hello<span class="blue-dot">.</span></h2>
      ${contactLink}
    </section>
  </main>

  ${renderFooter()}
`;

initNav();
