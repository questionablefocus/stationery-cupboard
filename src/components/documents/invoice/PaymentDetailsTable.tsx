import React from "react";
import { BankTransferDetails } from "./types";

interface PaymentDetailsTableProps {
  paymentDetails: BankTransferDetails;
}

export const renderPaymentDetailsTable = ({
  paymentDetails,
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
    <div className="inline-block md:ml-auto print:ml-auto">
      <table className="text-xs w-auto">
        <tbody>
          {availableFields.map((field) => (
            <tr key={field}>
              <td className="pr-4 py-1 text-left text-xs font-medium text-gray-500">
                {fieldLabels[field]}
              </td>
              <td className="pl-4 py-1 text-xs whitespace-nowrap">
                {paymentDetails[field]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Also create a component version for direct usage
export const PaymentDetailsTable: React.FC<PaymentDetailsTableProps> = (
  props
) => {
  return renderPaymentDetailsTable(props);
};

export default PaymentDetailsTable;
