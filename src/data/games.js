// The studio's games. Titles, status, itch.io URLs and game-page copy live here only.
// Page copy is `pitch`, `about` (paragraphs), `features` ([title, text] pairs) and `facts`.
// A game with `page: true` needs at least a `pitch`; any other field it lacks doesn't render.
const gamesUrl = `${import.meta.env.BASE_URL}games/`;

// Bearer raster variants are generated from art-src/BearerNoText.png (1672x940, not served,
// not built). Regenerate them from that file rather than from anything inside public/.
const bearerWidths = [640, 960, 1280, 1600];

// The Bearer card is object-fit: cover. Under 600px its 300px-tall box is filled by height (~534px wide).
const bearerSizes = '(max-width: 600px) 534px, (max-width: 760px) 90vw, 480px';
const bearerSrcset = (ext) => bearerWidths.map((w) => `${gamesUrl}bearer-${w}.${ext} ${w}w`).join(', ');

// The hero box is ~700 CSS px wide at most on desktop and ~90vw below 760px.
const heroSizes = '(max-width: 760px) 90vw, (max-width: 1440px) 47vw, 700px';
const heroSrcset = (ext) => bearerWidths.map((w) => `${gamesUrl}bearer-hero-${w}.${ext} ${w}w`).join(', ');

// `cover` carries what the F12 <picture> markup needs: optional AVIF/WebP sources, the
// fallback <img>, its intrinsic size, and whether it is pixel art or the studio mark.
//
// An optional `media` array drives the C06 gallery on the game page, with files under
// public/games/<slug>/:
//   { type: 'image', src, sources?, full?, alt, width, height }
//   { type: 'video', src, webm?, poster, alt, width, height }
// No game has one yet - C07/C08 deliver the screenshots and clips - so the game pages leave
// out their Media section.
export const games = [
  {
    slug: 'bearer',
    number: '01',
    title: 'Bearer',
    status: 'Released',
    demoUrl: 'https://kolbes.itch.io/bearer',
    playLabel: 'Download on itch.io',
    page: true,
    large: true,
    // Copy from the studio's own itch.io page (C03).
    pitch: 'A touching, wordless 3D isometric puzzle-adventure.',
    about: [
      'You play as a plush toy brought to life by a mysterious blue light. Set in a war-torn Eastern European city in the 1990s, you must follow the footsteps of your 10-year-old owner.',
      'It is an atmospheric experience that serves as a metaphor for the suffering of civilians, especially children, during armed conflicts. By guiding an innocent toy through a brutalized landscape, the game builds empathy and focuses on the emotional dimension of loss.',
    ],
    features: [
      ['Wordless narrative', "The story is told completely without words. It uses dramatic, hand-drawn 2D slides to reveal memories of the bear's owner."],
      ['Environmental puzzles', 'You explore an isometric world built with 3D models with a fixed camera angle. You will solve puzzles by pushing and pulling heavy objects to create paths. You can also climb over low obstacles and use a throwing mechanic to knock down out-of-reach items.'],
      ['Striking art direction', 'The game features stylized, low-poly 3D models that fit the brutalist architecture. It uses volumetric lighting to build a dense, oneiric atmosphere. The 3D gameplay contrasts beautifully with the static, hand-sketched 2D cutscenes.'],
      ['Evocative settings', 'You will journey through a variety of poignant locations. These include a ruined shop, abandoned streets, vertical apartment blocks, and a surreal playground.'],
    ],
    facts: { genre: 'Isometric puzzle-adventure', platforms: 'Windows', engine: 'Unity' },
    cover: {
      sources: [
        { type: 'image/avif', srcset: bearerSrcset('avif'), sizes: bearerSizes },
        { type: 'image/webp', srcset: bearerSrcset('webp'), sizes: bearerSizes },
      ],
      src: `${gamesUrl}bearer-1280.jpg`,
      width: 1280,
      height: 720,
    },
    // Above-the-fold hero art on the home page (F01). Same source as the cover, its own
    // widths and `sizes` because the hero box is a different shape.
    keyArt: {
      sources: [
        { type: 'image/avif', srcset: heroSrcset('avif'), sizes: heroSizes },
        { type: 'image/webp', srcset: heroSrcset('webp'), sizes: heroSizes },
      ],
      src: `${gamesUrl}bearer-hero-1280.jpg`,
      width: 1280,
      height: 720,
      alt: 'Bearer: a small teddy bear sits on a ledge, looking out over a ruined, fog-filled city street.',
    },
  },
  {
    slug: 'kindred-paws',
    number: '02',
    title: 'Kindred Paws',
    status: 'Released',
    demoUrl: 'https://kolbes.itch.io/kindred-paws',
    // Runs in the browser on itch.io, with a Windows download alongside.
    playLabel: 'Play on itch.io',
    page: true,
    // Copy from the studio's own itch.io page (C04). Its feature list is written as fragments
    // there; the sentences below keep its wording.
    pitch: 'A short 2D puzzle-platformer built for a game jam.',
    about: [
      'Kindred Paws follows an unlikely duo — a nimble fox and a graceful owl — escaping a forest engulfed by wildfire.',
      'Switch between the two animals to combine their unique abilities and solve environmental puzzles.',
    ],
    features: [
      ['Dual characters', 'Instantly switch between the fox and the owl.'],
      ['Unique abilities', 'The fox has a quick dash and crawls through tight spaces; the owl glides across gaps and jumps higher.'],
      ['Puzzles', 'Break walls and cross falling bridges.'],
      ['Atmospheric world', 'A pixel-art forest with dynamic fire and embers.'],
      ['Short and focused', 'Around 10–30 minutes of playtime, perfect for a jam.'],
    ],
    facts: {
      genre: '2D puzzle-platformer',
      platforms: 'Web browser, Windows',
      engine: 'Unity',
      madeFor: 'Games for a Cause charity jam',
    },
    cover: {
      sources: [{ type: 'image/webp', srcset: `${gamesUrl}kindred-paws.webp` }],
      src: `${gamesUrl}kindred-paws.png`,
      width: 315,
      height: 250,
      pixelArt: true,
    },
  },
  {
    slug: 'potion-stacker',
    number: '03',
    title: 'Potion Stacker',
    status: 'Planning phase',
    statusMuted: true,
    demoUrl: null,
    note: 'Details coming soon',
    // No game page until the studio decides to announce it (C05), so the card stays unlinked.
    page: false,
    // No art yet: the card shows the studio mark on the brand gradient.
    cover: { src: `${import.meta.env.BASE_URL}logo-mark.png`, mark: true },
  },
];

export const getGame = (slug) => games.find((game) => game.slug === slug);

// Game pages live at /pjteam/games/<slug>/ (C01). A game without a page has no link.
export const gamePageUrl = (game) => (game.page ? `${gamesUrl}${game.slug}/` : null);
