<template>
  <div class="w-[100%] flex justify-center mt-[4%]">
    <div class="w-[1180px] flex gap-4">
      <div
        class="w-[280px] h-[905px] bg-[#EBEFF3] pt-[18px] pr-[19px] pl-[29px]"
      >
        <h2 class="text-16 font-normal">Narxi[so'm]</h2>
        <div class="w-[220px] h-[100px] bg-[#000]"></div>
        <h2 class="text-16 font-normal mt-[24px]">Brendi</h2>
        <div
          class="w-[234px] h-[98px] flex flex-wrap items-start gap-4 mt-[18px]"
        >
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Vivo</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">
            Samsung
          </button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Apple</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Tecno</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Nokia</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Oppo</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Xiomi</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Redmi</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">Huawei</button>
        </div>
        <h2 class="text-16 font-normal mt-[33px]">Tezkor xotira RAM</h2>
        <div
          class="w-[234px] h-[98px] flex flex-wrap items-start gap-4 mt-[18px]"
        >
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">2GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">3GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">4GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">6GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">8GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">12GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">16GB</button>
        </div>
        <h2 class="text-16 font-normal mt-[33px]">Doimiy xotira ROM</h2>
        <div
          class="w-[234px] h-[98px] flex flex-wrap items-start gap-1 mt-[18px]"
        >
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">32GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">64GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">128GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">256GB</button>
          <button class="w-[66px] h-[25px] rounded-xl bg-[#fff]">512GB</button>
        </div>
        <h2 class="text-16 font-normal mt-[33px]">Akumlyator hajmi</h2>
        <div
          class="w-[234px] h-[98px] flex flex-wrap items-start gap-3 mt-[18px]"
        >
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            3000mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            3200mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            3600mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            4000mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            4500mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            5000mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            6000mAh
          </button>
          <button class="w-[80px] h-[25px] rounded-xl bg-[#fff]">
            7000mAh
          </button>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap gap-8">
          <div v-for="(img, index) in imgs" :key="index">
            <div class="flex-col relative">
              <div
                class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center"
              >
                <img class="m-auto" :src="img.content" alt="Slide Image" />
              </div>
              <button class="absolute top-[20px] left-[235px]">
                <i
                  class="fa-regular fa-heart text-[#545D6A] hover:text-[black]"
                ></i>
              </button>
              <div class="flex-col w-[273px]">
                <div class="h-[56px]">
                  <h4 class="text-start mt-2 text-[14px]">{{ img.text }}</h4>
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
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          class="mt-[6%]"
          :total="1000"
          prev-text="Back"
          next-text="Next"
          style=":#134e9b "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const imgs = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },

  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi ",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },

  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi ",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },
]);


</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

span {
  display: inline-block;
  margin-top: 10px;
  font-size: 1.2em;
}
</style>
