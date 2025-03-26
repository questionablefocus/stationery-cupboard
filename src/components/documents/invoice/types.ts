import { BaseDocumentProps } from "../BaseDocument";

export interface InvoiceItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface ContactInfo {
  contactName?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface BankTransferDetails {
  bankName?: string;
  accountName?: string;
  // US fields
  accountNumber?: string;
  routingNumber?: string;
  // UK fields
  sortCode?: string;
  iban?: string;
  // International fields
  swiftCode?: string;
  bic?: string;
  // Additional information
  reference?: string;
  additionalInfo?: string;
}

export interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  companyDetails: {
    name: string;
    address: string[];
    contactInfo?: ContactInfo;
    logo?: string;
  };
  clientDetails: {
    name: string;
    address: string[];
    contactInfo?: ContactInfo;
  };
  items: InvoiceItem[];
  taxRate?: number;
  discountAmount?: number;
  notes?: string;
  paymentDetails?: BankTransferDetails;
  currency?: string;
}

export interface InvoiceProps extends BaseDocumentProps {
  data: InvoiceData;
}
