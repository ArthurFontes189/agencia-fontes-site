import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages (project site)
  site: 'https://arthurfontes189.github.io/agencia-fontes-site',
  base: '/agencia-fontes-site',

  compressHTML: true,
  vite: {
    ssr: {
      external: ['gsap'],
    },
  },
});
