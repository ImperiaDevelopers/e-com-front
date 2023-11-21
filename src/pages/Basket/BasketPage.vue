<template>
  <Header />
  <h1 class="pl-[129px] text-[32px] font-[700] mb-[1.5%]">Savat</h1>
  <div class="flex gap-8 mb-40 justify-around">
    <div class="grid gap-12">
      <div class="grid gap-8 justify-between">
        <div
          class="pl-[129px] flex h-[170px]"
          v-for="(i, index) in basket"
          :key="index"
          style="gap: 31px"
        >
          <img class="w-[202px] bg-[#EBEFF3] rounded" :src="i.image" alt="" />
          <div class="flex-col w-[900px] h-[145px]">
            <div class="flex justify-between items-start">
              <h1 class="text-[30px]">{{ i.text }}</h1>
              <h1 class="text-[30px] font-[400] mb-[1.5%]">{{ i.price }}</h1>
            </div>
            <div class="flex justify-between">
              <div class="flex" style="gap: 10px">
                <div
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <img src="src/assets/images/heart.jpg" alt="" />
                </div>
                <div
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <img
                    src="src/assets/images/fluent_delete-24-regular.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <img src="src/assets/images/math-minus.png" alt="" />
                </div>
                <h1 class="text-[28px] font-[400] mx-3 text-[#697B92]">
                  {{ i.count }}
                </h1>
                <div
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <img src="src/assets/images/math-plus.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ebani-row w-1/5 h-3/5 bg-[#EBEFF3]">
      <h1 class="text-[18px] font-bold pt-10">Sizning haridingiz</h1>
      <div class="flex flex-row justify-between">
        <h1>Yetkazib berish:</h1>
        <h1 class="text-[18px] font-bold">Bepul</h1>
      </div>
      <div class="flex flex-row justify-between">
        <h1>Jami summa:</h1>
        <h1 class="text-[24px] font-bold">12 568 000 usz</h1>
      </div>
      <div
        class="flex justify-center bg-[#134E9B] rounded-md w-3/5 h-1/5 mt-10 outline-none"
      >
        <button class="text-white p-[10px] ps-5 pe-5 font-['Roboto']">
          Hoziroq sotib olish
        </button>
      </div>
    </div>
  </div>
  <div class="pl-[129px]">
    <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
  </div>
  <ProdCarousel />
  <Footer />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "../../components/Header/Header.vue";
import ProdCarousel from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/footer.vue";

const basket = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
]);
</script>

<style lang="scss" scoped>
.ebani-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
