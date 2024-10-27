import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: false,
  },
  build: {
    manifest: true,
    target: "esnext",
  },
});
