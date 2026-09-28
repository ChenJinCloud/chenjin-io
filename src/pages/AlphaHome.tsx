import Navigation from '@/components/Navigation';
import Seo from '@/components/Seo';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    href: 'https://github.com/ChenJinCloud/global-growth-os',
    external: true,
  },
  {
    title: 'Personal Systems',
    href: '#now',
    external: false,
  },
];

const featuredPosts = [
  {
    id: 'gallup-ai-human-consulting',
    date: '2026.06.15',
    title: '我用AI读完了盖洛普报告，最后还是被真人咨询改变了。',
  },
  {
    id: 'systematic-personal-influence',
    date: '2026.02.03',
    title: '如何系统化构建 IP 影响力（2025 上半年思考精华）',
  },
  {
    id: 'personal-database',
    date: '2025.02.20',
    title: '建议大家尽早开始搭建个人数据库',
  },
];

const AlphaHome = () => {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Seo
        title="陈今｜AI 产品增长、Agent 工作流与个人知识系统"
        description="陈今的公开工作索引：AI 产品增长、Agent 工作流、个人知识系统，以及正在形成的作品与写作。"
      />
      <a
        href="#main"
        className="sr-only z-[100] rounded-sm bg-foreground px-4 py-3 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        跳到正文
      </a>

      <Navigation />

      <main id="main">
        <section className="relative flex min-h-[92svh] items-end border-b border-border/70 px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-40">
          <div className="pointer-events-none absolute -right-40 top-12 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl md:h-[42rem] md:w-[42rem]" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] md:gap-12 lg:gap-20">
              <div>
                <h1 className="font-display text-[clamp(4.5rem,10vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
                  陈今
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:mt-9 md:text-xl md:leading-9">
                  AI 产品增长 · Agent 工作流 · 个人知识系统
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4 md:mt-12">
                  <a
                    href="#now"
                    onClick={() => trackEvent('hero_cta_click', { cta: 'see_what_im_doing' })}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    看我正在做什么
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    to="/writing"
                    onClick={() => trackEvent('hero_cta_click', { cta: 'read_writing' })}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
                  >
                    阅读文章
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm md:mx-0 md:ml-auto md:max-w-md">
                <div className="aspect-square overflow-hidden border border-border bg-secondary">
                  <img
                    src="/chen-jin-portrait.webp"
                    alt="陈今的个人照片"
                    width="900"
                    height="900"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
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
            <h2 className="mb-12 font-display text-4xl font-medium tracking-tight md:mb-16 md:text-5xl">正在形成的作品</h2>

            <div className="grid border-t border-border md:grid-cols-3">
              {selectedWork.map((item) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-xl font-medium leading-8 text-foreground md:text-2xl">{item.title}</h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                  </>
                );

                const classes = 'group block min-h-36 border-b border-border px-0 py-8 transition-colors hover:bg-secondary/40 md:min-h-48 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0 last:md:pr-0';

                return item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackOutboundClick(item.href, { source: 'home_work', title: item.title })}
                    className={classes}
                  >
                    {content}
                  </a>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => trackEvent('home_work_click', { title: item.title, href: item.href })}
                    className={classes}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="writing" className="scroll-mt-20 border-b border-border/70 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">最近的文章</h2>
              <Link to="/writing" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground line-reveal">
                查看全部文章
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/writing/${post.id}`}
                  className="group grid gap-3 border-t border-border py-7 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-baseline md:py-8"
                >
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <h3 className="text-xl leading-8 text-foreground transition-colors group-hover:text-accent md:text-2xl">{post.title}</h3>
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
                  href="mailto:jiaqichen6252@gmail.com"
                  onClick={() => trackEvent('contact_click', { channel: 'email' })}
                  className="text-lg font-medium text-foreground line-reveal"
                >
                  jiaqichen6252@gmail.com
                </a>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
                  <a href="https://github.com/ChenJinCloud" target="_blank" rel="noreferrer" onClick={() => trackOutboundClick('https://github.com/ChenJinCloud', { source: 'contact', channel: 'github' })} className="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</a>
                  <a href="https://x.com/jinchen_ai" target="_blank" rel="noreferrer" onClick={() => trackOutboundClick('https://x.com/jinchen_ai', { source: 'contact', channel: 'x' })} className="text-sm text-muted-foreground transition-colors hover:text-foreground">X</a>
                  <a href="https://www.linkedin.com/in/jiaqi-chen-b414582aa/" target="_blank" rel="noreferrer" onClick={() => trackOutboundClick('https://www.linkedin.com/in/jiaqi-chen-b414582aa/', { source: 'contact', channel: 'linkedin' })} className="text-sm text-muted-foreground transition-colors hover:text-foreground">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 px-5 py-7 md:px-10">
        <div className="mx-auto max-w-7xl text-sm text-muted-foreground">
          <p>© 2026 Chen Jin</p>
        </div>
      </footer>
    </div>
  );
};

export default AlphaHome;
