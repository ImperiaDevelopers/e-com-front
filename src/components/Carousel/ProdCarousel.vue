<template>
  <Carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="3000"
    :wrap-around="true"
    class="mt-[20px]"
  >
    <Slide v-for="(img, index) in imgs" :key="index">
      <div class="carousel__item w-[273px] h-[330px] bg-[#EBEFF3] rounded">
        <div class="flex-col">
          <img
            class="m-auto h-3/4 w-2/3"
            :src="img.content"
            alt="Slide Image"
          />
          <h4 class="text-start mt-2">{{ img.text }}</h4>
          <p class="text-2xl text-start items-end pt-5">{{ img.price }}</p>
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
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi.",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },

  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi.",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
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
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>
