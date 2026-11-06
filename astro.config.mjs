// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Leave the blog out of the sitemap until a post is published.
const blogDir = './src/content/blog';
const hasPosts = readdirSync(blogDir).some(
  (file) => /\.mdx?$/.test(file) && !/^draft:\s*true\s*$/m.test(readFileSync(`${blogDir}/${file}`, 'utf8')),
);

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages as a user site (repo: PeiJeSsu.github.io).
  site: 'https://peijessu.github.io',
  integrations: [sitemap({ filter: (page) => hasPosts || !page.endsWith('/blog/') })],
});
