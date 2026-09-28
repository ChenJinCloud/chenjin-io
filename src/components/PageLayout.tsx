import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Container, { ContainerSize } from '@/components/Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export type PageSpacing = 'standard' | 'compact';

const spacingClass: Record<PageSpacing, string> = {
  standard: 'pt-32 pb-20',
  compact: 'pt-28 pb-24',
};

interface BackLink {
  to: string;
  label: { zh: string; en: string };
}

interface PageLayoutProps {
  children: ReactNode;
  /** Container width tier. Ignored when `bare` is true. */
  containerSize?: ContainerSize;
  /** Vertical rhythm of <main>. Ignored when `bare` is true. */
  spacing?: PageSpacing;
  /** Optional "back to X" link rendered above the page content. */
  back?: BackLink;
  /** Skip the container/padding wrapper — for pages that build their own
   * full-width section layout (e.g. the homepage or long-form report pages).
   * Navigation, Footer and the min-h-screen shell are still applied. */
  bare?: boolean;
  mainClassName?: string;
}

/**
 * Single source of truth for the page shell (min-h-screen + Navigation + Footer)
 * that used to be hand-copied into every page. Centralizing it here means the
 * pt-32 top offset that's coupled to the fixed nav height now lives in one place.
 */
const PageLayout = ({
  children,
  containerSize = 'standard',
  spacing = 'standard',
  back,
  bare = false,
  mainClassName,
}: PageLayoutProps) => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {bare ? (
        <main className={mainClassName}>{children}</main>
      ) : (
        <main className={cn(spacingClass[spacing], 'px-6 md:px-12', mainClassName)}>
          <Container size={containerSize}>
            {back && (
              <Link
                to={back.to}
                className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {back.label[language]}
              </Link>
            )}
            {children}
          </Container>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default PageLayout;
