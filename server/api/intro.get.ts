export default defineEventHandler((event) => {
  console.log("This doesn't show up in the browser log.");

  return {
    intro: "Nuxt 3 is pretty neat.",
  };
});
