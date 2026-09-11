import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="PJTeam home">
      <img class="wordmark-logo" src="/logo.png" alt="" width="32" height="32" />
      <span>PJTeam</span>
    </a>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#games">Games</a>
      <a href="#studio">Studio</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-link" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
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
          <div class="game-image image-meadow"><span>01</span></div>
          <div class="game-meta"><h3>Bearer</h3><p>Details coming soon</p><span class="status">In development</span></div>
        </article>
        <article class="game-card">
          <div class="game-image image-night"><span>02</span></div>
          <div class="game-meta"><h3>Kindred Paws</h3><p>Details coming soon</p><span class="status">In development</span></div>
        </article>
        <article class="game-card">
          <div class="game-image image-sky"><span>03</span></div>
          <div class="game-meta"><h3>Potion Stacker</h3><p>Details coming soon</p><span class="status status-muted">Planning phase</span></div>
        </article>
      </div>
    </section>

    <section class="studio section-shell" id="studio">
      <img class="studio-mark" src="/logo-mark.png" alt="" aria-hidden="true" />
      <div class="studio-statement"><p class="eyebrow">The studio</p><h2>Games with a pulse, made by people who care.</h2></div>
      <div class="studio-copy"><p>PJTeam is a small independent studio building characterful games with a point of view. We believe a game can be quiet and still leave a mark.</p><p>Our team brings together design, code, art and sound under one roof, with room for the unexpected.</p><a class="text-link" href="#contact">Meet the team <span aria-hidden="true">↗</span></a></div>
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
      <div class="contact-footer"><span>PJTeam Studio, 2025</span><span>Made with curiosity.</span><span>Instagram&nbsp; · &nbsp;Bluesky</span></div>
    </section>
  </main>
`;
