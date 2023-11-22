<template>
  <HeaderVue />
  <div class="pl-[129px]">
    <div>
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Mahsulotlarni taqqoslash</h1>
    </div>
    <div class="flex gap-8 px-10 w-3/5">
      <div v-for="(img, index) in imgs" :key="index">
        <div
          class="w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center relative"
        >
          <img class="m-auto" :src="img.content" alt="Slide Image" />
        </div>
        <div class="flex-col w-[273px]">
          <h4 class="text-start mt-2 text-[14px]">{{ img.text }}</h4>
          <div class="flex justify-between">
            <p class="text-[20px] font-[700] text-start mt-[28px]">
              {{ img.price }}
            </p>
            <div class="flex gap-2">
              <i
                class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#dde2e6]"
              >
              </i>
              <i
                class="fa-solid fa-cart-shopping p-3 bg-[#134E9B] text-white rounded-md cursor-pointer mt-5 hover:bg-[#0c56b6ec]"
              >
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="underline decoration-solid text-[18px] font-bold mt-10">
      Telfon xususiyatlari
    </h1>
    <div class="flex w-3/5 mt-6">
      <div class="flex flex-col gap-5 w-2/5">
        <p>Brand</p>
        <p>CIM kartalar soni</p>
        <p>O`lchamlari</p>
        <p>Modeli</p>
        <p>Akumulyator hajimi</p>
        <p>Yadrolar soni</p>
        <p>Tezkor xotira RAM</p>
        <p>Ichki xotira ROM</p>
        <p>Protsessor</p>
      </div>
      <div
        class="grid grid-cols-4 gap-8"
        v-for="(i, index) in information"
        :key="index"
      >
        <div class="grid grid-rows-6 gap-6">
          <h1>{{ i.Brand }}</h1>
          <h1>{{ i.CIM_soni }}</h1>
          <h1>{{ i.Olchamlari }}</h1>
          <h1>{{ i.Modeli }}</h1>
          <h1>{{ i.Akumulyator }}</h1>
          <h1>{{ i.Yadrolar }}</h1>
          <h1>{{ i.RAM }}</h1>
          <h1>{{ i.ROM }}</h1>
          <h1>{{ i.Protsessor }}</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="pl-[129px]">
    <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
  </div>
  <Products />
  <FooterVue />
</template>

<script setup lang="ts">
import { ref } from "vue";
import FooterVue from "../../components/Footer/Footer.vue";
import HeaderVue from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";

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
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi.",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },
]);
const information = ref([
  {
    Brand: "Vivo",
    CIM_soni: "31",
    Olchamlari: "31",
    Modeli: "31",
    Akumulyator: "24",
    Yadrolar: "34",
    RAM: "456",
    ROM: "756",
    Protsessor: "5767",
  },
  {
    Brand: "Vivo",
    CIM_soni: "31",
    Olchamlari: "31",
    Modeli: "31",
    Akumulyator: "24",
    Yadrolar: "34",
    RAM: "456",
    ROM: "756",
    Protsessor: "5767",
  },
  {
    Brand: "Vivo",
    CIM_soni: "31",
    Olchamlari: "31",
    Modeli: "31",
    Akumulyator: "24",
    Yadrolar: "34",
    RAM: "456",
    ROM: "756",
    Protsessor: "5767",
  },
]);
</script>

<style lang="scss" scoped></style>
