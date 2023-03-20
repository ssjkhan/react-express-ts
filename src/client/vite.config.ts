/**
  @type {import('vite'.UserConfig)}
*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// const mode = process.env.NODE_ENV;
// const inputPath = (mode === "development") ? "./src/main.tsx" : false;
console.log(process.env.NODE_ENV);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./dist",
    manifest: true,
    rollupOptions: {
      input: "./src/main.tsx",
    },
  },
  server: {
    port: 5000,
    origin: "http://127.0.0.1:3000",
  },
});
