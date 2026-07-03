import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { readingNotes } from '@/content/bookshelf/notes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';

const emptyShelfSlots = [0, 1, 2, 3];

const Bookshelf = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/writing" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回写作' : 'Back to Writing'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            {isZh ? '书架' : 'Bookshelf'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12"
          >
            {isZh ? '读过的书、留下的划线和后来形成的判断' : 'Books read, highlights kept, and judgments formed later'}
          </motion.p>

          {readingNotes.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {readingNotes.map((note, i) => (
                <motion.article
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="group min-w-0"
                >
                  <div className="mb-5 aspect-[2/3] overflow-hidden rounded-md border border-border bg-muted shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                    {note.coverImage ? (
                      <img
                        src={note.coverImage}
                        alt={note.coverAlt ?? note.bookTitle}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col justify-between bg-card p-4">
                        <BookOpen className="h-5 w-5 text-accent" />
                        <div>
                          <div className="mb-3 h-px w-10 bg-border" />
                          <p className="font-serif text-lg font-light leading-snug text-foreground">
                            {note.bookTitle}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{note.kind}</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {note.date}
                      </span>
                    </div>
                    <h2 className="mb-1 font-medium leading-snug text-foreground">{note.title}</h2>
                    <p className="mb-3 text-xs text-muted-foreground">{note.bookTitle}{note.author ? ` / ${note.author}` : ''}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border border-border rounded-lg p-6 sm:p-8"
            >
              <div className="mb-8 grid grid-cols-4 items-end gap-3 border-b border-border pb-5 sm:gap-4">
                {emptyShelfSlots.map((slot) => (
                  <div
                    key={slot}
                    className="aspect-[2/3] rounded-md border border-border bg-card p-3 shadow-sm sm:p-4"
                  >
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                ))}
              </div>

              <h2 className="font-medium text-foreground mb-3">
                {isZh ? '第一批书籍封面和阅读笔记待整理' : 'The first book covers and notes are being curated'}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isZh ? '这里会按书籍封面陈列阅读笔记、划线摘录和读后形成的判断。' : 'This area will arrange reading notes, highlights, and post-reading judgments by book cover.'}
              </p>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bookshelf;
