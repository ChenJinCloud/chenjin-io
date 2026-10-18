import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import { publicProfile } from '@/features/identity/profile';
import { siteConfig } from '@/features/site/config';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const SITE_URL = siteConfig.canonicalOrigin;
const SOCIAL_IMAGE = `${SITE_URL}/og-image.svg`;
const SITE_TITLE = '陈今｜AI 产品增长、Agent 工作流与个人知识系统';
const SITE_DESCRIPTION = '陈今的公开工作索引：AI 产品增长、Agent 工作流、个人知识系统，以及正在形成的作品与写作。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s｜陈今',
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Chen Jin' }],
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: '陈今｜写作' }],
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: '陈今',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: SOCIAL_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jinchen_ai',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#395f5f',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: publicProfile.name.en,
  alternateName: publicProfile.name.zh,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${publicProfile.portrait}`,
  email: `mailto:${publicProfile.email}`,
  sameAs: publicProfile.socialLinks.map((link) => link.href),
  knowsAbout: ['AI product growth', 'Agent workflows', 'Personal knowledge systems'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
