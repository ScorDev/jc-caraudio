// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Demo publicada en GitHub Pages: https://scordev.github.io/jc-caraudio/
// Si después se usa un dominio propio, cambia `site` y elimina `base`.
export default defineConfig({
  site: 'https://scordev.github.io',
  base: '/jc-caraudio/',
  vite: { plugins: [tailwindcss()] },
});
