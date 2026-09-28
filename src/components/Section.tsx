import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type SectionSpacing = 'compact' | 'standard' | 'roomy';

const spacingClass: Record<SectionSpacing, string> = {
  compact: 'py-16',
  standard: 'py-24',
  roomy: 'py-32',
};

interface SectionProps {
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
  id?: string;
}

/**
 * Shared vertical rhythm for stacked full-width sections (e.g. homepage blocks,
 * long-form report pages). Use instead of hand-picking one of the six py- values
 * that previously coexisted across the codebase.
 */
const Section = ({ spacing = 'standard', className, children, id }: SectionProps) => (
  <section id={id} className={cn(spacingClass[spacing], className)}>
    {children}
  </section>
);

export default Section;
