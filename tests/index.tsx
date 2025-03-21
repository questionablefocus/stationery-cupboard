import React from "react";
import { createRoot } from "react-dom/client";
import TestPreviewApp from "./components/TestPreviewApp";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <TestPreviewApp />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
