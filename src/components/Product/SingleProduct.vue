<template>
  <div class="w-[100%] flex justify-center mt-[4%]">
    <div class="w-[1180px] flex flex-col gap-[60px]">
      <div class="flex justify-between">
        <div class="flex-col flex gap-4">
          <h1 class="text-[32px] font-[700]">
           {{ store.product.name }}
          </h1>
          <div class="w-[600px]">
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="true"
              v-model="currentSlide"
              :transition="800"
            >
              <Slide
                v-for="slide in store.images"
                :key="slide"
                class="h-[430px] w-[500px] bg-[#EBEFF3] flex items-center justify-center rounded-[10px]"
              >
                <div class="carousel__item flex items-center justify-center">
                  <img :src="slide.image" alt="" class="h-[350px]" />
                </div>
              </Slide>
              <template #addons>
                <div class="flex">
                  <navigation />
                </div>
              </template>
            </Carousel>

            <Carousel
              class="mt-3"
              id="thumbnails"
              :items-to-show="4"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
              :transition="400"

        
            >
              <Slide
                v-for="slide in store.images"
                :key="slide"
                class="h-[80px] "
              >
                <div
                  class="carousel__item flex items-center justify-center h-full w-[96%] rounded-[5%] bg-[#EBEFF3]"
                  
                >
                  <img :src="slide.image" alt="" class="h-[60px]" />
                </div>
              </Slide>
              <template #addons>
                <div class="flex">
                  <navigation />
                </div>
              </template>
            </Carousel>
            <!-- <div class="flex-col flex gap-3">
              <div
                v-for="(img, index) in store.images"
                :key="index"
                class="w-[120px] h-[100px] bg-[#EBEFF3] flex items-center justify-center"
              >
                <img :src="img.image" class="w-[54px] h-[54px]" />
              </div>
            </div> -->
            <!-- <div
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
            </div> -->
          </div>
        </div>
        <div class="flex-col flex justify-center gap-[70px]">
          <h1 class="text-[#515D6C] text-[16px]">
            Narxi
            <span class="ml-[20px] text-[32px] text-[#06172D]">{{
             store.product.price
            }}   uzs</span>
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
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import { onMounted, ref } from "vue";
import { useProductStore } from "../../stores/products/product";
import { useRoute } from "vue-router";
const route=useRoute()
const store = useProductStore();

const currentSlide = ref(0);

console.log(route.params.id)

onMounted(() => {
  store.getProductImage(`${route.params.id}`);
  store.getProductId(`${route.params.id}`)
});
</script>

<style lang="scss" scoped></style>
