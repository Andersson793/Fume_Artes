import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js}"],
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "block",
      },
    }),
  ],
});
