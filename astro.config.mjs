import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuração para GitHub Pages (projeto)
  site: 'https://arthurfontes189.github.io/agencia-fontes-site',
  base: '/agencia-fontes-site',

  compressHTML: true,
  vite: {
    ssr: {
      external: ['gsap'],
    },
  },
});
