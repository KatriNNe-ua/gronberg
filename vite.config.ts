
import react from "@vitejs/plugin-react";
import { vitePluginWebp } from "vite-plugin-to-webp";
import { defineConfig } from "vitest/config";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginWebp({
      cwd: ["src/assets/images", "public/images"],
      // директорії з картинками
      webpOptions: {
        quality: 80, // якість WebP
      },
      withThumbnail: false,
      // якщо потрібні прев’ю
      thumbnailOptions: {
        width: 300,
        height: 200,
      },
    }) as import("vite").Plugin,
  ],
  server: {
    open: true, // відкриє браузер автоматично
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
});


