/**
 * Post-build prerender: turns the client-side React app into real, crawlable HTML.
 *  - writes dist/index.html, dist/<branch-slug>/index.html and dist/404.html
 *    with the page content + per-page <title>/meta/canonical/JSON-LD already in the HTML
 *  - generates dist/sitemap.xml and dist/robots.txt for the configured SITE_URL
 * Run automatically by `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const mod = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const { renderRoute, getPages, SITE_URL, USING_FALLBACK_URL } = mod;

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html template is missing the seo markers or #root placeholder');
}

const pages = getPages();
const today = new Date().toISOString().slice(0, 10);

for (const page of pages) {
  const body = renderRoute(page.path, { notFound: page.notFound });
  const html = template
    .replace(SEO_BLOCK, () => `<!--seo:start-->\n    ${page.head}\n    <!--seo:end-->`)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  const out = path.join(dist, page.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerendered ${page.path.padEnd(34)} → ${page.file} (${(html.length / 1024).toFixed(1)} KB)`);
}

const indexable = pages.filter((p) => !p.notFound);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map((p) => {
    const loc = p.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${p.path}/`;
    const priority = p.path === '/' ? '1.0' : '0.9';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`sitemap.xml + robots.txt written for ${SITE_URL}`);
if (USING_FALLBACK_URL) {
  console.warn(
    '\n⚠️  SITE_URL is not set – canonical/sitemap/schema URLs point to the temporary AI Studio address.\n' +
      '   Build with your real domain:  SITE_URL=https://www.yourdomain.com npm run build\n'
  );
}
