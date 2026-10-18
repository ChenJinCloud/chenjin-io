'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GradientMesh from '@/components/GradientMesh';
import ChatGateway from '@/features/chat/ChatGateway';
import ProfileHero from '@/features/identity/ProfileHero';
import { publicProfile } from '@/features/identity/profile';
import type { ArticleCard } from '@/features/content/contracts';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { trackEvent, trackOutboundClick } from '@/lib/analytics';

const currentFocus = [
  'AI 产品如何被全球用户发现与采用',
  'Agent 工作流如何进入真实日常工作',
  '个人知识、项目与内容如何形成长期系统',
];

const selectedWork = [
  {
    title: 'chenjin.io',
    href: '#top',
    external: false,
  },
  {
    title: 'Global Growth OS',
    href: '/projects/global-growth-os',
    external: false,
  },
  {
    title: 'Personal Systems',
    href: '#now',
    external: false,
  },
];

const HomeClient = ({ featuredPosts }: { featuredPosts: ArticleCard[] }) => {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only z-[100] rounded-sm bg-foreground px-4 py-3 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        跳到正文
      </a>

      <Navigation />

      <main id="main">
        <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden border-b border-border/70 px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-40">
          <GradientMesh />
          <div className="relative mx-auto w-full max-w-7xl">
            <ProfileHero />

            <div className="relative mt-14 md:mt-20">
              <ChatGateway variant="hero" />
            </div>
          </div>
        </section>

        <section id="now" className="scroll-mt-20 border-b border-border/70 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">当前关注</h2>
            </div>

            <div className="lg:col-span-8">
              {currentFocus.map((item, index) => (
                <div key={item} className="border-t border-border py-6 md:py-8">
                  <h3 className="text-xl font-normal leading-8 text-foreground md:text-2xl">{item}</h3>
                  {index === currentFocus.length - 1 && <span className="mt-6 block border-b border-border md:mt-8" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-b border-border/70 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 md:mb-16">
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">正在形成的作品</h2>
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-foreground line-reveal">
                查看全部项目
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid border-t border-border md:grid-cols-3">
              {selectedWork.map((item) => {
                const content = (
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-xl font-medium leading-8 text-foreground md:text-2xl">{item.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                );

                const classes = 'group block min-h-36 border-b border-border px-0 py-8 transition-colors hover:bg-secondary/40 md:min-h-48 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0 last:md:pr-0';

                return item.href.startsWith('#') ? (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => trackEvent('home_work_click', { title: item.title, href: item.href })}
                    className={classes}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => trackEvent('home_work_click', { title: item.title, href: item.href })}
                    className={classes}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="writing" className="scroll-mt-20 border-b border-border/70 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">最近的文章</h2>
              <Link href="/writing" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground line-reveal">
                查看全部文章
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/writing/${post.id}`}
                  className="group grid gap-3 border-t border-border py-7 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-baseline md:py-8"
                >
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <h3 className="text-xl leading-8 text-foreground transition-colors group-hover:text-accent md:text-2xl">{post.title.zh}</h3>
                  <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" aria-hidden="true" />
                </Link>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-5 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.035em] md:text-7xl lg:col-span-8">CONTACT</h2>
              <div className="lg:col-span-4 lg:text-right">
                <a
                  href={`mailto:${publicProfile.email}`}
                  onClick={() => trackEvent('contact_click', { channel: 'email' })}
                  className="text-lg font-medium text-foreground line-reveal"
                >
                  {publicProfile.email}
                </a>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
                  {publicProfile.socialLinks.map((link) => (
                    <a key={link.channel} href={link.href} target="_blank" rel="noreferrer"
                      onClick={() => trackOutboundClick(link.href, { source: 'contact', channel: link.channel })}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeClient;
