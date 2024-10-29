import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";

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
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        name: 'Bebas Neue'
      }
    })
  ],
});
