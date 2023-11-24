<template>
  <div class="mt-10 mb-[4%] relative">
    <carousel
      :items-to-show="1"
      :autoplay="5000"
      :wrap-around="true"
      :pauseAutoplayOnHover="true"
    >
      <slide v-for="(img, index) in imgs" :key="index">
        <div
          :style="{ background: img.bgColor }"
          class="flex justify-around items-center h-[450px] w-[100%]"
        >
          <div class="w-[1180px] flex items-center">
            <div class="flex flex-col items-start gap-4">
              <h1 class="text-[44px] font-[900]">{{ img.text }}</h1>
              <p
                class="font-[600] w-[650px] text-[16px] text-start text-[#3b3b3b]"
              >
                {{ img.desc }}
              </p>
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
        <div
          class="absolute bottom-[25px] w-[100%] flex items-center justify-center"
        >
          <div class="w-[1180px] flex items-start">
            <pagination />
          </div>
        </div>
        <div class="flex">
          <navigation />
        </div>
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { computed, ref } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

const imgs = ref([
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite     ",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii",
    content: "src/assets/images/product-imgs/image 1855.png",
    bgColor: "#e6e6e6",
  },
  {
    text: "iPhone 15 Pro",
    desc: "iPhone 15 Pro: Katta o‘nlayn muhit, kuchli kamera va tez ishlovchi kuchli texnologiyalar bilan yaratilgan.",
    content: "src/assets/images/product-imgs/Apple-iPhone-15-transformed.png",
    bgColor: "#DBBE6E",
  },
  {
    text: "Samsung S21 plus",
    desc: "Galaxy S21 Plus: Yorqin ekran, kuchli kamera to'plami va tez ishlovchi hisoblanadi, dizayn va kuchli xususiyatlar bilan ajralgan.",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700109929119.png",
    bgColor: "#A7C9C4",
  },
  {
    text: "Samsung Galaxy Z Fold4",
    desc: "Galaxy Z Fold: Yuqori tekislikli jamlanadigan, keng ekranli, tez ishlovchi qurilmadir, moddiy dizayn.",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110541839.png",
    bgColor: "#D9CBCA",
  },
]);
</script>
<style>
.carousel__pagination {
  display: flex;
  align-items: center;
}
.carousel__pagination-button::after {
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
}
.carousel__pagination-button--active::after {
  width: 48px;
  height: 48px;
  background-color: #95bef3;
  border: 15px solid white;
  border-radius: 50%;
  position: relative;
}
.carousel__pagination-button:hover::after {
  background-color: #95bef3;
  border-radius: 50%;
  color: #e6e6e6;
}
</style>
