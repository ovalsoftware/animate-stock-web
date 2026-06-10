import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Defaults target production (animatestock.com). The GitHub Pages workflow
// overrides these so the site also works at ovalsoftware.github.io/animate-stock-web.
const site = process.env.SITE ?? 'https://animatestock.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
