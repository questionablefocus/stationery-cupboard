import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface InvoiceData {
  id: string;
  title: string;
  template: string;
  data: any;
}

const Invoices: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetch from API - in a real app, this would be actual data
    const fetchData = async () => {
      setLoading(true);
      try {
        // Instead of actually fetching, we're using dummy data based on the slug
        // This simulates loading data from JSON files
        setTimeout(() => {
          // Simple example data for demo purposes
          if (slug === "simple") {
            setInvoiceData({
              id: "simple",
              title: "Simple Invoice",
              template: "simple",
              data: {
                invoiceNumber: "INV-001",
                date: "May 15, 2023",
                dueDate: "June 15, 2023",
                company: {
                  name: "Acme Corporation",
                  address: "123 Business St, Suite 100, City, Country, 12345",
                  email: "billing@acmecorp.com",
                  phone: "(123) 456-7890",
                },
                client: {
                  name: "Client Company Ltd.",
                  address: "456 Client Ave, City, Country, 54321",
                  email: "accounts@clientcompany.com",
                },
                items: [
                  {
                    description: "Web Design Service",
                    quantity: 1,
                    unitPrice: 1000,
                    amount: 1000,
                  },
                  {
                    description: "Hosting (Annual)",
                    quantity: 1,
                    unitPrice: 200,
                    amount: 200,
                  },
                  {
                    description: "Support Hours",
                    quantity: 5,
                    unitPrice: 85,
                    amount: 425,
                  },
                ],
                subtotal: 1625,
                taxRate: 10,
                taxAmount: 162.5,
                total: 1787.5,
                notes:
                  "Payment due within 30 days. Please make checks payable to Acme Corporation.",
              },
            });
          } else if (slug === "detailed") {
            setInvoiceData({
              id: "detailed",
              title: "Detailed Invoice",
              template: "detailed",
              data: {
                invoiceNumber: "INV-2023-002",
                date: "June 1, 2023",
                dueDate: "July 1, 2023",
                company: {
                  name: "Design Studio Inc.",
                  address:
                    "789 Creative Blvd, Design District, Metro City, 67890",
                  email: "accounting@designstudio.com",
                  phone: "(987) 654-3210",
                  website: "www.designstudio.com",
                  taxId: "TX-98765432",
                },
                client: {
                  name: "Fashion Brand Co.",
                  address:
                    "321 Stylish Street, Fashion Center, Trend City, 54321",
                  contactPerson: "Alex Johnson",
                  email: "alex@fashionbrand.com",
                  phone: "(555) 123-4567",
                  clientId: "CL-0012",
                },
                projectDetails: {
                  name: "Website Redesign Project",
                  description:
                    "Complete overhaul of e-commerce website with new branding elements",
                  projectId: "PRJ-2023-FB-001",
                },
                items: [
                  {
                    description: "UX Research & Strategy",
                    details:
                      "User interviews, competitive analysis, information architecture",
                    quantity: 40,
                    unit: "hours",
                    unitPrice: 150,
                    amount: 6000,
                  },
                  {
                    description: "UI Design",
                    details: "Visual design of website, interactive prototypes",
                    quantity: 80,
                    unit: "hours",
                    unitPrice: 175,
                    amount: 14000,
                  },
                  {
                    description: "Frontend Development",
                    details: "Responsive HTML/CSS/JS implementation",
                    quantity: 120,
                    unit: "hours",
                    unitPrice: 140,
                    amount: 16800,
                  },
                  {
                    description: "Project Management",
                    details: "Client meetings, coordination, quality assurance",
                    quantity: 30,
                    unit: "hours",
                    unitPrice: 125,
                    amount: 3750,
                  },
                  {
                    description: "Premium Stock Photography License",
                    details: "Commercial license for 25 stock images",
                    quantity: 1,
                    unit: "package",
                    unitPrice: 750,
                    amount: 750,
                  },
                ],
                subtotal: 41300,
                discounts: [
                  { description: "Loyal Customer Discount", amount: 1000 },
                  { description: "Early Payment Discount", amount: 500 },
                ],
                totalDiscount: 1500,
                subtotalAfterDiscount: 39800,
                taxes: [
                  { description: "Sales Tax (7%)", amount: 2786 },
                  { description: "City Tax (1%)", amount: 398 },
                ],
                totalTax: 3184,
                total: 42984,
                paymentOptions: [
                  {
                    method: "Bank Transfer",
                    details: "Account #: 987654321, Routing #: 123456789",
                  },
                  {
                    method: "Credit Card",
                    details: "Online payment link: designstudio.com/pay/FB0012",
                  },
                  { method: "Check", details: "Payable to Design Studio Inc." },
                ],
                terms:
                  "Payment due within 30 days. Late payments subject to 2% monthly interest.",
                notes:
                  "This invoice covers Phase 1 of the project as outlined in our contract dated May 1, 2023. Phase 2 will be invoiced separately upon completion.",
              },
            });
          } else if (slug === "freelance") {
            setInvoiceData({
              id: "freelance",
              title: "Freelance Invoice",
              template: "freelance",
              data: {
                invoiceNumber: "FRE-2023-042",
                date: "July 10, 2023",
                dueDate: "July 24, 2023",
                freelancer: {
                  name: "Sarah Wilson",
                  profession: "Graphic Designer & Illustrator",
                  address: "42 Creative Lane, Apt 7, Artsville, NY 10001",
                  email: "sarah@sarahcreates.com",
                  phone: "(212) 555-1234",
                  website: "www.sarahcreates.com",
                },
                client: {
                  name: "Green Leaf Publications",
                  contactPerson: "Michael Green",
                  address: "123 Publisher Row, Suite 405, New York, NY 10023",
                  email: "michael@greenleafpub.com",
                  phone: "(212) 555-9876",
                },
                projectName: "Children's Book Illustrations",
                items: [
                  {
                    description: "Character Design",
                    details: "Creation of 5 main character illustrations",
                    hours: 20,
                    rate: 75,
                    amount: 1500,
                  },
                  {
                    description: "Scene Illustrations",
                    details: "15 full-page color illustrations",
                    hours: 45,
                    rate: 85,
                    amount: 3825,
                  },
                  {
                    description: "Cover Artwork",
                    details: "Front and back cover illustration",
                    hours: 12,
                    rate: 95,
                    amount: 1140,
                  },
                  {
                    description: "Revisions",
                    details: "Client-requested modifications",
                    hours: 8,
                    rate: 65,
                    amount: 520,
                  },
                ],
                subtotal: 6985,
                expenses: [
                  { description: "Art Supplies", amount: 120 },
                  { description: "Reference Books", amount: 85 },
                ],
                totalExpenses: 205,
                taxRate: 8.875,
                taxAmount: 638,
                total: 7828,
                paymentMethods: [
                  "PayPal: payments@sarahcreates.com",
                  "Venmo: @Sarah-Wilson-Creates",
                  "Bank Transfer (details in email)",
                ],
                terms:
                  "Payment due within 14 days. Rush fee of 20% applies to projects with less than 5 business days turnaround time.",
                notes:
                  "Thank you for your business! All rights transfer to client upon receipt of full payment. Usage limited to scope discussed in initial project brief.",
              },
            });
          } else {
            setError(`No template found for slug: ${slug}`);
          }
          setLoading(false);
        }, 800); // Simulate network delay
      } catch (err) {
        console.error("Error fetching invoice data:", err);
        setError("Failed to load invoice template. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const renderInvoiceTemplate = () => {
    if (!invoiceData) return null;

    // In a real app, this would render the actual template
    // For this demo, we'll just display the JSON data in a styled way
    switch (invoiceData.template) {
      case "simple":
        return renderSimpleInvoice(invoiceData.data);
      case "detailed":
        return renderDetailedInvoice(invoiceData.data);
      case "freelance":
        return renderFreelanceInvoice(invoiceData.data);
      default:
        return (
          <div className="p-6 bg-muted rounded-md">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(invoiceData.data, null, 2)}
            </pre>
          </div>
        );
    }
  };

  const renderSimpleInvoice = (data: any) => {
    return (
      <div className="template-container">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold uppercase">INVOICE</h1>
        </div>

        <div className="flex justify-between mb-8">
          <div>
            <h2 className="font-semibold text-lg mb-2">{data.company.name}</h2>
            <p className="text-sm text-gray-600">{data.company.address}</p>
            <p className="text-sm text-gray-600">{data.company.email}</p>
            <p className="text-sm text-gray-600">{data.company.phone}</p>
          </div>
          <div className="text-right">
            <p className="text-sm">
              <span className="font-semibold">Invoice #:</span>{" "}
              {data.invoiceNumber}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Date:</span> {data.date}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Due Date:</span> {data.dueDate}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-2">Bill To:</h3>
          <p className="font-semibold">{data.client.name}</p>
          <p className="text-sm text-gray-600">{data.client.address}</p>
          <p className="text-sm text-gray-600">{data.client.email}</p>
        </div>

        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2">Description</th>
              <th className="text-right py-2">Quantity</th>
              <th className="text-right py-2">Unit Price</th>
              <th className="text-right py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item: any, index: number) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3">{item.description}</td>
                <td className="text-right py-3">{item.quantity}</td>
                <td className="text-right py-3">
                  ${item.unitPrice.toFixed(2)}
                </td>
                <td className="text-right py-3">${item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-1/3">
            <div className="flex justify-between py-2">
              <span className="font-semibold">Subtotal:</span>
              <span>${data.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-semibold">Tax ({data.taxRate}%):</span>
              <span>${data.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-t-2 border-gray-300">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${data.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Notes:</span> {data.notes}
          </p>
        </div>
      </div>
    );
  };

  const renderDetailedInvoice = (data: any) => {
    return (
      <div className="template-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">{data.company.name}</h1>
            <p className="text-sm text-gray-600">{data.company.address}</p>
            <p className="text-sm text-gray-600">
              {data.company.email} | {data.company.phone}
            </p>
            <p className="text-sm text-gray-600">{data.company.website}</p>
            <p className="text-sm text-gray-600">
              Tax ID: {data.company.taxId}
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold uppercase mb-2">Invoice</h2>
            <p className="text-sm">
              <span className="font-semibold">Invoice #:</span>{" "}
              {data.invoiceNumber}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Date:</span> {data.date}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Due Date:</span> {data.dueDate}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Bill To:</h3>
            <p className="font-semibold">{data.client.name}</p>
            <p className="text-sm text-gray-600">{data.client.address}</p>
            <p className="text-sm text-gray-600">
              Contact: {data.client.contactPerson}
            </p>
            <p className="text-sm text-gray-600">
              {data.client.email} | {data.client.phone}
            </p>
            <p className="text-sm text-gray-600">
              Client ID: {data.client.clientId}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Project:</h3>
            <p className="font-semibold">{data.projectDetails.name}</p>
            <p className="text-sm text-gray-600">
              {data.projectDetails.description}
            </p>
            <p className="text-sm text-gray-600">
              Project ID: {data.projectDetails.projectId}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4 border">Description</th>
                <th className="text-left py-3 px-4 border">Details</th>
                <th className="text-right py-3 px-4 border">Qty</th>
                <th className="text-left py-3 px-4 border">Unit</th>
                <th className="text-right py-3 px-4 border">Rate</th>
                <th className="text-right py-3 px-4 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item: any, index: number) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-4 border">{item.description}</td>
                  <td className="py-4 px-4 border text-sm text-gray-600">
                    {item.details}
                  </td>
                  <td className="py-4 px-4 border text-right">
                    {item.quantity}
                  </td>
                  <td className="py-4 px-4 border">{item.unit}</td>
                  <td className="py-4 px-4 border text-right">
                    ${item.unitPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 border text-right font-medium">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-8">
          <div className="w-1/2">
            <div className="flex justify-between py-2">
              <span>Subtotal:</span>
              <span>${data.subtotal.toFixed(2)}</span>
            </div>

            {data.discounts.map((discount: any, index: number) => (
              <div
                key={index}
                className="flex justify-between py-1 text-gray-600"
              >
                <span>{discount.description}:</span>
                <span>-${discount.amount.toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between py-2 border-t border-gray-200">
              <span>Subtotal after discounts:</span>
              <span>${data.subtotalAfterDiscount.toFixed(2)}</span>
            </div>

            {data.taxes.map((tax: any, index: number) => (
              <div key={index} className="flex justify-between py-1">
                <span>{tax.description}:</span>
                <span>${tax.amount.toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between py-3 border-t border-b border-gray-300 text-lg font-bold">
              <span>Total:</span>
              <span>${data.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Payment Options:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              {data.paymentOptions.map((option: any, index: number) => (
                <li key={index} className="mb-1">
                  <span className="font-semibold">{option.method}:</span>{" "}
                  {option.details}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Terms & Conditions:</h3>
            <p className="text-sm text-gray-600">{data.terms}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border rounded-md text-sm">
          <h3 className="font-semibold mb-1">Notes:</h3>
          <p className="text-gray-600">{data.notes}</p>
        </div>
      </div>
    );
  };

  const renderFreelanceInvoice = (data: any) => {
    return (
      <div className="template-container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-1">{data.freelancer.name}</h1>
          <p className="text-md text-gray-600">{data.freelancer.profession}</p>
          <div className="mt-2 text-sm text-gray-500">
            <p>{data.freelancer.address}</p>
            <p>
              {data.freelancer.email} | {data.freelancer.phone}
            </p>
            <p>{data.freelancer.website}</p>
          </div>
        </div>

        <div className="flex justify-between items-end mb-8 pb-4 border-b border-gray-200">
          <div>
            <h2 className="font-semibold mb-2">Bill To:</h2>
            <p className="font-medium">{data.client.name}</p>
            <p className="text-sm text-gray-600">
              Attn: {data.client.contactPerson}
            </p>
            <p className="text-sm text-gray-600">{data.client.address}</p>
            <p className="text-sm text-gray-600">{data.client.email}</p>
            <p className="text-sm text-gray-600">{data.client.phone}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold uppercase mb-2">Invoice</h2>
            <p className="text-sm">
              <span className="font-semibold">Invoice #:</span>{" "}
              {data.invoiceNumber}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Date:</span> {data.date}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Due:</span> {data.dueDate}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">
            Project: {data.projectName}
          </h3>

          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2">Service</th>
                <th className="text-left py-2">Description</th>
                <th className="text-right py-2">Hours</th>
                <th className="text-right py-2">Rate</th>
                <th className="text-right py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item: any, index: number) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 font-medium">{item.description}</td>
                  <td className="py-3 text-sm text-gray-600">{item.details}</td>
                  <td className="text-right py-3">{item.hours}</td>
                  <td className="text-right py-3">${item.rate}/hr</td>
                  <td className="text-right py-3 font-medium">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Expenses:</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2">Description</th>
                <th className="text-right py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.expenses.map((expense: any, index: number) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-2">{expense.description}</td>
                  <td className="text-right py-2">
                    ${expense.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2">
              <span>Subtotal:</span>
              <span>${data.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Expenses:</span>
              <span>${data.totalExpenses.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Tax ({data.taxRate}%):</span>
              <span>${data.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400 text-lg font-bold">
              <span>Total Due:</span>
              <span>${data.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Payment Methods:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              {data.paymentMethods.map((method: string, index: number) => (
                <li key={index} className="mb-1">
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Terms:</h3>
            <p className="text-sm text-gray-600">{data.terms}</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>{data.notes}</p>
        </div>
      </div>
    );
  };

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
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold">{invoiceData?.title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {renderInvoiceTemplate()}
    </div>
  );
};

export default Invoices;
