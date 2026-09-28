import type { Metadata } from 'next';
import RoadmapClient from './RoadmapClient';

export const metadata: Metadata = {
  title: '计划池',
  description: '陈今自己的开发计划，以及读者希望看到的文章、手册、产品或合作方向。',
  alternates: { canonical: '/roadmap' },
};

export default function Page() {
  return <RoadmapClient />;
}
