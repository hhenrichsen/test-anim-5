import { defineConfig } from "vite";
import motionCanvas from "@motion-canvas/vite-plugin";

export default defineConfig(({ command }) => {
  const plugins = [motionCanvas()];
  return {
    plugins,
    build: {
      rollupOptions: {
        output: {
          dir: "out",
          entryFileNames: "[name].js",
        },
      },
    },
  };
});
