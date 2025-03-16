import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader: "jsx", // Ensure ESBuild processes JSX properly
    include: [/src\/.*\.jsx?/], // Allow both .js and .jsx files
  },
});
