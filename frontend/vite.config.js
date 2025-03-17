import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader: "jsx",
    include: [/src\/.*\.jsx?/],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Backend server
        changeOrigin: true,
        secure: false, // If using HTTPS, change this accordingly
      },
    },
  },
});
