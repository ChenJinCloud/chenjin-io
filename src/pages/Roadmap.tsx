import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ChevronUp, Plus, MessageSquare } from 'lucide-react';

type Status = 'open' | 'planned' | 'in_progress' | 'completed';
type FilterStatus = 'all' | Status;

interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  category: string;
  status: Status;
  votes: number;
  voted: boolean;
}

const initialItems: (lang: 'en' | 'zh') => RoadmapItem[] = (lang) => [
  {
    id: 1,
    title: lang === 'en' ? 'Game Hub — Puzzle Game Aggregator' : 'Game Hub — 益智游戏聚合器',
    description: lang === 'en'
      ? 'A collection of classic puzzle games with login, leaderboards, and social sharing. Keep it on the roadmap until the product direction is clearer.'
      : '经典益智游戏合集，计划支持登录、排行榜和社交分享。先放在路线图中，等产品方向更清晰后再公开展示。',
    category: lang === 'en' ? 'Project' : '项目',
    status: 'in_progress',
    votes: 31,
    voted: false,
  },
  {
    id: 2,
    title: lang === 'en' ? 'Vibe Coding Learning Log' : 'Vibe Coding 学习日志',
    description: lang === 'en'
      ? 'A build-in-public tutorial series documenting the path from product operator to independent developer with AI coding tools.'
      : '一个公开构建的教程系列，记录我如何用 AI 编程工具从产品运营走向独立开发。',
    category: lang === 'en' ? 'Content' : '内容',
    status: 'in_progress',
    votes: 27,
    voted: false,
  },
  {
    id: 3,
    title: lang === 'en' ? 'Developer Growth Channel Map' : '开发者增长渠道地图',
    description: lang === 'en'
      ? 'An interactive map of channels that work for developer-facing products, combining research, real data, and personal notes.'
      : '面向开发者产品的增长渠道地图，整合调研、真实数据和个人笔记。',
    category: lang === 'en' ? 'Resource' : '资源',
    status: 'planned',
    votes: 22,
    voted: false,
  },
  {
    id: 4,
    title: lang === 'en' ? 'AI Chat Backend Integration' : 'AI 对话后端接入',
    description: lang === 'en'
      ? 'Connect the Hero and floating chat to a real AI backend for live conversations.'
      : '将 Hero 和悬浮对话连接到真实 AI 后端，实现实时对话。',
    category: lang === 'en' ? 'Feature' : '功能',
    status: 'planned',
    votes: 24,
    voted: false,
  },
  {
    id: 5,
    title: lang === 'en' ? 'Dark Mode Color Refinement' : '暗色模式配色优化',
    description: lang === 'en'
      ? 'Improve contrast and readability in dark mode across all pages.'
      : '改善所有页面在暗色模式下的对比度和可读性。',
    category: lang === 'en' ? 'Improvement' : '改进',
    status: 'in_progress',
    votes: 18,
    voted: false,
  },
  {
    id: 6,
    title: lang === 'en' ? 'RSS Feed for Blog' : '博客 RSS 订阅',
    description: lang === 'en'
      ? 'Add RSS feed support so readers can subscribe via their preferred reader.'
      : '添加 RSS 订阅支持，方便读者使用喜欢的阅读器订阅。',
    category: lang === 'en' ? 'Feature' : '功能',
    status: 'open',
    votes: 15,
    voted: false,
  },
  {
    id: 7,
    title: lang === 'en' ? 'Newsletter Archive Page' : '邮件通讯归档页',
    description: lang === 'en'
      ? 'A page to browse past newsletter issues with search functionality.'
      : '一个可以浏览和搜索过往邮件通讯的页面。',
    category: lang === 'en' ? 'Content' : '内容',
    status: 'completed',
    votes: 12,
    voted: false,
  },
];

