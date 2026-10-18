import 'server-only';
import { publishedBlogPosts } from '@/content/blog/posts';
import { getKnowledgeRegistry } from '@/content/registry';
import type { Language } from '@/lib/i18n';
import type { ArticleCard } from './contracts';

export function listPublicArticles(limit?: number): ArticleCard[] {
  const posts = [...publishedBlogPosts].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  return (limit === undefined ? posts : posts.slice(0, limit)).map(({ id, date, title, excerpt }) => ({ id, date, title, excerpt }));
}

/** Legacy sources remain behind this server facade while content is migrated. */
export function listPublicKnowledge(language: Language) {
  return getKnowledgeRegistry(language);
}
