import React, { useState } from "react";
import { InvoiceDocument, MeetingMinutesDocument } from "../../src";
import { InvoiceTable } from "../../src/components/tables/InvoiceTable";
import { MeetingMinutesTable } from "../../src/components/tables/MeetingMinutesTable";
import { invoiceFixtures } from "../fixtures/invoiceFixtures";
import { meetingMinutesFixtures } from "../fixtures/meetingMinutesFixtures";
import { themeFixtures } from "../fixtures/themeFixtures";

type DocumentType = "invoice" | "meetingMinutes";

const TestPreviewApp: React.FC = () => {
  const [selectedDocType, setSelectedDocType] =
    useState<DocumentType>("invoice");
  const [selectedFixture, setSelectedFixture] = useState<string>("");
  const [selectedTheme, setSelectedTheme] = useState<string>("default");

  const handleDocTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocType(e.target.value as DocumentType);
    setSelectedFixture("");
  };

  const handleFixtureSelect = (fixture: string) => {
    setSelectedFixture(fixture);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(e.target.value);
  };

  const renderDocumentSelector = () => {
    return (
      <div className="mb-6">
        <div className="flex space-x-4 items-center mb-4">
          <label htmlFor="docType" className="font-medium text-gray-700">
            Document Type:
          </label>
          <select
            id="docType"
            value={selectedDocType}
            onChange={handleDocTypeChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="invoice">Invoice</option>
            <option value="meetingMinutes">Meeting Minutes</option>
          </select>

          <label htmlFor="theme" className="font-medium text-gray-700 ml-4">
            Theme:
          </label>
          <select
            id="theme"
            value={selectedTheme}
            onChange={handleThemeChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(themeFixtures).map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-lg font-semibold mb-2">
          Available{" "}
          {selectedDocType === "invoice" ? "Invoices" : "Meeting Minutes"}
        </h2>
        {selectedDocType === "invoice" ? (
          <InvoiceTable
            invoices={Object.entries(invoiceFixtures).map(
              ([key, data]) => data
            )}
            onRowClick={(invoice) => {
              const fixture = Object.entries(invoiceFixtures).find(
                ([_, fixtureData]) =>
                  fixtureData.invoiceNumber === invoice.invoiceNumber
              );
              if (fixture) {
                handleFixtureSelect(fixture[0]);
              }
            }}
            theme={themeFixtures[selectedTheme]}
          />
        ) : (
          <MeetingMinutesTable
            meetings={Object.entries(meetingMinutesFixtures).map(
              ([key, data]) => data
            )}
            onRowClick={(meeting) => {
              const fixture = Object.entries(meetingMinutesFixtures).find(
                ([_, fixtureData]) => fixtureData.title === meeting.title
              );
              if (fixture) {
                handleFixtureSelect(fixture[0]);
              }
            }}
            theme={themeFixtures[selectedTheme]}
          />
        )}
      </div>
    );
  };

  const renderSelectedDocument = () => {
    if (!selectedFixture) {
      return (
        <div className="bg-gray-100 p-8 rounded-lg text-center text-gray-600">
          <p>Select a document from the table above to preview</p>
        </div>
      );
    }

    if (selectedDocType === "invoice") {
      const invoiceData = invoiceFixtures[selectedFixture];
      return (
        <InvoiceDocument
          data={invoiceData}
          theme={themeFixtures[selectedTheme]}
        />
      );
    } else {
      const meetingData = meetingMinutesFixtures[selectedFixture];
      return (
        <MeetingMinutesDocument
          data={meetingData}
          theme={themeFixtures[selectedTheme]}
        />
      );
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Stationery Cupboard</h1>
      </header>

      <main>
        {renderDocumentSelector()}

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            {selectedFixture ? (
              <>
                Document Preview:{" "}
                <span className="text-blue-600">{selectedFixture}</span> with
                theme: <span className="text-blue-600">{selectedTheme}</span>
              </>
            ) : (
              "Document Preview"
            )}
          </h2>
          <div className="border rounded-lg overflow-hidden">
            {renderSelectedDocument()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestPreviewApp;
