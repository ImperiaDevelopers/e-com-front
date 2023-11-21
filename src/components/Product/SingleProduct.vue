<template>
  <div class="w-[100%] flex justify-center mt-[4%]">
    <div class="w-[1180px] flex flex-col gap-[60px]">
      <div class="flex gap-5">
        <div class="flex-col flex gap-4">
          <h1 class="text-[32px] font-[700]">
            Смартфон Xiaomi 12 Lite 8/128Gb
          </h1>
          <div class="flex gap-5 h-[430px]">
            <div class="flex-col flex gap-3">
              <div
                v-for="(img, index) in imgs"
                :key="index"
                class="w-[120px] h-[100px] bg-[#EBEFF3] flex items-center justify-center"
              >
                <img :src="product.content" class="w-[54px] h-[54px]" />
              </div>
            </div>
            <div
              class="w-[530px] bg-[#EBEFF3] flex items-center justify-center relative"
            >
              <img :src="product.content" alt="" />
              <div
                class="flex gap-4 absolute top-6 right-8 text-[18px] text-[#233C5FB2]"
              >
                <i class="fa-solid fa-scale-unbalanced-flip hover:text-[#000000af]"> </i>
                <i class="fa-regular fa-heart hover:text-[#000000]"></i>
              </div>
              <div class="flex w-[95%] absolute justify-between items-center">
                <button
                  class="rounded-full bg-white w-[50px] h-[50px] flex items-center justify-center hover:bg-[#cce2fd]"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  class="rounded-full bg-white w-[50px] h-[50px] flex items-center justify-center hover:bg-[#cce2fd]"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col flex justify-center gap-[70px]">
          <h1 class="text-[#515D6C] text-[16px]">
            Narxi
            <span class="ml-[20px] text-[32px] text-[#06172D]">{{
              product.price
            }}</span>
          </h1>
          <div class="flex gap-5">
            <button
              class="w-[230px] h-[56px] border-2 border-[#134E9B] text-[#134E9B] rounded-md hover:bg-[#e7f2ff]"
            >
              Savatga qo‘shish
            </button>
            <button
              class="w-[230px] h-[56px] bg-[#134E9B] text-[#ffff] rounded-md hover:bg-[#0c56b6]"
            >
              Xarid qilish
            </button>
          </div>

          <div class="flex flex-col gap-5">
            <div class="flex gap-5 text-[16px] text-[#65778F]">
              <i class="fa-solid fa-truck-fast text-[20px]"></i>
              <p>Yetkazib berish O’zbekiston bo’ylab</p>
            </div>
            <div class="flex gap-5 text-[16px] text-[#65778F]">
              <i class="fa-solid fa-store text-[20px]"></i>
              <p>Do’konning o’zidan olib ketishingiz mumkin</p>
            </div>
            <div class="flex gap-5 text-[16px] text-[#65778F]">
              <i class="fa-regular fa-clock text-[20px]"></i>
              <p>Taxminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const imgs = ref([{}, {}, {}, {}]);
const product = ref({
  text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
  price: "6 999 999 usz ",
  content: "src/assets/images/product-imgs/single.png",
});

</script>

<style lang="scss" scoped></style>
