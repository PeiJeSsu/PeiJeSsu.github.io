// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages as a user site (repo: PeiJeSsu.github.io).
  site: 'https://peijessu.github.io',
  integrations: [sitemap()],
});
