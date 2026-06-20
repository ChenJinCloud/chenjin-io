import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Playbooks from "./pages/Playbooks";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Bookshelf from "./pages/Bookshelf";
import Stack from "./pages/Stack";
import WorkWithMe from "./pages/WorkWithMe";
import Experience from "./pages/Experience";
import ExperienceDetail from "./pages/ExperienceDetail";
import Roadmap from "./pages/Roadmap";
import JikeBestIn2025 from "./pages/projects/JikeBestIn2025";
import NotFound from "./pages/NotFound";
import FloatingChat from "./components/FloatingChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/playbooks" element={<Playbooks />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/bookshelf" element={<Bookshelf />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/work-with-me" element={<WorkWithMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/projects/jike-best-in-2025" element={<JikeBestIn2025 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingChat />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
