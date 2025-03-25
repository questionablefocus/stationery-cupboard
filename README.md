# Stationery

A collection of themeable business document templates for React applications.

## Features

- 📄 Ready-to-use document templates for common business use cases
- 🎨 Fully customizable theming
- 📱 Responsive design with Tailwind CSS
- 📊 Table components for listings
- 🖊️ Markdown support for rich text content

## Installation

```bash
npm install stationery
```

## Usage

### 1. Invoice Document

```jsx
import { InvoiceDocument } from "stationery";

const MyInvoice = () => {
  const invoiceData = {
    invoiceNumber: "INV-001",
    issueDate: "2023-05-01",
    dueDate: "2023-05-15",
    companyDetails: {
      name: "Your Company Name",
      address: ["123 Business St", "City, State 12345"],
      contactInfo: "contact@company.com",
      logo: "https://yourcompany.com/logo.png", // Optional
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
        description: "Custom website development services",
        quantity: 1,
        unitPrice: 2000,
        amount: 2000,
      },
      {
        id: "item2",
        name: "Hosting",
        description: "Annual hosting services",
        quantity: 1,
        unitPrice: 200,
        amount: 200,
      },
    ],
    subtotal: 2200,
    taxRate: 10,
    total: 2420,
    notes: "Thank you for your business!",
    paymentDetails: {
      bankName: "Example Bank",
      accountName: "Your Company Name",
      accountNumber: "123456789",
      routingNumber: "987654321",
      reference: "INV-001",
    },
    currency: "USD",
  };

  // Optional custom theme
  const customTheme = {
    colors: {
      primary: "#4f46e5", // Custom primary color
    },
  };

  return <InvoiceDocument data={invoiceData} theme={customTheme} />;
};
```

### 2. Meeting Minutes Document

```jsx
import { MeetingMinutesDocument } from "stationery";

const MyMeetingMinutes = () => {
  const meetingData = {
    title: "Weekly Team Meeting",
    date: "2023-05-10",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    location: "Conference Room A",
    organizationName: "Your Company",
    participants: [
      {
        name: "Jane Smith",
        role: "Project Manager",
        email: "jane@company.com",
      },
      { name: "John Doe", role: "Developer", email: "john@company.com" },
    ],
    absentees: [{ name: "Alice Johnson", role: "Designer" }],
    agendaItems: [
      {
        title: "Project Status Update",
        description: "Review current project milestones",
      },
      { title: "Budget Review", description: "Quarterly budget analysis" },
    ],
    minutesMarkdown:
      "## Project Status\n\nThe team discussed current project status and timeline. All milestones are on track.\n\n## Budget Review\n\nBudget is currently within planned parameters.",
    actionItems: [
      {
        id: "action1",
        task: "Update project documentation",
        assignee: "John Doe",
        dueDate: "2023-05-15",
        status: "pending",
      },
      {
        id: "action2",
        task: "Schedule client meeting",
        assignee: "Jane Smith",
        dueDate: "2023-05-12",
        status: "completed",
      },
    ],
    followUpMeeting: {
      date: "2023-05-17",
      time: "10:00 AM",
      location: "Conference Room A",
    },
  };

  return <MeetingMinutesDocument data={meetingData} />;
};
```

### 3. Invoice Table

```jsx
import { InvoiceTable } from "stationery";

const InvoiceList = () => {
  const invoices = [
    // Array of invoice data objects
  ];

  const handleRowClick = (invoice) => {
    // Handle row click, e.g., navigate to invoice detail page
    console.log("Clicked invoice:", invoice.invoiceNumber);
  };

  return <InvoiceTable invoices={invoices} onRowClick={handleRowClick} />;
};
```

### 4. Meeting Minutes Table

```jsx
import { MeetingMinutesTable } from "stationery";

const MeetingsList = () => {
  const meetings = [
    // Array of meeting data objects
  ];

  const handleRowClick = (meeting) => {
    // Handle row click
    console.log("Clicked meeting:", meeting.title);
  };

  return (
    <MeetingMinutesTable meetings={meetings} onRowClick={handleRowClick} />
  );
};
```

## Theming

Stationery comes with a default theme, but you can customize it to match your brand.

```jsx
import { BaseDocument, defaultTheme } from "stationery";

// Create a custom theme by extending the default theme
const customTheme = {
  fontFamily: {
    heading: "Montserrat, sans-serif", // Custom font
    body: "Roboto, sans-serif",
  },
  colors: {
    primary: "#0f766e",
    secondary: "#334155",
    accent: "#059669",
  },
};

// Use the custom theme in any Stationery component
const MyComponent = () => {
  return <BaseDocument theme={customTheme}>Content</BaseDocument>;
};
```

## License

MIT
