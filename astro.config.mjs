import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuração para GitHub Pages
  site: 'https://arthurfontes189.github.io',
  base: '/agencia-fontes-site',

  compressHTML: true,
  vite: {
    ssr: {
      external: ['gsap'],
    },
  },
});
