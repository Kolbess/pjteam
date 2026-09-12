// Game media gallery (C06): screenshots and short looping clips in one responsive grid.
// No gallery library: the full-size view is a native <dialog>, playback is an IntersectionObserver.
//
// It renders from the `media` array of a game in src/data/games.js:
//   { type: 'image', src, sources?, full?, alt, width, height }
//   { type: 'video', src, webm?, poster, alt, width, height }
// Files live under public/games/<slug>/. A game with no `media` renders nothing here, and the
// game page leaves out its Media section until C07/C08 deliver the real screenshots and clips.
import { renderCover } from './media.js';

const renderImage = (item) => {
  const { alt = '', full, src, width, height } = item;
  const size = width ? ` data-width="${width}" data-height="${height}"` : '';
  // The accessible name describes the action; the image alt itself would only repeat the picture.
  const label = alt ? `Open full size: ${alt}` : 'Open the screenshot full size';
  return `<li class="gallery-item">
            <button class="gallery-thumb" type="button" aria-label="${label}" data-full="${full ?? src}" data-alt="${alt}"${size}>
              ${renderCover(item, { className: 'gallery-media' })}
            </button>
          </li>`;
};

const renderClip = (item, index) => {
  const { src, webm, poster, alt = '', width, height } = item;
  const id = `gallery-clip-${index}`;
  const size = width ? ` width="${width}" height="${height}"` : '';
  const sources = [webm && `<source src="${webm}" type="video/webm" />`, `<source src="${src}" type="video/mp4" />`]
    .filter(Boolean)
    .join('');
  // muted + playsinline so in-view playback is allowed on mobile; preload="none" keeps the file
  // off the wire until the clip is scrolled to (or the user presses play).
  return `<li class="gallery-item gallery-item-clip">
            <video class="gallery-media gallery-clip" id="${id}" muted loop playsinline preload="none"
                   poster="${poster}"${size}${alt ? ` aria-label="${alt}"` : ''}>${sources}</video>
            <button class="gallery-clip-toggle" type="button" aria-controls="${id}" data-clip-label="${alt}">Play</button>
          </li>`;
};

/** Markup for the media grid. Returns '' when the game has no media yet. */
export function renderGallery(media = []) {
  if (!media.length) return '';
  const items = media.map((item, index) => (item.type === 'video' ? renderClip(item, index) : renderImage(item)));
  return `<ul class="gallery">\n          ${items.join('\n          ')}\n        </ul>`;
}

// Clips play only while in view, never under prefers-reduced-motion, and every clip has a
// visible pause/play control (WCAG 2.2.2).
function initClips(gallery) {
  const clips = [...gallery.querySelectorAll('.gallery-clip')].map((video) => ({
    video,
    toggle: video.closest('.gallery-item').querySelector('.gallery-clip-toggle'),
  }));
  if (!clips.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const inView = new Set();
  // `autoplay` is per clip: true until the viewer pauses it, false from the start under reduce.
  const autoplay = new Map(clips.map(({ video }) => [video, !reduceMotion.matches]));

  const sync = (video) => {
    if (autoplay.get(video) && inView.has(video)) video.play().catch(() => {});
    else if (!video.paused) video.pause();
  };

  clips.forEach(({ video, toggle }) => {
    const label = () => {
      const action = video.paused ? 'Play' : 'Pause';
      toggle.textContent = action;
      const clip = toggle.dataset.clipLabel;
      toggle.setAttribute('aria-label', clip ? `${action} clip: ${clip}` : `${action} clip`);
    };
    toggle.addEventListener('click', () => {
      const play = video.paused;
      autoplay.set(video, play);
      if (play) video.play().catch(() => {});
      else video.pause();
    });
    video.addEventListener('play', label);
    video.addEventListener('pause', label);
    label();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) inView.add(target);
        else inView.delete(target);
        sync(target);
      });
    },
    { threshold: 0.35 },
  );
  clips.forEach(({ video }) => observer.observe(video));

  // Switching the OS setting on mid-visit stops the clips; switching it back lets them resume.
  reduceMotion.addEventListener('change', ({ matches }) => {
    clips.forEach(({ video }) => {
      autoplay.set(video, !matches);
      sync(video);
    });
  });
}

// One <dialog> per page shows any screenshot full size. Escape and a backdrop click close it,
// and focus always returns to the thumbnail that opened it.
function initDialog(gallery) {
  const thumbs = [...gallery.querySelectorAll('.gallery-thumb')];
  if (!thumbs.length) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-dialog';
  dialog.innerHTML = `<img class="gallery-dialog-image" alt="" />
    <button class="gallery-dialog-close" type="button">Close</button>`;
  document.body.append(dialog);

  const image = dialog.querySelector('.gallery-dialog-image');
  let opener = null;

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const { full, alt, width, height } = thumb.dataset;
      image.src = full;
      image.alt = alt ?? '';
      if (width) {
        image.width = width;
        image.height = height;
      }
      dialog.setAttribute('aria-label', alt || 'Screenshot');
      opener = thumb;
      dialog.showModal();
    });
  });

  // A click whose target is the dialog itself landed on the backdrop: the image and the close
  // button are its children.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.querySelector('.gallery-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());
}

/** Wires up playback and the full-size dialog. Does nothing on a page without a gallery. */
export function initGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  initClips(gallery);
  initDialog(gallery);
}
