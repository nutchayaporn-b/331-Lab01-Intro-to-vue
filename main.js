const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const image = ref("./assets/images/socks_green.jpg");
    const description = ref("A stylish and comfortable pair of boots.");
    const link = ref("https://www.camt.cmu.ac.th");
    const inStock = ref(true);
    const inventory = ref(0);
    const onSale = ref(false);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green" },
      { id: 2235, color: "blue" },
    ]);
    return {
      product,
      description,
      image,
      link,
      inStock,
      inventory,
      onSale,
      details,
      variants,
    };
  },
}).mount("#app");
