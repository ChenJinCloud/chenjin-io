import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { sessionReader } from '@/features/auth/session.server';
import { siteConfig } from '@/features/site/config';
import { phase2Enabled } from '@/features/site/flags';

export const metadata: Metadata = { robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function WorkspaceLayout({ children }: { children: ReactNode }) {
  if (!phase2Enabled) notFound();
  const session = await sessionReader.read(await headers());
  if (session.status !== 'authenticated') redirect(siteConfig.loginPath);
  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
