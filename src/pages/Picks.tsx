import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import Seo from '@/components/Seo';
import { picks } from '@/content/picks';
import { trackOutboundClick } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Picks = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <PageLayout back={{ to: '/writing', label: { zh: '返回写作', en: 'Back to Writing' } }}>
      <Seo
        title={isZh ? '精选｜陈今' : 'Picks｜Chen Jin'}
        description={isZh
          ? '陈今筛选后的高质量外部内容：读到的、觉得值得留下来的文章、报告和讨论。'
          : "Chen Jin's curated external reading — articles, reports, and discussions worth keeping."}
        path="/writing/picks"
      />

      <Heading className="mb-6">{isZh ? '精选' : 'Picks'}</Heading>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 max-w-2xl text-muted-foreground"
      >
        {isZh
          ? '不是链接合集，是我读到之后觉得值得留下来的东西——每一条都写一句为什么。来源主要是工具清单里「我关注的信息源」那部分。'
          : "Not a link dump — things I actually read and thought were worth keeping, each with one line on why. Sourced mainly from the feeds listed under Workbench's \"Sources I Follow\"."}
      </motion.p>

      {picks.length > 0 ? (
        <div className="border-t border-border">
          {picks.map((pick, i) => (
            <motion.a
              key={pick.id}
              href={pick.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick(pick.url, { source: 'picks', id: pick.id })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.04 }}
              className="group block border-b border-border py-7 transition-colors hover:bg-secondary/40 md:py-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>{pick.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pick.source}</span>
                    {pick.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl leading-8 text-foreground transition-colors group-hover:text-accent md:text-2xl">
                    {pick.title[language]}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pick.whyItMatters[language]}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </div>
      ) : (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-border rounded-lg p-6 sm:p-8"
        >
          <Sparkles className="mb-4 h-5 w-5 text-accent" />
          <h2 className="font-medium text-foreground mb-3">
            {isZh ? '第一批精选还在整理' : 'The first picks are still being curated'}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isZh
              ? '这里会按时间陈列外部文章、报告和讨论，每条都附一句为什么值得看。'
              : 'This will list external articles, reports, and discussions in order, each with one line on why it matters.'}
          </p>
        </motion.section>
      )}
    </PageLayout>
  );
};

export default Picks;
