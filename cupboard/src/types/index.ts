
// Invoice types
export interface InvoiceCompany {
  name: string;
  address: string;
  email: string;
  phone: string;
  website?: string;
  taxId?: string;
}

export interface InvoiceClient {
  name: string;
  address: string;
  email: string;
  contactPerson?: string;
  phone?: string;
  clientId?: string;
}

export interface InvoiceItem {
  description: string;
  details?: string;
  quantity: number;
  unit?: string;
  unitPrice: number;
  amount: number;
  hours?: number;
  rate?: number;
}

export interface InvoiceData {
  id: string;
  title: string;
  template: string;
  data: {
    invoiceNumber: string;
    date: string;
    dueDate: string;
    company: InvoiceCompany;
    client: InvoiceClient;
    items: InvoiceItem[];
    subtotal: number;
    taxRate?: number;
    taxAmount?: number;
    total: number;
    notes?: string;
    [key: string]: any; // For additional template-specific fields
  };
}

// Meeting Minutes types
export interface ActionItem {
  action: string;
  assignedTo: string;
  dueDate: string;
  id?: string;
  priority?: string;
  status?: string;
  notes?: string;
  dependencies?: string;
}

export interface DiscussionItem {
  topic: string;
  notes: string;
  decisions: string;
}

export interface MeetingData {
  id: string;
  title: string;
  template: string;
  data: {
    meetingTitle?: string;
    date: string;
    time?: string;
    location?: string;
    facilitator?: string;
    recorder?: string;
    attendees: string[];
    absentees?: string[];
    agenda?: string[];
    discussionItems?: DiscussionItem[];
    actionItems: ActionItem[];
    nextMeeting?: {
      date: string;
      time: string;
      location: string;
    };
    notes?: string;
    [key: string]: any; // For additional template-specific fields
  };
}
