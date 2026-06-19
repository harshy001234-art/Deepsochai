import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

function normalizeBasePath(basePath?: string) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const withLeadingSlash = basePath.startsWith("/") ? basePath : `/${basePath}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, "");
  const port = Number(env.PORT) || 5173;

  return {
    base: normalizeBasePath(env.BASE_PATH),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(projectRoot, "src"),
      },
      dedupe: ["react", "react-dom"],
    },
    build: {
      outDir: path.resolve(projectRoot, "dist"),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
