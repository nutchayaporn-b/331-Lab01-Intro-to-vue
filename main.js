const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const description = ref("A stylish and comfortable pair of boots.");
    return {
      product,
      description,
    };
  },
}).mount("#app");
