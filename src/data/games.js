// The studio's games. Titles, status and demo URLs live here only.
// Copy for the game pages (pitch, features, genre, platforms, engine) arrives with C03/C04.
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
export const games = [
  {
    slug: 'bearer',
    number: '01',
    title: 'Bearer',
    status: 'In development',
    demoUrl: 'https://kolbes.itch.io/bearer',
    page: true,
    large: true,
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
    status: 'In development',
    demoUrl: 'https://kolbes.itch.io/kindred-paws',
    page: true,
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
