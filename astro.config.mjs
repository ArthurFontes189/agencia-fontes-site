import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuração para GitHub Pages (subpasta)
  // site: 'https://username.github.io',
  // base: '/agencia-fontes-site',

  // Ou domínio próprio
  site: 'https://agenciafontes.com.br',

  compressHTML: true,
  vite: {
    ssr: {
      external: ['gsap'],
    },
  },
});
