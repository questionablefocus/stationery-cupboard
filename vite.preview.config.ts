import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "./tests",
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "../../src": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../dist-preview",
    emptyOutDir: true,
  },
});
