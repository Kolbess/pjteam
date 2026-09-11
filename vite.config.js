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
      input: {
        main: resolve(root, 'index.html'),
        notFound: resolve(root, '404.html'),
      },
    },
  },
});
