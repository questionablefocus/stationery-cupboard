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
        name: "Website Development",
        description: "Professional web development services",
        quantity: 1,
        unitPrice: 2000,
        amount: 2000,
      },
      {
        id: "item2",
        name: "Hosting (Annual)",
        description: "Annual web hosting package",
        quantity: 1,
        unitPrice: 200,
        amount: 200,
      },
    ],
    subtotal: 2200,
    taxRate: 10,
    total: 2420,
    paymentDetails: {
      bankName: "Chase Bank",
      accountName: "Acme Inc.",
      accountNumber: "9876543210",
      routingNumber: "072000326",
      reference: "INV-001",
    },
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
        name: "Brand Identity Design",
        description: "Complete brand identity package",
        quantity: 1,
        unitPrice: 3500,
        amount: 3500,
      },
      {
        id: "item2",
        name: "Logo Design",
        description: "Professional logo design with revisions",
        quantity: 1,
        unitPrice: 1500,
        amount: 1500,
      },
      {
        id: "item3",
        name: "Business Card Design",
        description: "Custom business card templates",
        quantity: 2,
        unitPrice: 250,
        amount: 500,
      },
    ],
    subtotal: 5500,
    taxRate: 8.5,
    total: 5967.5,
    paymentDetails: {
      bankName: "BNP Paribas",
      accountName: "Design Studio Co.",
      iban: "FR7630006000011234567890189",
      bic: "BNPAFRPP",
      reference: "INV-002",
    },
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
        name: "IT Consulting",
        description: "IT Consulting (40 hours)",
        quantity: 40,
        unitPrice: 150,
        amount: 6000,
      },
      {
        id: "item2",
        name: "Server Setup",
        description: "Complete server configuration and deployment",
        quantity: 1,
        unitPrice: 2000,
        amount: 2000,
      },
      {
        id: "item3",
        name: "Software Licenses",
        description: "Annual software licenses",
        quantity: 5,
        unitPrice: 300,
        amount: 1500,
      },
    ],
    subtotal: 9500,
    taxRate: 9,
    discountAmount: 950,
    total: 9395,
    paymentDetails: {
      bankName: "HSBC UK",
      accountName: "Tech Solutions Inc.",
      accountNumber: "31926819",
      sortCode: "40-35-16",
      reference: "INV-003",
    },
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
        name: "Legal Consultation",
        description: "Legal Consultation (10 hours)",
        quantity: 10,
        unitPrice: 350,
        amount: 3500,
      },
      {
        id: "item2",
        name: "Document Preparation",
        description: "Legal document preparation and review",
        quantity: 1,
        unitPrice: 1200,
        amount: 1200,
      },
    ],
    total: 4700,
    notes:
      "Thank you for your business. We value your trust and confidence in us and sincerely appreciate your loyalty.",
    paymentDetails: {
      bankName: "National Bank",
      accountName: "Legal Advisors LLP",
      accountNumber: "1234567890",
      routingNumber: "021000021",
      reference: "INV-004",
    },
    currency: "USD",
  },

  ukPayment: {
    invoiceNumber: "INV-005",
    issueDate: "2023-09-01",
    dueDate: "2023-09-15",
    companyDetails: {
      name: "British Services Ltd.",
      address: ["10 London Road", "London, UK EC1A 1BB"],
      contactInfo: "accounts@britishservices.co.uk",
    },
    clientDetails: {
      name: "UK Client Co.",
      address: ["25 Manchester Street", "Manchester, UK M1 1AB"],
      contactInfo: "payments@ukclient.co.uk",
    },
    items: [
      {
        id: "item1",
        name: "Consulting Services",
        description: "Business strategy consulting",
        quantity: 20,
        unitPrice: 100,
        amount: 2000,
      },
    ],
    subtotal: 2000,
    taxRate: 20,
    total: 2400,
    paymentDetails: {
      bankName: "Barclays Bank",
      accountName: "British Services Ltd",
      accountNumber: "12345678",
      sortCode: "20-00-00",
      iban: "GB29NWBK60161331926819",
      reference: "INV-005",
    },
    currency: "GBP",
  },

  internationalPayment: {
    invoiceNumber: "INV-006",
    issueDate: "2023-10-01",
    dueDate: "2023-10-15",
    companyDetails: {
      name: "Global Solutions GmbH",
      address: ["Hauptstrasse 1", "10115 Berlin, Germany"],
      contactInfo: "finance@globalsolutions.de",
    },
    clientDetails: {
      name: "International Client Inc.",
      address: ["123 Global Street", "Tokyo, Japan 100-0001"],
      contactInfo: "accounting@intlclient.com",
    },
    items: [
      {
        id: "item1",
        name: "International Consulting",
        description: "Global market entry strategy",
        quantity: 1,
        unitPrice: 5000,
        amount: 5000,
      },
    ],
    subtotal: 5000,
    taxRate: 19,
    total: 5950,
    paymentDetails: {
      bankName: "Deutsche Bank",
      accountName: "Global Solutions GmbH",
      iban: "DE89370400440532013000",
      swiftCode: "DEUTDEFF",
      bic: "DEUTDEFF",
      reference: "INV-006",
      additionalInfo: "Please cover all transfer fees",
    },
    currency: "EUR",
  },
};
