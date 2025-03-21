import { Theme } from "./types";

export const defaultTheme: Theme = {
  fontFamily: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  fontSize: {
    heading1: "2rem",
    heading2: "1.5rem",
    heading3: "1.25rem",
    body: "1rem",
    small: "0.875rem",
  },
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    accent: "#10b981",
    background: "#ffffff",
    text: "#1f2937",
    muted: "#9ca3af",
    border: "#e5e7eb",
    success: "#10b981",
    error: "#ef4444",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  documents: {
    header: {
      background: "#f9fafb",
      color: "#1f2937",
    },
    footer: {
      background: "#f9fafb",
      color: "#1f2937",
    },
    table: {
      headerBackground: "#ffffff",
      headerColor: "#1f2937",
      rowBackground: "#ffffff",
      rowColor: "#1f2937",
      alternateRowBackground: "#ffffff",
    },
  },
};
