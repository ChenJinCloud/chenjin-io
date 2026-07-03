import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { getRoadmapDisplayItems, roadmapCategoryLabels, roadmapStatusConfig } from '@/features/roadmap/roadmapData';
import type { RoadmapCategory, RoadmapDisplayItem, RoadmapFilter, RoadmapStatus } from '@/features/roadmap/roadmapTypes';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ChevronUp, MessageSquare, Plus } from 'lucide-react';

const Roadmap = () => {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  const [items, setItems] = useState<RoadmapDisplayItem[]>(() => getRoadmapDisplayItems(language));
  const [filter, setFilter] = useState<RoadmapFilter>('all');
  const [showForm, setShowForm] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Mock: no user logged in
  const isLoggedIn = false;

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState<RoadmapCategory>('request');

  useEffect(() => {
    setItems(getRoadmapDisplayItems(language));
  }, [language]);

  const handleVote = (id: string) => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setLoginOpen(true);
      return;
    }
    if (!newTitle.trim()) return;
    const status: RoadmapStatus = 'open';
    const newItem: RoadmapDisplayItem = {
      id: `request-${Date.now()}`,
      title: newTitle,
      description: newDesc,
      category: newCategory,
      categoryLabel: roadmapCategoryLabels[newCategory][language],
      status,
      statusLabel: roadmapStatusConfig[status][language],
      statusColor: roadmapStatusConfig[status].color,
      votes: 1,
      voted: true,
      tags: ['reader request'],
      route: '/roadmap',
    };
    setItems((prev) => [newItem, ...prev]);
    setNewTitle('');
    setNewDesc('');
    setShowForm(false);
  };

  const filters: { key: RoadmapFilter; label: string }[] = [
    { key: 'all', label: t.roadmap.statusAll },
    { key: 'open', label: roadmapStatusConfig.open[language] },
    { key: 'considering', label: roadmapStatusConfig.considering[language] },
    { key: 'planned', label: roadmapStatusConfig.planned[language] },
    { key: 'building', label: roadmapStatusConfig.building[language] },
    { key: 'shipped', label: roadmapStatusConfig.shipped[language] },
  ];

  const categoryOptions = (Object.keys(roadmapCategoryLabels) as RoadmapCategory[]).map((category) => ({
    key: category,
    label: roadmapCategoryLabels[category][language],
  }));

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
                      {categoryOptions.map((cat) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setNewCategory(cat.key)}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            newCategory === cat.key
                              ? 'bg-accent text-white'
                              : 'bg-muted text-muted-foreground hover:bg-accent/10'
                          }`}
                        >
                          {cat.label}
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
                      className={`text-[11px] font-normal ${item.statusColor}`}
                    >
                      {item.statusLabel}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] font-normal">
                      {item.categoryLabel}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                  {item.route && item.route !== '/roadmap' && (
                    <Link
                      to={item.route}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      {isZh ? '查看入口' : 'Open'}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
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
