import { InvoiceData } from "../../src/components/documents";

export const invoiceFixtures: Record<string, InvoiceData> = {
  basic: {
    invoiceNumber: "INV-001",
    issueDate: "2023-05-01",
    dueDate: "2023-05-15",
    companyDetails: {
      name: "Acme Inc.",
      address: ["123 Business St", "City, State 12345"],
      contactInfo: "info@acme.com",
    },
    clientDetails: {
      name: "Client Name",
      address: ["456 Client Avenue", "Clientville, State 67890"],
      contactInfo: "client@email.com",
    },
    items: [
      {
        id: "item1",
        description: "Website Development",
        quantity: 1,
        unitPrice: 2000,
        amount: 2000,
      },
      {
        id: "item2",
        description: "Hosting (Annual)",
        quantity: 1,
        unitPrice: 200,
        amount: 200,
      },
    ],
    subtotal: 2200,
    taxRate: 10,
    total: 2420,
    currency: "USD",
  },

  withLogo: {
    invoiceNumber: "INV-002",
    issueDate: "2023-06-01",
    dueDate: "2023-06-15",
    companyDetails: {
      name: "Design Studio Co.",
      address: ["789 Creative Blvd", "Design City, State 54321"],
      contactInfo: "hello@designstudio.com",
      logo: "https://placehold.co/300x100/4f46e5/ffffff?text=Design+Studio",
    },
    clientDetails: {
      name: "Marketing Agency Ltd.",
      address: ["321 Agency Road", "Agencyville, State 98765"],
      contactInfo: "agency@email.com",
    },
    items: [
      {
        id: "item1",
        description: "Brand Identity Design",
        quantity: 1,
        unitPrice: 3500,
        amount: 3500,
      },
      {
        id: "item2",
        description: "Logo Design",
        quantity: 1,
        unitPrice: 1500,
        amount: 1500,
      },
      {
        id: "item3",
        description: "Business Card Design",
        quantity: 2,
        unitPrice: 250,
        amount: 500,
      },
    ],
    subtotal: 5500,
    taxRate: 8.5,
    total: 5967.5,
    currency: "EUR",
  },

  withDiscount: {
    invoiceNumber: "INV-003",
    issueDate: "2023-07-01",
    dueDate: "2023-07-15",
    companyDetails: {
      name: "Tech Solutions Inc.",
      address: ["456 Tech Avenue", "Silicon Valley, CA 94025"],
      contactInfo: "sales@techsolutions.com",
    },
    clientDetails: {
      name: "Startup Innovations LLC",
      address: ["789 Venture Road", "Startupville, CA 90210"],
      contactInfo: "info@startup.com",
    },
    items: [
      {
        id: "item1",
        description: "IT Consulting (40 hours)",
        quantity: 40,
        unitPrice: 150,
        amount: 6000,
      },
      {
        id: "item2",
        description: "Server Setup",
        quantity: 1,
        unitPrice: 2000,
        amount: 2000,
      },
      {
        id: "item3",
        description: "Software Licenses",
        quantity: 5,
        unitPrice: 300,
        amount: 1500,
      },
    ],
    subtotal: 9500,
    taxRate: 9,
    discountAmount: 950,
    total: 9395,
    currency: "GBP",
  },

  withNotes: {
    invoiceNumber: "INV-004",
    issueDate: "2023-08-01",
    dueDate: "2023-08-15",
    companyDetails: {
      name: "Legal Advisors LLP",
      address: ["123 Law Street", "Legal City, NY 10001"],
      contactInfo: "contact@legaladvisors.com",
    },
    clientDetails: {
      name: "Corporate Entity Inc.",
      address: ["456 Corporate Plaza", "Business City, NY 10002"],
      contactInfo: "finance@corporate.com",
    },
    items: [
      {
        id: "item1",
        description: "Legal Consultation (10 hours)",
        quantity: 10,
        unitPrice: 350,
        amount: 3500,
      },
      {
        id: "item2",
        description: "Document Preparation",
        quantity: 1,
        unitPrice: 1200,
        amount: 1200,
      },
    ],
    subtotal: 4700,
    taxRate: 8.875,
    total: 5117.13,
    notes:
      "Thank you for your business. We value your trust and confidence in us and sincerely appreciate your loyalty.",
    termsAndConditions:
      "## Terms and Conditions\n\n1. Payment is due within 14 days of invoice date.\n2. Late payments are subject to a 1.5% monthly finance charge.\n3. This invoice is payable in USD.",
    paymentDetails:
      "**Bank Transfer:**\nBank: National Bank\nAccount Name: Legal Advisors LLP\nAccount Number: 1234567890\nRouting: 021000021",
    currency: "USD",
  },
};
