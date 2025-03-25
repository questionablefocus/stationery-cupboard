import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    jsx: "automatic", // Ensure JSX is properly transformed
    jsxImportSource: "react", // Ensure React handles JSX
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "StationeryCupboard",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
    },
    rollupOptions: {
      external: (id) =>
        ["react", "react-dom"].includes(id) || /^react\//.test(id),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    sourcemap: true,
  },
});
