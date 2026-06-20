import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-widest uppercase text-accent mb-12 block"
        >
          {t.contact.label}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-6"
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {t.contact.description}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${t.contact.email}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-display font-medium text-accent hover:underline underline-offset-4 block mb-10"
        >
          {t.contact.email}
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          {t.contact.socials.map((social, i) => (
            social.link && social.link !== '#' ? (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-muted-foreground hover:text-accent hover:scale-110 transition-all"
              >
                {social.name}
              </a>
            ) : (
              <span
                key={i}
                className="text-sm font-light text-muted-foreground/70"
              >
                {social.name}
              </span>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
