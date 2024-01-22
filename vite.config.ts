import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import path from "path";

const scssGlobalIndex = path
  .resolve(__dirname, "./src/styles/index.scss")
  .replace(/\\/g, "/");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      dirs: ["src/components/core"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${scssGlobalIndex}" as *;`,
      },
    },
  },
});
