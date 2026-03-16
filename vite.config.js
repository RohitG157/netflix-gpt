import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      // Enable JSX in .js files
      jsxRuntime: "automatic",
      include: "**/*.{js,jsx,ts,tsx}",
    }),
  ],
});
