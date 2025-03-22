
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Feature pages
import Features from "./pages/features/Features";

// Process pages
import TenantsProcess from "./pages/process/TenantsProcess";
import LandlordsProcess from "./pages/process/LandlordsProcess";

// Pricing page
import LandlordPricing from "./pages/pricing/LandlordPricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Features route (now consolidated) */}
          <Route path="/features" element={<Features />} />
          
          {/* Process routes */}
          <Route path="/process/tenants" element={<TenantsProcess />} />
          <Route path="/process/landlords" element={<LandlordsProcess />} />
          
          {/* Pricing route */}
          <Route path="/pricing/landlords" element={<LandlordPricing />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
