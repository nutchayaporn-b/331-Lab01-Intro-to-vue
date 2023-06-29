const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const image = ref("./assets/images/socks_green.jpg");
    const description = ref("A stylish and comfortable pair of boots.");
    const link = ref("https://www.camt.cmu.ac.th");
    return {
      product,
      description,
      image,
      link,
    };
  },
}).mount("#app");
