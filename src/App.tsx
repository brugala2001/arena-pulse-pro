
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Players from "./pages/Players";
import Training from "./pages/Training";
import Matches from "./pages/Matches";
import Medical from "./pages/Medical";
import Financial from "./pages/Financial";
import Youth from "./pages/Youth";
import Analytics from "./pages/Analytics";
import { Layout } from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/players" element={<Players />} />
            <Route path="/training" element={<Training />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/communication" element={<Dashboard />} />
            <Route path="/fans-media" element={<Dashboard />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/youth" element={<Youth />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Dashboard />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
