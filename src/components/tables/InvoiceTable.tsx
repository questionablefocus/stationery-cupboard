import React from "react";
import { Theme, mergeTheme } from "../../themes";
import { InvoiceData } from "../documents/invoice/types";

export interface InvoiceTableProps {
  invoices: InvoiceData[];
  theme?: Partial<Theme>;
  onRowClick?: (invoice: InvoiceData) => void;
}

export const InvoiceTable: React.FC<InvoiceTableProps> = ({
  invoices,
  theme = {},
  onRowClick,
}) => {
  const mergedTheme = mergeTheme(theme);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead
          style={{
            backgroundColor: mergedTheme.documents.table.headerBackground,
          }}
        >
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Invoice #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Client
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {invoices.map((invoice, index) => {
            // Calculate if the invoice is overdue
            const dueDate = new Date(invoice.dueDate);
            const today = new Date();
            const isOverdue = dueDate < today;

            // Determine status based on date comparison
            let statusText = "Paid";
            let statusColor = mergedTheme.colors.success;

            if (isOverdue) {
              statusText = "Overdue";
              statusColor = mergedTheme.colors.error;
            } else {
              statusText = "Pending";
              statusColor = mergedTheme.colors.accent;
            }

            return (
              <tr
                key={invoice.invoiceNumber}
                className={onRowClick ? "cursor-pointer hover:bg-gray-50" : ""}
                onClick={() => onRowClick && onRowClick(invoice)}
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? mergedTheme.documents.table.rowBackground
                      : mergedTheme.documents.table.alternateRowBackground,
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {invoice.invoiceNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {invoice.issueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {invoice.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {invoice.clientDetails.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {invoice.total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    style={{
                      color: statusColor,
                      backgroundColor: `${statusColor}20`,
                    }}
                  >
                    {statusText}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
