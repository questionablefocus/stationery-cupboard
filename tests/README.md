# Stationery Component Preview

This directory contains a preview application for testing and visualizing the Stationery components in different configurations and themes.

## Features

- Preview all document templates (Invoice, Meeting Minutes)
- View documents with different data configurations
- Test different themes
- Interactive navigation between document types and variants

## Running the Preview App

To run the preview application, use the following command from the project root:

```bash
npm run preview:dev
```

This will start a development server on http://localhost:3000 and automatically open your browser.

## Structure

- `fixtures/`: Contains test data for different document types and themes
  - `invoiceFixtures.ts`: Sample invoice data
  - `meetingMinutesFixtures.ts`: Sample meeting minutes data
  - `themeFixtures.ts`: Various theme configurations
- `components/`: React components for the preview application
  - `TestPreviewApp.tsx`: Main preview application component
- `index.html`: HTML entry point
- `index.tsx`: React entry point

## Usage

1. Select a document type from the dropdown (Invoice or Meeting Minutes)
2. Choose a theme from the theme dropdown
3. The table below will show available test configurations for the selected document type
4. Click on a row in the table to view that document with the selected theme
5. The document preview will appear below the table

## Adding New Test Cases

### To add a new invoice test case:

1. Edit `fixtures/invoiceFixtures.ts`
2. Add a new entry to the `invoiceFixtures` object

### To add a new meeting minutes test case:

1. Edit `fixtures/meetingMinutesFixtures.ts`
2. Add a new entry to the `meetingMinutesFixtures` object

### To add a new theme:

1. Edit `fixtures/themeFixtures.ts`
2. Add a new entry to the `themeFixtures` object following the Theme interface structure
