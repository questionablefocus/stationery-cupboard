import React from "react";
import Markdown from "markdown-to-jsx";
import { Theme, mergeTheme } from "../themes";

interface MarkdownRendererProps {
  content: string;
  theme?: Partial<Theme>;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  theme = {},
}) => {
  const mergedTheme = mergeTheme(theme);

  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: "h1",
            props: {
              className: "text-2xl font-bold mb-4",
              style: {
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading1,
              },
            },
          },
          h2: {
            component: "h2",
            props: {
              className: "text-xl font-bold mb-3",
              style: {
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading2,
              },
            },
          },
          h3: {
            component: "h3",
            props: {
              className: "text-lg font-bold mb-2",
              style: {
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading3,
              },
            },
          },
          p: {
            component: "p",
            props: {
              className: "mb-4",
              style: {
                fontFamily: mergedTheme.fontFamily.body,
                fontSize: mergedTheme.fontSize.body,
              },
            },
          },
          ul: {
            component: "ul",
            props: {
              className: "list-disc pl-5 mb-4",
            },
          },
          ol: {
            component: "ol",
            props: {
              className: "list-decimal pl-5 mb-4",
            },
          },
          li: {
            component: "li",
            props: {
              className: "mb-1",
            },
          },
          a: {
            component: "a",
            props: {
              className: "text-blue-600 hover:underline",
              style: { color: mergedTheme.colors.primary },
            },
          },
          blockquote: {
            component: "blockquote",
            props: {
              className: "border-l-4 pl-4 italic my-4",
              style: { borderColor: mergedTheme.colors.muted },
            },
          },
          hr: {
            component: "hr",
            props: {
              className: "my-6",
              style: { borderColor: mergedTheme.colors.border },
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};
