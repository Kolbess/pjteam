// Shared media rendering. The <picture> markup for game art lives here and nowhere else,
// so the home cards (src/main.js) and the game pages (src/game.js) stay in sync.

/**
 * @param {object} cover  a `cover` or `keyArt` entry from src/data/games.js: optional AVIF/WebP
 *                        `sources`, the fallback `src`, its intrinsic size, `alt`, and the
 *                        `pixelArt` / `mark` flags.
 * @param {object} [options]
 * @param {string} [options.className]  class on the <img> (the box it fills styles it)
 * @param {boolean} [options.priority]  above the fold: eager and high priority, never lazy
 */
export function renderCover(
  { sources = [], src, width, height, pixelArt, mark, alt = '' },
  { className = 'game-cover', priority = false } = {},
) {
  const classes = [className, pixelArt && 'game-cover-pixel', mark && 'game-cover-mark'].filter(Boolean).join(' ');
  const size = width ? ` width="${width}" height="${height}"` : '';
  const loading = priority ? ' fetchpriority="high" decoding="async"' : ' loading="lazy"';
  const img = `<img class="${classes}" src="${src}" alt="${alt}"${size}${loading} />`;
  if (!sources.length) return img;

  const tags = sources
    .map(({ type, srcset, sizes }) => `<source type="${type}" srcset="${srcset}"${sizes ? ` sizes="${sizes}"` : ''} />`)
    .join('');
  return `<picture>${tags}${img}</picture>`;
}
