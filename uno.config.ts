import { defineConfig, presetUno, presetIcons, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primaryText: "hsl(0, 0%, 95%)",
      linkHover: "hsl(153, 47%, 49%)",
      primaryBackground: "hsl(0, 0%, 11%)",
      secondaryBackground: "rgb(32, 31, 35)",
    },
    fontFamily: {
      nunito: "Nunito Sans, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    fontSize: {
      base: "100%",
    },
  },
});
