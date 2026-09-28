import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const siteUrl = 'https://chenjin.io';

const read = (relativePath) => readFile(path.join(distDir, relativePath), 'utf8');
const assert = (condition, message) => {
  if (!condition) throw new Error(`SEO check failed: ${message}`);
};

await access(distDir);
const sitemap = await read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(urls.length >= 3, 'sitemap should contain the homepage, writing index and published articles');
assert(!sitemap.includes('ai-confidence-ground'), 'draft article leaked into sitemap');

for (const url of urls) {
  const route = new URL(url).pathname;
  const relativePath = route === '/' ? 'index.html' : `${route.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
  const html = await read(relativePath);
  assert(/<title>[^<]+<\/title>/i.test(html), `${route} is missing a title`);
  assert(/<meta name="description" content="[^"]+"/i.test(html), `${route} is missing a description`);
  assert(new RegExp(`<link rel="canonical" href="${siteUrl.replace('.', '\\.')}${route.replace('/', '\\/')}"`).test(html), `${route} has an incorrect canonical`);
  assert(/<div id="root">\s*<main[\s>]/i.test(html), `${route} has no static HTML content in the root`);

  if (route.startsWith('/writing/') && route !== '/writing/') {
    assert(/"@type":"BlogPosting"/.test(html), `${route} is missing BlogPosting JSON-LD`);
  }
}

const notFound = await read('404.html');
assert(/noindex/i.test(notFound), '404 page must be noindex');
await access(path.join(distDir, 'rss.xml'));

console.log(`SEO checks passed for ${urls.length} sitemap URLs.`);
