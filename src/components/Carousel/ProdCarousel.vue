<template>
  <Carousel
    :v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="3000"
    :pauseAutoplayOnHover="true"
    :wrap-around="true"
    class="mb-[4%]"
  >
    <Slide v-for="(img, index) in imgs" :key="index">
      <div class="flex-col relative h-[422px]">
        <div
          class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex  justify-center items-center relative"
        >
        <div class="w-[180px]">

          <img
            class="m-auto object-cover"
            :src="img.image[0]?.image"
            alt="Slide Image"
          />
        </div>
        </div>
        <button class="absolute top-[20px] left-[235px]">
          <i class="fa-regular fa-heart text-[#545D6A] hover:text-[black]"></i>
        </button>
        <div class="flex-col w-[273px]">
          <div class="h-[56px]">
            <h4 class="text-start mt-2 text-[14px]">{{ img.name }}</h4>
          </div>
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
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const props = defineProps({
  imgs: Array,
});
console.log(props.imgs);

const settings = {
  itemsToShow: 0.8,
  snapAlign: "center",
};

const breakpoints = {
  700: {
    itemsToShow: 3.3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5.2,
    snapAlign: "center",
  },
};
</script>
