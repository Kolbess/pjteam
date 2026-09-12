import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));

// GitHub Pages serves the site from https://kolbess.github.io/pjteam/
export default defineConfig({
  base: '/pjteam/',
  build: {
    rollupOptions: {
      // 404.html is served by GitHub Pages for any unknown URL under the site.
      // Each game page is its own input: games/<slug>/index.html becomes /pjteam/games/<slug>/.
      input: {
        main: resolve(root, 'index.html'),
        notFound: resolve(root, '404.html'),
        bearer: resolve(root, 'games/bearer/index.html'),
        kindredPaws: resolve(root, 'games/kindred-paws/index.html'),
      },
    },
  },
});
