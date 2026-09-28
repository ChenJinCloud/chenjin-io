import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const siteUrl = 'https://chenjin.io';
const socialImage = `${siteUrl}/og-image.svg`;

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const escapeXml = (value) => escapeHtml(value).replaceAll("'", '&apos;');
const serializeJsonLd = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');
const renderMarkdown = (content) => renderToStaticMarkup(createElement(ReactMarkdown, {
  children: content,
  components: {
    a: ({ href, children, ...props }) => createElement('a', {
      ...props,
      href: href?.replace(/^\/blog\//, '/writing/'),
    }, children),
  },
}));

const staticHome = `
  <main>
    <section aria-labelledby="home-title">
      <h1 id="home-title">陈今</h1>
      <p>AI 产品增长 · Agent 工作流 · 个人知识系统</p>
      <p>我在把复杂问题变成可执行的系统，并记录真实实践、研究与正在形成的作品。</p>
      <p><a href="/writing">阅读文章</a></p>
      <img src="/chen-jin-portrait.webp" alt="陈今的个人照片" width="900" height="900" />
    </section>
    <section id="now" aria-labelledby="now-title">
      <h2 id="now-title">当前关注</h2>
      <ul>
        <li>AI 产品如何被全球用户发现与采用</li>
        <li>Agent 工作流如何进入真实日常工作</li>
        <li>个人知识、项目与内容如何形成长期系统</li>
      </ul>
    </section>
    <section id="work" aria-labelledby="work-title">
      <h2 id="work-title">正在形成的作品</h2>
      <ul>
        <li><a href="/#top">chenjin.io</a></li>
        <li><a href="https://github.com/ChenJinCloud/global-growth-os">Global Growth OS</a></li>
        <li><a href="/#now">Personal Systems</a></li>
      </ul>
    </section>
    <section id="writing" aria-labelledby="writing-title">
      <h2 id="writing-title">最近的文章</h2>
      <p><a href="/writing">查看全部文章</a></p>
    </section>
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">CONTACT</h2>
      <p><a href="mailto:jiaqichen6252@gmail.com">jiaqichen6252@gmail.com</a></p>
    </section>
  </main>`;

const setMeta = (html, selector, content) => {
  const escaped = escapeHtml(content);
  const pattern = selector.type === 'name'
    ? new RegExp(`<meta\\s+name=["']${selector.key}["'][^>]*>`, 'i')
    : new RegExp(`<meta\\s+property=["']${selector.key}["'][^>]*>`, 'i');
  const replacement = `<meta ${selector.type}="${selector.key}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `    ${replacement}\n  </head>`);
};

const buildHtml = (template, { title, description, route, type = 'website', staticContent, jsonLd }) => {
  const canonical = new URL(route, siteUrl).toString();
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, { type: 'name', key: 'description' }, description);
  html = setMeta(html, { type: 'name', key: 'robots' }, 'index, follow');
  html = setMeta(html, { type: 'property', key: 'og:title' }, title);
  html = setMeta(html, { type: 'property', key: 'og:description' }, description);
  html = setMeta(html, { type: 'property', key: 'og:type' }, type);
  html = setMeta(html, { type: 'property', key: 'og:url' }, canonical);
  html = setMeta(html, { type: 'property', key: 'og:image' }, socialImage);
  html = setMeta(html, { type: 'name', key: 'twitter:title' }, title);
  html = setMeta(html, { type: 'name', key: 'twitter:description' }, description);
  html = setMeta(html, { type: 'name', key: 'twitter:image' }, socialImage);
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
  if (jsonLd) {
    html = html.replace('</head>', `    <script type="application/ld+json">${serializeJsonLd(jsonLd)}</script>\n  </head>`);
  }
  return html;
};

const postsSource = await readFile(path.join(projectRoot, 'src/content/blog/posts.ts'), 'utf8');
const postPattern = /id:\s*'([^']+)'[\s\S]*?title:\s*\{\s*zh:\s*'([^']*)'[\s\S]*?date:\s*'([^']*)'[\s\S]*?excerpt:\s*\{\s*zh:\s*'([^']*)'/g;
const publishedPosts = [...postsSource.matchAll(postPattern)]
  .map((match) => {
    const blockMatch = postsSource.match(new RegExp(`id:\\s*'${match[1]}'([\\s\\S]*?)(?=\\n\\s*\\},)`));
    const status = blockMatch?.[1].match(/status:\s*'(published|draft|unlisted)'/)?.[1] ?? 'published';
    return { id: match[1], title: match[2], date: match[3], description: match[4], status };
  })
  .filter((post) => post.status === 'published' && /^\d{4}\.\d{2}\.\d{2}$/.test(post.date));

if (publishedPosts.length === 0) {
  throw new Error('No published blog posts found for prerendering.');
}

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
await rm(path.join(distDir, 'demos'), { recursive: true, force: true });

for (const post of publishedPosts) {
  const articlePath = path.join(projectRoot, 'src/content/blog/articles', `${post.id}.md`);
  post.content = await readFile(articlePath, 'utf8');
  post.isoDate = post.date.replaceAll('.', '-');
  post.staticArticleHtml = renderMarkdown(post.content);
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '陈今｜AI 产品增长、Agent 工作流与个人知识系统',
  url: `${siteUrl}/`,
  inLanguage: 'zh-CN',
  publisher: { '@type': 'Person', name: '陈今', url: `${siteUrl}/` },
};

const routes = [
  {
    route: '/writing',
    title: '写作｜陈今',
    description: '陈今关于 AI 产品增长、Agent 工作流、个人知识系统与真实实践的文章。',
    staticContent: `<main><p><a href="/">返回首页</a></p><h1>写作</h1><nav aria-label="文章列表"><ul>${publishedPosts.map((post) => `<li><time datetime="${post.isoDate}">${post.date}</time> <a href="/writing/${post.id}">${escapeHtml(post.title)}</a><p>${escapeHtml(post.description)}</p></li>`).join('')}</ul></nav></main>`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: '写作｜陈今',
      url: `${siteUrl}/writing`,
      inLanguage: 'zh-CN',
      author: { '@type': 'Person', name: '陈今', url: `${siteUrl}/` },
      mainEntity: { '@type': 'ItemList', itemListElement: publishedPosts.map((post, index) => ({ '@type': 'ListItem', position: index + 1, url: `${siteUrl}/writing/${post.id}`, name: post.title })) },
    },
  },
  ...publishedPosts.map((post) => ({
    route: `/writing/${post.id}`,
    title: `${post.title}｜陈今`,
    description: post.description,
    type: 'article',
    staticContent: `<main><p><a href="/writing">返回写作</a></p><article><h1>${escapeHtml(post.title)}</h1><p><time datetime="${post.isoDate}">${post.date}</time></p><div class="article-content">${post.staticArticleHtml}</div></article></main>`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: [socialImage],
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      author: { '@type': 'Person', name: '陈今', url: `${siteUrl}/` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/writing/${post.id}` },
      url: `${siteUrl}/writing/${post.id}`,
      inLanguage: 'zh-CN',
    },
  })),
];

