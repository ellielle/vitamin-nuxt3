import { defineConfig, presetIcons, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  // shortcuts: [],
  presets: [presetUno(), presetIcons(), presetAttributify()],
});
