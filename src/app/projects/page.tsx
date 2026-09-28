import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: '项目',
  description: '陈今的项目与证据层：已发布案例、正在推进的实践，以及独立产品引流。',
  alternates: { canonical: '/projects' },
};

export default function Page() {
  return <ProjectsClient />;
}
