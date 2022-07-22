import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: ".",
  base: "/",
  envPrefix: "APP_",
  clearScreen: true,
  plugins: [
    react(),
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    }),
  ],
  define: {
    "process.env": {
      ...process.env,
    },
  },
  server: {
    host: "0.0.0.0",
    base: "/",
    proxy: {
      "https://base-backend.darkube.app": {
        target: "https://base-backend.darkube.app",
        changeOrigin: true,
        secure: false,
      },
      // '^.*api.*': {
      //   target: 'https://base-backend.darkube.app',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => {
      //     console.log(path);

      //     return path;
      //   },
      // },
    },
  },
});
