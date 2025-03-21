import { Theme } from "../../src/themes";

export const themeFixtures: Record<string, Partial<Theme>> = {
  default: {}, // Empty object to use the default theme

  corporate: {
    fontFamily: {
      heading: "Georgia, serif",
      body: "Arial, sans-serif",
    },
    colors: {
      primary: "#0f3460",
      secondary: "#4a6fa5",
      accent: "#16c79a",
      background: "#ffffff",
      text: "#1e2a38",
      muted: "#6b7280",
      border: "#d1d5db",
      success: "#059669",
      error: "#dc2626",
    },
    documents: {
      header: {
        background: "#f8fafc",
        color: "#1e2a38",
      },
      footer: {
        background: "#f8fafc",
        color: "#1e2a38",
      },
      table: {
        headerBackground: "#e5e7eb",
        headerColor: "#1e2a38",
        rowBackground: "#ffffff",
        rowColor: "#1e2a38",
        alternateRowBackground: "#f8fafc",
      },
    },
  },

  modern: {
    fontFamily: {
      heading: "Montserrat, sans-serif",
      body: "Roboto, sans-serif",
    },
    colors: {
      primary: "#8b5cf6",
      secondary: "#6d28d9",
      accent: "#ec4899",
      background: "#ffffff",
      text: "#1f2937",
      muted: "#9ca3af",
      border: "#e5e7eb",
      success: "#10b981",
      error: "#ef4444",
    },
    documents: {
      header: {
        background: "#f3f4f6",
        color: "#4b5563",
      },
      footer: {
        background: "#f3f4f6",
        color: "#4b5563",
      },
      table: {
        headerBackground: "#f3f4f6",
        headerColor: "#4b5563",
        rowBackground: "#ffffff",
        rowColor: "#1f2937",
        alternateRowBackground: "#f9fafb",
      },
    },
  },

  colorful: {
    colors: {
      primary: "#f97316",
      secondary: "#8b5cf6",
      accent: "#06b6d4",
      background: "#fffbeb",
      text: "#1e293b",
      muted: "#64748b",
      border: "#fbbf24",
      success: "#10b981",
      error: "#ef4444",
    },
    documents: {
      header: {
        background: "#fef3c7",
        color: "#92400e",
      },
      footer: {
        background: "#fef3c7",
        color: "#92400e",
      },
      table: {
        headerBackground: "#fef3c7",
        headerColor: "#92400e",
        rowBackground: "#fffbeb",
        rowColor: "#1e293b",
        alternateRowBackground: "#fef9c3",
      },
    },
  },
};
