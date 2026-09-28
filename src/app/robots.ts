import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/account', '/privacy', '/terms'] },
    ],
    sitemap: 'https://chenjin.io/sitemap.xml',
  };
}
