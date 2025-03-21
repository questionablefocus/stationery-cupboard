import React from "react";
import { BaseDocument } from "../BaseDocument";
import { mergeTheme } from "../../../themes";
import { InvoiceDocumentProps } from "./types";
import { PaymentDetailsTable } from "./PaymentDetailsTable";

export const InvoiceDocument: React.FC<InvoiceDocumentProps> = ({
  data,
  theme = {},
  children,
}) => {
  const mergedTheme = mergeTheme(theme);
  const currency = data.currency || "USD";

  const taxAmount =
    data.taxAmount ||
    (data.taxRate && (data.subtotal * data.taxRate) / 100) ||
    0;
  const discountAmount = data.discountAmount || 0;

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: currency,
    });
  };

  return (
    <BaseDocument theme={theme}>
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row print:flex-row justify-between items-start">
          <h2
            className="text-4xl font-bold text-gray-900"
            style={{
              fontFamily: mergedTheme.fontFamily.heading,
              fontSize: mergedTheme.fontSize.heading1,
            }}
          >
            Invoice
          </h2>

          <div className="text-right mt-4 md:mt-0 print:mt-0">
            {data.companyDetails.logo ? (
              <img
                src={data.companyDetails.logo}
                alt="Company Logo"
                className="h-16 mb-2 ml-auto"
              />
            ) : (
              <h3
                className="text-lg font-semibold text-gray-900"
                style={{
                  fontFamily: mergedTheme.fontFamily.heading,
                  fontSize: mergedTheme.fontSize.heading3,
                }}
              >
                {data.companyDetails.name}
              </h3>
            )}
            <div className="mt-1 text-xs text-gray-500">
              {data.companyDetails.address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <p>{data.companyDetails.contactInfo}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row print:flex-row justify-between mt-12">
          <div className="mb-8 md:mb-0 print:mb-0">
            <h3 className="text-lg font-semibold text-gray-900">
              {data.clientDetails.name}
            </h3>
            <div className="mt-1 text-sm text-gray-500">
              {data.clientDetails.address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>

          <div className="md:text-right print:text-right">
            <table className="md:ml-auto print:ml-auto">
              <tbody>
                <tr>
                  <th className="pr-4 py-1 text-left text-xs font-medium text-gray-500">
                    Invoice reference
                  </th>
                  <td className="pl-4 py-1 text-xs">{data.invoiceNumber}</td>
                </tr>
                <tr>
                  <th className="pr-4 py-1 text-left text-xs font-medium text-gray-500">
                    Invoice date
                  </th>
                  <td className="pl-4 py-1 text-xs">
                    {formatDate(data.issueDate)}
                  </td>
                </tr>
                <tr>
                  <th className="pr-4 py-1 text-left text-xs font-medium text-gray-500">
                    Due date
                  </th>
                  <td className="pl-4 py-1 text-xs">
                    {formatDate(data.dueDate)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoice Items */}
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr
                style={{
                  backgroundColor: mergedTheme.documents.table.headerBackground,
                }}
              >
                <th className="border border-gray-300 p-2 text-left">
                  Description
                </th>
                <th className="border border-gray-300 p-2 text-right">Qty</th>
                <th className="border border-gray-300 p-2 text-right">
                  Unit Price
                </th>
                <th className="border border-gray-300 p-2 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr
                  key={item.id}
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? mergedTheme.documents.table.rowBackground
                        : mergedTheme.documents.table.alternateRowBackground,
                  }}
                >
                  <td className="border border-gray-300 p-2">
                    {item.description}
                  </td>
                  <td className="border border-gray-300 p-2 text-right">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 p-2 text-right">
                    {formatCurrency(item.unitPrice)}
                  </td>
                  <td className="border border-gray-300 p-2 text-right">
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="ml-auto w-64">
          <div className="flex justify-between py-1">
            <span>Subtotal:</span>
            <span>{formatCurrency(data.subtotal)}</span>
          </div>

          {data.taxRate && (
            <div className="flex justify-between py-1">
              <span>Tax ({data.taxRate}%):</span>
              <span>{formatCurrency(taxAmount)}</span>
            </div>
          )}

          {data.discountAmount && (
            <div className="flex justify-between py-1">
              <span>Discount:</span>
              <span>-{formatCurrency(discountAmount)}</span>
            </div>
          )}

          <div
            className="flex justify-between py-2 font-bold border-t-2 mt-2"
            style={{ borderColor: mergedTheme.colors.border }}
          >
            <span>Total:</span>
            <span style={{ color: mergedTheme.colors.primary }}>
              {formatCurrency(data.total)}
            </span>
          </div>
        </div>

        {/* Notes and Payment Details */}
        <div className="mt-16 flex flex-col md:flex-row print:flex-row justify-between">
          {data.notes && (
            <div className="mb-8 md:mb-0 print:mb-0 md:w-1/2 print:w-1/2 pr-4">
              <h3
                className="text-sm font-semibold text-gray-900 mb-2"
                style={{
                  fontFamily: mergedTheme.fontFamily.heading,
                  fontSize: mergedTheme.fontSize.heading3,
                }}
              >
                Notes
              </h3>
              <p className="text-xs text-gray-600">{data.notes}</p>
            </div>
          )}

          {data.paymentDetails && (
            <div
              className={`${
                data.notes ? "md:w-1/2 print:w-1/2" : "w-full"
              } md:text-right print:text-right`}
            >
              <h3
                className="text-sm font-semibold text-gray-900 mb-2"
                style={{
                  fontFamily: mergedTheme.fontFamily.heading,
                  fontSize: mergedTheme.fontSize.heading3,
                }}
              >
                Payment Details
              </h3>
              <PaymentDetailsTable
                paymentDetails={data.paymentDetails}
                tableHeaderBackground={
                  mergedTheme.documents.table.headerBackground
                }
              />
            </div>
          )}
        </div>

        {children}
      </div>
    </BaseDocument>
  );
};
