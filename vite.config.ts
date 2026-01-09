import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Sitemap generator plugin
function sitemapGenerator(): Plugin {
  return {
    name: 'sitemap-generator',
    closeBundle() {
      const baseUrl = 'https://kiligridtech.com';
      const pages = [
        { path: '/', priority: '1.0', changefreq: 'weekly' },
        { path: '/services', priority: '0.9', changefreq: 'monthly' },
        { path: '/solutions', priority: '0.9', changefreq: 'monthly' },
        { path: '/products', priority: '0.8', changefreq: 'monthly' },
        { path: '/about', priority: '0.7', changefreq: 'monthly' },
        { path: '/contact', priority: '0.8', changefreq: 'monthly' },
      ];

      const today = new Date().toISOString().split('T')[0];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="sw" href="${baseUrl}${page.path}" />
  </url>`).join('\n')}
</urlset>`;

      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
      console.log('✅ Sitemap generated successfully at dist/sitemap.xml');
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        sitemapGenerator()
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
