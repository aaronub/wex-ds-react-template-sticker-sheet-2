import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: /^@wex\/components-react\/(.+)$/,
        replacement: path.resolve(
          __dirname,
          "node_modules/@wex/components-react/$1"
        ),
      },
    ],
  },
  optimizeDeps: {
    include: [
      "sonner",
      "use-sync-external-store/shim",
      "use-sync-external-store/shim/with-selector",
    ],
  },
  base: "/wex-ds-react-template-sticker-sheet-2/",
});