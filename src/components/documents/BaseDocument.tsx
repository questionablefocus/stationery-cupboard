import React from "react";
import { Theme, mergeTheme } from "../../themes";

export interface BaseDocumentProps {
  theme?: Partial<Theme>;
  children?: React.ReactNode;
}

export const BaseDocument: React.FC<BaseDocumentProps> = ({
  theme = {},
  children,
}) => {
  const mergedTheme = mergeTheme(theme);

  return (
    <div
      className="w-full max-w-4xl mx-auto p-8 print:p-0 bg-white shadow-lg print:shadow-none"
      style={{
        fontFamily: mergedTheme.fontFamily.body,
        color: mergedTheme.colors.text,
        backgroundColor: mergedTheme.colors.background,
      }}
    >
      {children}
    </div>
  );
};
