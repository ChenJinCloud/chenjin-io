import { publishedBlogPosts } from '@/content/blog/posts';
import { siteConfig } from '@/features/site/config';

export const dynamic = 'force-static';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const origin = siteConfig.canonicalOrigin;
  const items = [...publishedBlogPosts]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .map((post) => {
      const url = `${origin}/writing/${post.id}`;
      // Dates are authored as Beijing-time calendar days.
      const pubDate = new Date(`${post.sortDate}T00:00:00+08:00`).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title.zh)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt.zh)}</description>
    </item>`;
    })
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>陈今｜写作</title><link>${origin}/writing</link><description>陈今关于 AI 产品增长、Agent 工作流、个人知识系统与真实实践的文章。</description><language>zh-CN</language>${items}\n  </channel></rss>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