await writeFile(path.join(distDir, 'index.html'), buildHtml(template, {
  route: '/',
  title: '陈今｜AI 产品增长、Agent 工作流与个人知识系统',
  description: '陈今的公开工作索引：AI 产品增长、Agent 工作流、个人知识系统，以及正在形成的作品与写作。',
  staticContent: staticHome,
  jsonLd: homeJsonLd,
}));

for (const route of routes) {
  const routePath = route.route.slice(1);
  const html = buildHtml(template, route);
  const cleanUrlFile = path.join(distDir, `${routePath}.html`);
  const outputDir = path.join(distDir, route.route.slice(1));
  await mkdir(path.dirname(cleanUrlFile), { recursive: true });
  await mkdir(outputDir, { recursive: true });
  await writeFile(cleanUrlFile, html);
  await writeFile(path.join(outputDir, 'index.html'), html);
}

const sitemapEntries = [
  `  <url><loc>${siteUrl}/</loc><lastmod>2026-09-17</lastmod><priority>1.0</priority></url>`,
  `  <url><loc>${siteUrl}/writing</loc><lastmod>2026-09-17</lastmod><priority>0.9</priority></url>`,
  ...publishedPosts.map((post) => `  <url><loc>${siteUrl}/writing/${post.id}</loc><lastmod>${post.date.replaceAll('.', '-')}</lastmod></url>`),
];

await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`,
);

const rssItems = publishedPosts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/writing/${post.id}</link>
      <guid isPermaLink="true">${siteUrl}/writing/${post.id}</guid>
      <pubDate>${new Date(`${post.isoDate}T00:00:00+08:00`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`).join('');

await writeFile(
  path.join(distDir, 'rss.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>陈今｜写作</title><link>${siteUrl}/writing</link><description>陈今关于 AI 产品增长、Agent 工作流、个人知识系统与真实实践的文章。</description><language>zh-CN</language>${rssItems}\n  </channel></rss>\n`,
);

console.log(`Prerendered static HTML, metadata, JSON-LD, sitemap and RSS for ${routes.length + 1} routes.`);
