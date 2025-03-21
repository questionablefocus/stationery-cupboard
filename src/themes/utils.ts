import { Theme } from "./types";
import { defaultTheme } from "./default";

/**
 * Deep merges a custom theme with the default theme
 */
export function mergeTheme(customTheme: Partial<Theme> = {}): Theme {
  return {
    fontFamily: {
      ...defaultTheme.fontFamily,
      ...customTheme.fontFamily,
    },
    fontSize: {
      ...defaultTheme.fontSize,
      ...customTheme.fontSize,
    },
    colors: {
      ...defaultTheme.colors,
      ...customTheme.colors,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...customTheme.spacing,
    },
    documents: {
      header: {
        ...defaultTheme.documents.header,
        ...customTheme.documents?.header,
      },
      footer: {
        ...defaultTheme.documents.footer,
        ...customTheme.documents?.footer,
      },
      table: {
        ...defaultTheme.documents.table,
        ...customTheme.documents?.table,
      },
    },
  };
}
