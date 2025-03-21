import { BaseDocumentProps } from "../BaseDocument";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  companyDetails: {
    name: string;
    address: string;
    contactInfo: string;
    logo?: string;
  };
  clientDetails: {
    name: string;
    address: string;
    contactInfo: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  taxRate?: number;
  taxAmount?: number;
  discountAmount?: number;
  total: number;
  notes?: string;
  termsAndConditions?: string;
  paymentDetails?: string;
}

export interface InvoiceDocumentProps extends BaseDocumentProps {
  data: InvoiceData;
}
