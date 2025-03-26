import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Invoice } from "stationery-cupboard";

interface InvoiceData {
  id: string;
  title: string;
  template: string;
  data: any;
}

const InvoicesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchInvoiceData = async (slug: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/examples/invoices/${slug}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setInvoiceData(data);
    } catch (error) {
      console.error(`Error fetching ${slug} invoice data:`, error);
      setError("Failed to load invoice template. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoiceData(slug);
  }, [slug]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-40" />
        </div>
        <Skeleton className="h-[60vh] w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-destructive/10 text-destructive rounded-md">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between no-print">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold">{invoiceData?.title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      <div className="template-container">
        <Invoice data={invoiceData.data} />
      </div>
    </div>
  );
};

export default InvoicesPage;
