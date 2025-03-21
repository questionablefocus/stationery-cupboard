export interface Theme {
  // Typography
  fontFamily: {
    heading: string;
    body: string;
  };
  fontSize: {
    heading1: string;
    heading2: string;
    heading3: string;
    body: string;
    small: string;
  };

  // Colors
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
    border: string;
    success: string;
    error: string;
  };

  // Spacing
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  // Document specific
  documents: {
    header: {
      background: string;
      color: string;
    };
    footer: {
      background: string;
      color: string;
    };
    table: {
      headerBackground: string;
      headerColor: string;
      rowBackground: string;
      rowColor: string;
      alternateRowBackground: string;
    };
  };
}
