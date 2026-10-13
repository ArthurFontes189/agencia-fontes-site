import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages (user/org site)
  site: 'https://arthurfontes189.github.io',

  compressHTML: true,
  vite: {
    ssr: {
      external: ['gsap'],
    },
  },
});
