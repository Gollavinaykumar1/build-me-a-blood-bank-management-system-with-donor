import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/build-me-a-blood-bank-management-system-with-donor/",
  build: { outDir: "dist", assetsDir: "assets" },
  server: { port: 3000 },
});
