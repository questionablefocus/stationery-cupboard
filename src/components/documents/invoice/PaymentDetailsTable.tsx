import React from "react";
import { BankTransferDetails } from "./types";

interface PaymentDetailsTableProps {
  paymentDetails: BankTransferDetails;
  tableHeaderBackground: string;
}

export const renderPaymentDetailsTable = ({
  paymentDetails,
  tableHeaderBackground,
}: PaymentDetailsTableProps) => {
  // Define field labels
  const fieldLabels: Record<keyof BankTransferDetails, string> = {
    bankName: "Bank",
    accountName: "Account Name",
    accountNumber: "Account Number",
    routingNumber: "Routing Number",
    sortCode: "Sort Code",
    iban: "IBAN",
    swiftCode: "SWIFT Code",
    bic: "BIC",
    reference: "Reference",
    additionalInfo: "Additional Information",
  };

  // Get all keys with values
  const availableFields = Object.entries(paymentDetails)
    .filter(([_, value]) => value !== undefined)
    .map(([key]) => key as keyof BankTransferDetails);

  return (
    <table className="text-xs md:ml-auto print:ml-auto">
      <tbody>
        {availableFields.map((field) => (
          <tr key={field}>
            <td
              className="pl-4 py-1 text-xs"
              style={{
                backgroundColor: tableHeaderBackground,
                width: field === "bankName" ? "30%" : undefined,
              }}
            >
              {fieldLabels[field]}
            </td>
            <td className="pl-4 py-1 text-xs">{paymentDetails[field]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Also create a component version for direct usage
export const PaymentDetailsTable: React.FC<PaymentDetailsTableProps> = (
  props
) => {
  return renderPaymentDetailsTable(props);
};

export default PaymentDetailsTable;
