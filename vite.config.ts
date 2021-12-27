import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "JestMatcherPercentError",
      fileName: (format) => `jest-matcher-percent-error.${format}.js`,
    },
    sourcemap: true,
  },
});
