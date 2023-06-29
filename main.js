const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const brand = ref("SE 331");
    const description = ref("A stylish and comfortable pair of boots.");
    const link = ref("https://www.camt.cmu.ac.th");
    const inventory = ref(100);
    const onSale = ref(true);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 50,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 0,
      },
    ]);
    const selectedVariant = ref(0);
    function updateVariant(index) {
      selectedVariant.value = index;
    }
    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0;
    });
    const cart = ref(0);
    function addToCart() {
      cart.value += 1;
    }
    function updateImage(variantImage) {
      image.value = variantImage;
    }
    const toggleStock = () => {
      inStock.value = !inStock.value;
      inventory.value = inStock.value ? 100 : 0;
    };
    const title = computed(() => {
      return brand.value + " " + product.value;
    });
    const saleMessage = computed(() => {
      if (onSale.value) {
        return brand.value + " " + product.value + " is on sale";
      } else {
        return "";
      }
    });

    return {
      title,
      description,
      image,
      link,
      inStock,
      inventory,
      onSale,
      details,
      variants,
      cart,
      addToCart,
      updateImage,
      toggleStock,
      updateVariant,
      saleMessage,
    };
  },
}).mount("#app");
