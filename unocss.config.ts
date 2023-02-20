import { defineConfig, presetIcons, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  // see https://github.com/unocss/unocss for config options
  presets: [presetUno(), presetIcons(), presetAttributify()],
});
