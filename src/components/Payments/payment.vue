<template>
  <div class="flex flex-wrap gap-5 m-5 w-[820px] justify-center">
    <!-- One -->
    <div
      v-if="bosildimi[0].one == false"
      @click="changethem('one')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1831.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Payme orqali to’lov qilish</h1>
    </div>
    <div
      v-if="bosildimi[0].one == true"
      @click="changethem('one')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1831.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Payme orqali to’lov qilish</h1>
    </div>

    <!-- Two -->
    <div
      v-if="bosildimi[1].two == false"
      @click="changethem('two')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1832@2x (1).png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Click orqali to’lov qilish</h1>
    </div>
    <div
      v-if="bosildimi[1].two == true"
      @click="changethem('two')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1832@2x (1).png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Click orqali to’lov qilish</h1>
    </div>

    <!-- Three -->
    <div
      v-if="bosildimi[2].three == false"
      @click="changethem('three')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image-removebg-preview (6) 1.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Uzcard orqali to’lov qilish</h1>
    </div>
    <div
      v-if="bosildimi[2].three == true"
      @click="changethem('three')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image-removebg-preview (6) 1.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Uzcard orqali to’lov qilish</h1>
    </div>

    <!-- Four -->
    <div
      v-if="bosildimi[3].four == false"
      @click="changethem('four')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image-removebg-preview (7) 1.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Humo orqali to’lov qilish</h1>
    </div>
    <div
      v-if="bosildimi[3].four == true"
      @click="changethem('four')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image-removebg-preview (7) 1.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Humo orqali to’lov qilish</h1>
    </div>

    <!-- Five -->
    <div
      v-if="bosildimi[4].five == false"
      @click="changethem('five')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1833.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">VISA orqali to’lov qilish</h1>
    </div>
    <div
      v-if="bosildimi[4].five == true"
      @click="changethem('five')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1833.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">VISA orqali to’lov qilish</h1>
    </div>

    <!-- Six -->
    <div
      v-if="bosildimi[5].six == false"
      @click="changethem('six')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1834.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">
        MasterCard orqali to’lov qilish
      </h1>
    </div>
    <div
      v-if="bosildimi[5].six == true"
      @click="changethem('six')"
      class="flex w-[400px] h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image 1834.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">
        MasterCard orqali to’lov qilish
      </h1>
    </div>

    <!-- Seven -->
    <div
      v-if="bosildimi[6].seven == false"
      @click="changethem('seven')"
      class="flex w-full h-[120px] rounded-[6px] bg-[#EBEFF3] gap-[20px] items-center hover:bg-[#e5effa] pl-[195px] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image-removebg-preview (8) 1.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Naqd orqali to’lov qilish</h1>
    </div>
    <div
      v-if="bosildimi[6].seven == true"
      @click="changethem('seven')"
      class="flex w-full h-[120px] rounded-[6px] bg-[#4d85ce] text-white gap-[20px] items-center hover:bg-[#134E9B] pl-[195px] cursor-pointer"
    >
      <img
        class="flex m-10"
        src="src/assets/payment_images/image-removebg-preview (8) 1.png"
        alt=""
      />
      <h1 class="flex ml-[-40px] font-semibold">Naqd orqali to’lov qilish</h1>
    </div>
  </div>

  <div v-if="!bosildimi[6].seven">
    <h1 class="ml-8 text-[12px]">Karta raqam</h1>
    <input
      type="text"
      class="ml-5 w-[250px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[2%] text-[14px]"
      placeholder="9860 1111 2222 3333"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const bosildimi = ref([
  { one: false },
  { two: false },
  { three: false },
  { four: false },
  { five: false },
  { six: false },
  { seven: false },
]);

const changethem = (num: string) => {
  bosildimi.value.forEach((item) => {
    if (num == Object.keys(item)[0]) {
      item[Object.keys(item)[0]] = true;
    } else {
      item[Object.keys(item)[0]] = false;
    }
  });
};
</script>
<style lang="scss" scoped></style>
