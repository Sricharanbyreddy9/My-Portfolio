import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  // Set GH_PAGES=true when building for GitHub Pages
  const useGhPagesBase = process.env.GH_PAGES === "true";

  return {
    appType: "spa",
    publicDir: "public",
    base: useGhPagesBase ? "/My-Portfolio/" : "/",

    plugins: [react(), isDev && componentTagger()].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      host: "127.0.0.1",
      port: 5173,
      strictPort: true,
    },

    preview: {
      host: "127.0.0.1",
      port: 4173,
      strictPort: true,
    },
  };
});
