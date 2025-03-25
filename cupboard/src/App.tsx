
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Introduction from "./pages/Introduction";
import Invoices from "./pages/Invoices";
import MeetingMinutes from "./pages/MeetingMinutes";
import InvoiceTemplate from "./pages/InvoiceTemplate";
import MeetingMinutesTemplate from "./pages/MeetingMinutesTemplate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/:slug" element={<InvoiceTemplate />} />
            <Route path="/meeting-minutes" element={<MeetingMinutes />} />
            <Route path="/meeting-minutes/:slug" element={<MeetingMinutesTemplate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
