import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DURATION, fadeUp } from '@/lib/motion';

export type HeadingLevel = 'page' | 'detail';

/**
 * The two page-title sizes actually in use across the site. Before this
 * existed, page h1s were hand-typed with three drifting variants (some
 * font-serif/font-light, some font-display/font-medium, different breakpoint
 * steps) with no documented reason for the split.
 */
const levelClass: Record<HeadingLevel, string> = {
  page: 'font-serif text-4xl md:text-5xl font-light',
  detail: 'font-serif text-3xl md:text-4xl font-light',
};

interface HeadingProps {
  level?: HeadingLevel;
  className?: string;
  children: ReactNode;
  /** Set false when a parent element already owns the entrance animation. */
  animate?: boolean;
  /** Entrance delay in seconds, for staggering after a preceding eyebrow/label. */
  delay?: number;
}

const Heading = ({ level = 'page', className, children, animate = true, delay }: HeadingProps) => {
  if (!animate) {
    return <h1 className={cn(levelClass[level], className)}>{children}</h1>;
  }

  return (
    <motion.h1
      {...fadeUp}
      transition={{ duration: DURATION.hero, delay }}
      className={cn(levelClass[level], className)}
    >
      {children}
    </motion.h1>
  );
};

export default Heading;
