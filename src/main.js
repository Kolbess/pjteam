import './style.css';

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#content">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="PJTeam home">
      <img class="wordmark-logo" src="${import.meta.env.BASE_URL}logo-64.png" alt="" width="32" height="32" />
      <span>PJTeam</span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="#games">Games</a>
      <a href="#studio">Studio</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-link" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
  </header>

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
        <article class="game-card game-card-large">
          <a class="game-image game-image-link" href="https://kolbes.itch.io/bearer" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img class="game-cover" src="${import.meta.env.BASE_URL}games/bearer.png" alt="" loading="lazy" /><span>01</span></a>
          <div class="game-meta"><h3>Bearer</h3><a class="demo-link" href="https://kolbes.itch.io/bearer" target="_blank" rel="noopener">Play demo on itch.io <span aria-hidden="true">↗</span></a><span class="status">In development</span></div>
        </article>
        <article class="game-card">
          <a class="game-image game-image-link" href="https://kolbes.itch.io/kindred-paws" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img class="game-cover game-cover-pixel" src="${import.meta.env.BASE_URL}games/kindred-paws.png" alt="" loading="lazy" /><span>02</span></a>
          <div class="game-meta"><h3>Kindred Paws</h3><a class="demo-link" href="https://kolbes.itch.io/kindred-paws" target="_blank" rel="noopener">Play demo on itch.io <span aria-hidden="true">↗</span></a><span class="status">In development</span></div>
        </article>
        <article class="game-card">
          <div class="game-image image-planning"><img class="game-cover game-cover-mark" src="${import.meta.env.BASE_URL}logo-mark.png" alt="" loading="lazy" /><span>03</span></div>
          <div class="game-meta"><h3>Potion Stacker</h3><p>Details coming soon</p><span class="status status-muted">Planning phase</span></div>
        </article>
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
      <a class="contact-email" href="mailto:hello@pjteam.games">hello@pjteam.games <span aria-hidden="true">↗</span></a>
    </section>
  </main>

  <footer class="site-footer section-shell">
    <div class="site-footer-inner"><span>PJTeam Studio, ${new Date().getFullYear()}</span><span>Made with curiosity.</span><span>Instagram&nbsp; · &nbsp;Bluesky</span></div>
  </footer>
`;

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
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
