import { fileURLToPath } from "node:url";
import { $fetch, setup, isDev } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";

describe("index.vue", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("..", import.meta.url)),
    server: true,
    dev: false,
  });

  it("renders the NuxtWelcome component", async () => {
    const body = await $fetch("/");    
    expect(body).toContain("This is a button");
  });

  it("it gets the intro from the api", async () => {
    const introData = await $fetch("/api/intro");
    expect(introData.intro).toBe("Nuxt 3 is pretty neat.");
  });

  if (isDev()) {
    it("[dev] ensures vite client script is added", async () => {
      expect(await $fetch("/")).toMatch('/_nuxt/@vite/client"');
    });
  }
});
