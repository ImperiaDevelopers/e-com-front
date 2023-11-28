<template>
  <Carousel
    :v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="3000"
    :pauseAutoplayOnHover="true"
    :wrap-around="true"
    class="mb-[4%]"
  >
    <Slide v-for="(item, index) in imgs" :key="index">
      <Card :data="item" :key="index" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useBasketStore } from "../../stores/basket/basket";
import { useProductStore } from "../../stores/products/product";
import Notification from "../../plugins/Notification";
import Card from "../Product/Card.vue";

const store = useBasketStore();
const store1 = useProductStore();

const addProductToCard = async (item: any) => {
  const payload = {
    product_id: item.id,
    client_id: 1,
    price: item.price,
    quantity: 1,
  };
  await store1.addProductToCard(payload);
  Notification(`Mahsulot savatga qo'shildi: ${item.name}`, "success");
};

const props = defineProps({
  imgs: Array,
});

const settings = {
  itemsToShow: 0.8,
  snapAlign: "center",
};

const breakpoints = {
  700: {
    itemsToShow: 3.3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5.2,
    snapAlign: "center",
  },
};

onMounted(async () => {
  // store.addProductToBasket()
});
</script>

<style lang="scss" scoped>
.img-ust:hover {
  cursor: pointer;
  scale: 1.05;
  transition: all 0.4s;
}
</style>
