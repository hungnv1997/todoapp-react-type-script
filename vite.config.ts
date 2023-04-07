import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import sass from "vite-plugin-sass";
import sass from "sass";
import { Plugin } from "vite";

function sassPlugin(): Plugin {
  return {
    name: "sass-plugin",
    transform(code, id) {
      if (id.endsWith(".scss") || id.endsWith(".sass")) {
        const result = sass.renderSync({ data: code });
        return { code: result.css.toString(), map: null };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassPlugin()],
});
