import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const { t } = useLanguage();

  return (
    <section id="trust" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-14"
        >
          {t.trust.testimonialsTitle}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {t.trust.testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`p-6 md:p-8 rounded-2xl border border-border bg-card flex flex-col ${
                item.quote.trim() ? 'min-h-[17rem]' : 'min-h-[10rem]'
              }`}
            >
              {item.quote.trim() ? (
                <>
                  <span className="text-4xl font-display text-accent/40 leading-none block mb-4">"</span>
                  <p className="text-base font-display italic text-foreground/90 leading-relaxed mb-6">
                    {item.quote}
                  </p>
                </>
              ) : null}
              <div className="mt-auto">
                <span className="text-sm font-medium text-foreground block">{item.name}</span>
                {item.context ? (
                  <span className="text-xs text-muted-foreground">{item.context}</span>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-6">
            {t.trust.partnersTitle}
          </h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {t.trust.partners.map((partner, i) => (
              <span key={i} className="text-base font-light text-muted-foreground/60">
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
