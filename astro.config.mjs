import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set PUBLIC_SITE_URL after the actual domain has been connected.
const validUrl = process.env.PUBLIC_SITE_URL && /^https:\/\//.test(process.env.PUBLIC_SITE_URL)
  ? process.env.PUBLIC_SITE_URL.replace(/\/$/, '')
  : undefined;

export default defineConfig({
  output: 'static',
  ...(validUrl ? { site: validUrl, integrations: [sitemap()] } : {}),
  vite: { plugins: [tailwindcss()] },
});
