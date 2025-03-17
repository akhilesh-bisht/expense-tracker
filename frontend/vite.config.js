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
        target: "https://expense-tracker-o8to.onrender.com", // Backend server
        changeOrigin: true,
        secure: false, // If using HTTPS, change this accordingly
      },
    },
  },
});
