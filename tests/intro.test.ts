import { $fetch, setup } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";
import { fileURLToPath } from "node:url";

describe("index.vue", async () => {
  it("it gets the intro from the server", async () => {
    const config = useAppConfig();
    console.log(config);

    await setup({ server: true, browser: false, rootDir: fileURLToPath(new URL("../", import.meta.url)) });
    const introText = await $fetch("/api/intro");
    expect(introText.intro).toBe("Welcome to Nuxt 3");
  });
});
