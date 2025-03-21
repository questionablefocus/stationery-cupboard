import { BaseDocumentProps } from "../BaseDocument";

export interface InvoiceItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  amount: number;
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
    contactInfo?: string;
    logo?: string;
  };
  clientDetails: {
    name: string;
    address: string[];
    contactInfo?: string;
  };
  items: InvoiceItem[];
  subtotal?: number;
  taxRate?: number;
  taxAmount?: number;
  discountAmount?: number;
  total: number;
  notes?: string;
  paymentDetails?: BankTransferDetails;
  currency?: string;
}

export interface InvoiceDocumentProps extends BaseDocumentProps {
  data: InvoiceData;
}
