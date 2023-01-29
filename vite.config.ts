import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: [
        {
          clsx: ["clsx"],
        },
      ],
      eslintrc: {
        enabled: true, // <-- this
      },
      dts: true,
    }),
  ],
  server: {
    port: 5172,
  },
})
