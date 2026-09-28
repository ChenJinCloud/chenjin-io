import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { labTools } from '@/content/lab';
import { ExternalLink } from 'lucide-react';

export function generateStaticParams() {
  return labTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = labTools.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.desc.zh,
    alternates: { canonical: `/lab/${tool.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = labTools.find((t) => t.slug === slug);
  if (!tool) notFound();

  return (
    <PageLayout back={{ to: '/lab', label: { zh: '返回 Lab', en: 'Back to Lab' } }}>
      <div className="mb-4 flex items-center gap-3">
        <h1 className="font-serif text-4xl font-light md:text-5xl">{tool.name}</h1>
        {tool.status === 'live' && (
          <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">Live</span>
        )}
      </div>
      <p className="mb-8 max-w-2xl text-muted-foreground">{tool.desc.zh}</p>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        查看项目
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </PageLayout>
  );
}
