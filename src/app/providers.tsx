'use client';

import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import FloatingChat from '@/components/FloatingChat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useEffect, type ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initAnalytics, trackPageview } from '@/lib/analytics';

const queryClient = new QueryClient();

/** Boots PostHog once and fires a pageview on every client-side route change,
 * since the App Router doesn't hard-navigate between pages by default. */
const AnalyticsRouteTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    trackPageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Suspense fallback={null}>
              <AnalyticsRouteTracker />
            </Suspense>
            {children}
            <FloatingChat />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
