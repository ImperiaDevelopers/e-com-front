<!-- <template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(img, index) in imgs" :key="index">
      <div
        :style="{ background: img.bgColor }"
        class="flex justify-between  items-center"
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
        <img class="h-1/2 w-1/3 " :src="img.content" alt="Slide Image" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template> -->

<script setup>
import "vue3-carousel/dist/carousel.css";
import { computed, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

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
    content: "src/assets/images/Remove-bg.ai_1700024262698.png",
    bgColor: "#f7edff",
  },
]);
</script>
<style scoped></style>

<template>
    <div class="mt-10 mb-[4%]">
      <carousel :items-to-show="1" :autoplay="5000" :wrap-around="true">
        <slide v-for="(img, index) in imgs" :key="index">
          <div
            :style="{ background: img.bgColor }"
            class="flex justify-around items-center h-[450px] w-[100%]"
          >
          <div class="w-[1180px] flex items-center">

            <div class="flex flex-col items-start gap-4">
              <h1 class="text-[44px]  font-[900]">{{ img.text }}</h1>
              <p class="font-[600] w-[650px] text-[16px] text-start text-[#545D6A]">{{ img.desc }}</p>
              <button
                class="bg-[#134e9b] hover:bg-[#0c56b6] text-white w-[160px] font-bold py-2 px-4 rounded"
              >
                Batafsil
              </button>
            </div>
            <div class="w-[550px] h-[100%] relative">
              <img
                class="h-[450px] w-[100%] object-cover"
                :src="img.content"
                alt="Slide Image"
              />
            </div>
          </div>
          </div>
        </slide>

        <template #addons>
          <div class="flex pl-[200px]">
            <navigation />
            <pagination />
          </div>
        </template>
      </carousel>
    </div>
</template>
