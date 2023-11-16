<template>
  <Carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="3000"
    :wrap-around="true"
    class="mb-[4%]"
  >
    <Slide v-for="(img, index) in imgs" :key="index">
      <div
        class="carousel__item w-[250px] h-[400px] bg-[#EBEFF3] rounded"
        style="{ width: img.width, height: img.height }"
      >
        <div class="flex-col">
          <img class="m-auto" :src="img.content" alt="Slide Image" />
          <h4 class="text-start mt-2">{{ img.text }}</h4>
          <p class="text-2xl text-start pt-5">{{ img.price }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const imgs = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "50px",
    height: "30px",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
]);

const settings = {
  itemsToShow: 1.2,
  snapAlign: "center",
};

const breakpoints = {
  700: {
    itemsToShow: 3.3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5.8,
    snapAlign: "center",
  },
};
</script>
