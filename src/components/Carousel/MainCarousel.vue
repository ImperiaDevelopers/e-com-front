<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(img, index) in imgs" :key="index">
      <div
        :style="{ background: img.bgColor }"
        class="flex justify-between items-center"
      >
        <div class="flex flex-col items-start pl-[200px] gap-4">
          <h1 class="text-2xl">{{ img.text }}</h1>
          <p class="text-x">{{ img.desc }}</p>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Batafsil
          </button>
        </div>
        <img class="h-1/4 w-1/3" :src="img.content" alt="Slide Image" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { computed, ref } from "vue";

const imgs = ref([
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite     ",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
    content: "src/assets/images/image 1855.png",
    bgColor: "#F3F0F0",
  },
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite     ",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
    content: "src/assets/images/Apple-iPhone-15-transformed.png",
    bgColor: "#DBBE6E",
  },
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite     ",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
    content: "src/assets/images/Remove-bg.ai_1700024011159.png",
    bgColor: "#DBCB6E",
  },
]);
</script>
<style scoped></style>

<!-- <template>
  <div>
    <div>
      <carousel :items-to-show="1" :autoplay="5000">
        <slide v-for="(img, index) in imgs" :key="index">
          <div
            :style="{ background: img.bgColor }"
            class="flex justify-between items-center"
          >
            <div class="flex flex-col items-start pl-[200px] gap-4">
              <h1 class="text-2xl">{{ img.text }}</h1>
              <p class="text-x">{{ img.desc }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Batafsil
              </button>
            </div>
            <img
              class="h-1/4 w-1/3"
              :src="img.content"
              alt="Slide Image"
            /></div
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
</template> -->