const statusConfig: Record<Status, { color: string; labelEn: string; labelZh: string }> = {
  open: { color: 'bg-muted text-muted-foreground', labelEn: 'Open', labelZh: '待定' },
  planned: { color: 'bg-accent/15 text-accent', labelEn: 'Planned', labelZh: '已规划' },
  in_progress: { color: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400', labelEn: 'In Progress', labelZh: '进行中' },
  completed: { color: 'bg-green-500/15 text-green-700 dark:text-green-400', labelEn: 'Completed', labelZh: '已完成' },
};

const Roadmap = () => {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  const [items, setItems] = useState<RoadmapItem[]>(initialItems(language));
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [showForm, setShowForm] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Mock: no user logged in
  const isLoggedIn = false;

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState(t.roadmap.categories[0]);

  const handleVote = (id: number) => {
    if (!isLoggedIn) {
      setLoginOpen(true);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, votes: item.voted ? item.votes - 1 : item.votes + 1, voted: !item.voted }
          : item
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setLoginOpen(true);
      return;
    }
    if (!newTitle.trim()) return;
    const newItem: RoadmapItem = {
      id: Date.now(),
      title: newTitle,
      description: newDesc,
      category: newCategory,
      status: 'open',
      votes: 1,
      voted: true,
    };
    setItems((prev) => [newItem, ...prev]);
    setNewTitle('');
    setNewDesc('');
    setShowForm(false);
  };

  const filters: { key: FilterStatus; label: string }[] = [
    { key: 'all', label: t.roadmap.statusAll },
    { key: 'open', label: t.roadmap.statusOpen },
    { key: 'planned', label: t.roadmap.statusPlanned },
    { key: 'in_progress', label: t.roadmap.statusInProgress },
    { key: 'completed', label: t.roadmap.statusCompleted },
  ];

  const filtered = items
    .filter((item) => filter === 'all' || item.status === filter)
    .sort((a, b) => b.votes - a.votes);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-widest uppercase text-accent mb-6 block"
          >
            {t.roadmap.label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-4"
          >
            {t.roadmap.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground font-light mb-10"
          >
            {t.roadmap.subtitle}
          </motion.p>

          {/* Actions row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
          >
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                    filter === f.key
                      ? 'bg-accent text-white'
                      : 'bg-muted text-muted-foreground hover:bg-accent/10'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Submit button */}
            <Button
              onClick={() => {
                if (!isLoggedIn) {
                  setLoginOpen(true);
                } else {
                  setShowForm(!showForm);
                }
              }}
              size="sm"
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              {t.roadmap.submitTitle}
            </Button>
          </motion.div>

          {/* Submit form */}
          <AnimatePresence>
            {showForm && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="overflow-hidden mb-8"
              >
                <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
                  <Input
                    placeholder={t.roadmap.titlePlaceholder}
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder={t.roadmap.descriptionPlaceholder}
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    rows={3}
                  />
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{t.roadmap.categoryLabel}</span>
                    <div className="flex gap-2">
                      {t.roadmap.categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setNewCategory(cat)}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            newCategory === cat
                              ? 'bg-accent text-white'
                              : 'bg-muted text-muted-foreground hover:bg-accent/10'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="sm">
                      {t.roadmap.submitButton}
                    </Button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Items list */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-muted-foreground"
              >
                <MessageSquare className="w-10 h-10 mx-auto mb-4 opacity-40" />
                <p>{t.roadmap.noItems}</p>
              </motion.div>
            )}

            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                {/* Vote button */}
                <button
                  onClick={() => handleVote(item.id)}
                  className={`flex flex-col items-center justify-center min-w-[56px] py-2 rounded-xl border transition-colors duration-200 ${
                    item.voted
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-accent'
                  }`}
                >
                  <ChevronUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.votes}</span>
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-display font-medium text-foreground">
                      {item.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={`text-[11px] font-normal ${statusConfig[item.status].color}`}
                    >
                      {isZh ? statusConfig[item.status].labelZh : statusConfig[item.status].labelEn}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] font-normal">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Roadmap;
