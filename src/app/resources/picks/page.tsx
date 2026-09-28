import type { Metadata } from 'next';
import PicksClient from './PicksClient';

export const metadata: Metadata = {
  title: '精选',
  description: "陈今筛选后的高质量外部内容：读到的、觉得值得留下来的文章、报告和讨论。",
  alternates: { canonical: '/resources/picks' },
};

export default function Page() {
  return <PicksClient />;
}
