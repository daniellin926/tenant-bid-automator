
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
import RequestSystem from "./pages/features/RequestSystem";
import Bidding from "./pages/features/Bidding";
import Scheduling from "./pages/features/Scheduling";
import Communication from "./pages/features/Communication";

// Process pages
import TenantsProcess from "./pages/process/TenantsProcess";
import LandlordsProcess from "./pages/process/LandlordsProcess";
import ContractorsProcess from "./pages/process/ContractorsProcess";

// Pricing pages
import LandlordPricing from "./pages/pricing/LandlordPricing";
import ContractorPricing from "./pages/pricing/ContractorPricing";
import EnterprisePricing from "./pages/pricing/EnterprisePricing";
import PricingComparison from "./pages/pricing/PricingComparison";

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
          
          {/* Features routes */}
          <Route path="/features" element={<Features />} />
          <Route path="/features/request-system" element={<RequestSystem />} />
          <Route path="/features/bidding" element={<Bidding />} />
          <Route path="/features/scheduling" element={<Scheduling />} />
          <Route path="/features/communication" element={<Communication />} />
          
          {/* Process routes */}
          <Route path="/process/tenants" element={<TenantsProcess />} />
          <Route path="/process/landlords" element={<LandlordsProcess />} />
          <Route path="/process/contractors" element={<ContractorsProcess />} />
          
          {/* Pricing routes */}
          <Route path="/pricing/landlords" element={<LandlordPricing />} />
          <Route path="/pricing/contractors" element={<ContractorPricing />} />
          <Route path="/pricing/enterprise" element={<EnterprisePricing />} />
          <Route path="/pricing/comparison" element={<PricingComparison />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
