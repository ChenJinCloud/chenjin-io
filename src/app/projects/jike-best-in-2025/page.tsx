import type { Metadata } from 'next';
import JikeBestIn2025Client from './JikeBestIn2025Client';

export const metadata: Metadata = {
  title: '即刻 2025 精选',
  description: '把即刻上的高信息密度内容整理成可浏览年度集合的社区内容项目。',
  alternates: { canonical: '/projects/jike-best-in-2025' },
};

export default function Page() {
  return <JikeBestIn2025Client />;
}
