import { setup, $fetch } from "@nuxt/test-utils";
import { describe, it } from "vitest";

describe("index.vue", () => {
  it("it gets the intro from the server", () => {
    const intro = $fetch("/api/intro");
    console.log(intro);
  });
});

// TODO add to config to include api entries 
//  ERROR  include: **/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}