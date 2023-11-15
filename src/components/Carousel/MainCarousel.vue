<template>
  <div>
    <div class="bg-[#F3F0F0]">
      <carousel :items-to-show="1" :autoplay="5000">
        <slide v-for="(img, index) in imgs" :key="index">
          <div class="flex justify-between items-center">
            <div class="flex flex-col items-start pl-[200px] gap-4">
              <h1 class="text-2xl">{{ img.text }}</h1>
              <p class="text-x">{{ img.desc }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Batafsil
              </button>
            </div>
            <img class="h-1/4" :src="img.content" alt="Slide Image" /></div
        ></slide>

        <template #addons>
          <div class="flex pl-[200px]">
            <navigation />
            <pagination />
          </div>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const imgs = ref([
      {
        text: "Siz kutgan Xiaomi 12 Mi Laite     ",
        desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
        content: "src/assets/images/image 1855.png",
      },
      {
        text: "Siz kutgan Xiaomi 12 Mi Laite     ",
        desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
        content: "src/assets/images/image 1855.png",
      },
      {
        text: "Siz kutgan Xiaomi 12 Mi Laite     ",
        desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
        content: "src/assets/images/image 1855.png",
      },
    ]);

    return {
      imgs,
    };
  },
};
</script>

<style scoped></style>
