import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import AlphaHome from './pages/AlphaHome';

const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Bookshelf = lazy(() => import('./pages/Bookshelf'));
const Projects = lazy(() => import('./pages/Projects'));
const JikeBestIn2025 = lazy(() => import('./pages/projects/JikeBestIn2025'));
const Playbooks = lazy(() => import('./pages/Playbooks'));
const Stack = lazy(() => import('./pages/Stack'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const LegacyBlogRedirect = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={id ? `/writing/${id}` : '/writing'} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<AlphaHome />} />
                <Route path="/writing" element={<Blog />} />
                <Route path="/writing/bookshelf" element={<Bookshelf />} />
                <Route path="/writing/:id" element={<BlogPost />} />
                <Route path="/blog" element={<Navigate to="/writing" replace />} />
                <Route path="/blog/bookshelf" element={<Navigate to="/writing/bookshelf" replace />} />
                <Route path="/blog/:id" element={<LegacyBlogRedirect />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/jike-best-in-2025" element={<JikeBestIn2025 />} />
                <Route path="/playbooks" element={<Playbooks />} />
                <Route path="/workbench" element={<Stack />} />
                <Route path="/stack" element={<Navigate to="/workbench" replace />} />
                <Route path="/roadmap" element={<Navigate to="/" replace />} />
                <Route path="/work-with-me" element={<Navigate to="/#contact" replace />} />
                <Route path="/experience/*" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
