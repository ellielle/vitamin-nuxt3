import { fileURLToPath } from "node:url";
import { $fetch, fetch, setup } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";

describe("index.vue", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("..", import.meta.url)),
    server: true,
  });

  it("it gets the intro from the api", async () => {
    const introData = await $fetch("/api/intro");
    console.log("introdata ", introData);

    expect(introData.intro).toContain("Welcome to Nuxt 3");
  });
});
