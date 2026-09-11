// The studio's games. Titles, status and demo URLs live here only.
// Copy for the game pages (pitch, features, genre, platforms, engine) arrives with C03/C04.
const gamesUrl = `${import.meta.env.BASE_URL}games/`;

// The Bearer card is object-fit: cover. Under 600px its 300px-tall box is filled by height (~534px wide).
const bearerSizes = '(max-width: 600px) 534px, (max-width: 760px) 90vw, 480px';
const bearerSrcset = (ext) => [640, 960, 1280, 1600].map((w) => `${gamesUrl}bearer-${w}.${ext} ${w}w`).join(', ');

// `cover` carries what the F12 <picture> markup needs: optional AVIF/WebP sources, the
// fallback <img>, its intrinsic size, and whether it is pixel art or the studio mark.
export const games = [
  {
    slug: 'bearer',
    number: '01',
    title: 'Bearer',
    status: 'In development',
    demoUrl: 'https://kolbes.itch.io/bearer',
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
  },
  {
    slug: 'kindred-paws',
    number: '02',
    title: 'Kindred Paws',
    status: 'In development',
    demoUrl: 'https://kolbes.itch.io/kindred-paws',
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
    // No art yet: the card shows the studio mark on the brand gradient.
    cover: { src: `${import.meta.env.BASE_URL}logo-mark.png`, mark: true },
  },
];
