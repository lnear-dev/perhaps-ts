// vite.config.ts
import { defineConfig } from "file:///Users/op/Playground/jsrunner/maybe/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/op/Playground/jsrunner/maybe/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.12.12_typescript@5.4.5_vite@5.2.11/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/op/Playground/jsrunner/maybe";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/maybe.ts"),
      name: "Typescript Maybe Monad",
      fileName: "perhaps",
      formats: ["es"]
    }
  },
  resolve: { alias: { src: resolve("src/") } },
  plugins: [dts({ rollupTypes: true })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb3AvUGxheWdyb3VuZC9qc3J1bm5lci9tYXliZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL29wL1BsYXlncm91bmQvanNydW5uZXIvbWF5YmUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL29wL1BsYXlncm91bmQvanNydW5uZXIvbWF5YmUvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL21heWJlLnRzXCIpLFxuICAgICAgbmFtZTogXCJUeXBlc2NyaXB0IE1heWJlIE1vbmFkXCIsXG4gICAgICBmaWxlTmFtZTogXCJwZXJoYXBzXCIsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7IGFsaWFzOiB7IHNyYzogcmVzb2x2ZSgnc3JjLycpIH0gfSxcbiAgcGx1Z2luczogW2R0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVEsTUFBTSxFQUFFLEVBQUU7QUFBQSxFQUMzQyxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
