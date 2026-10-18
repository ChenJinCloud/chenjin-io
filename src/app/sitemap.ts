import type { MetadataRoute } from 'next';
import { publishedBlogPosts, categorySlugs } from '@/content/blog/posts';
import { projects } from '@/content/projects';
import { labTools } from '@/content/lab';
import { siteConfig } from '@/features/site/config';

const SITE_URL = siteConfig.canonicalOrigin;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1.0 },
    { url: `${SITE_URL}/writing`, priority: 0.9 },
    { url: `${SITE_URL}/projects`, priority: 0.9 },
    { url: `${SITE_URL}/work-with-me`, priority: 0.8 },
    { url: `${SITE_URL}/about`, priority: 0.7 },
    { url: `${SITE_URL}/resources`, priority: 0.6 },
    { url: `${SITE_URL}/resources/stack`, priority: 0.6 },
    { url: `${SITE_URL}/resources/bookshelf`, priority: 0.4 },
    { url: `${SITE_URL}/resources/picks`, priority: 0.4 },
    { url: `${SITE_URL}/lab`, priority: 0.5 },
    { url: `${SITE_URL}/roadmap`, priority: 0.5 },
    { url: `${SITE_URL}/newsletter`, priority: 0.4 },
    { url: `${SITE_URL}/chat`, priority: 0.3 },
  ];

  const tagRoutes: MetadataRoute.Sitemap = [
    ...Object.values(categorySlugs).map((slug) => ({ url: `${SITE_URL}/writing/tag/${slug}`, priority: 0.5 })),
    { url: `${SITE_URL}/writing/tag/playbook`, priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = publishedBlogPosts.map((post) => ({
    url: `${SITE_URL}/writing/${post.id}`,
    lastModified: post.sortDate,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((project) => !project.route.startsWith('http'))
    .map((project) => ({ url: `${SITE_URL}${project.route}` }));

  const labRoutes: MetadataRoute.Sitemap = labTools.map((tool) => ({
    url: `${SITE_URL}/lab/${tool.slug}`,
  }));

  return Array.from(new Map([...staticRoutes, ...tagRoutes, ...postRoutes, ...projectRoutes, ...labRoutes]
    .map((route) => [route.url, route])).values());
}
