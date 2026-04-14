import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Sources from "./pages/Sources";
import Tutorials from "./pages/Tutorials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SocialMedia from "./pages/SocialMedia";
import Support from "./pages/Support";
import ExperienceDetail from "./pages/ExperienceDetail";
import Roadmap from "./pages/Roadmap";
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
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/social" element={<SocialMedia />} />
              <Route path="/support" element={<Support />} />
              <Route path="/roadmap" element={<Roadmap />} />
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
