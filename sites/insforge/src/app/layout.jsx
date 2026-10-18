import site from '../../site.json';
import './globals.css';

export const metadata = {
  metadataBase: new URL(site.canonicalOrigin),
  title: site.name,
  description: '面向 InsForge 用户的产品动态、应用用例与使用实践。',
  alternates: { canonical: '/' },
  // Architecture preview only. Enable indexing after real content and deployment are verified.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
