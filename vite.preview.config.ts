import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/postcss";
import tailwindConfig from "./tests/tailwind.config.js";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  root: "./tests",
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
      "@tests": resolve(__dirname, "./tests"),
    },
  },
  build: {
    outDir: "../dist-preview",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        {
          // @ts-ignore
          postcssPlugin: "@tailwindcss/postcss",
          options: { config: tailwindConfig },
        },
        autoprefixer,
      ],
    },
  },
});
