<template>
  <div>
    <div class="flex gap-[200px]">
      <h1
        class="text-[#929599] text-[18px] mb-[4%] cursor-pointer"
        @click="changer = true"
        :class="{ active: changer }"
      >
        Telefon xususiyatlari
      </h1>
      <h1
        class="text-[#929599] text-[18px] mb-[4%] cursor-pointer"
        @click="changer = false"
        :class="{ active: !changer }"
      >
        Mijozlarning fikrlari
      </h1>
    </div>
    <div
      v-if="changer"
      v-for="(item, index) in performances"
      :key="index"
      class="flex flex-col w-[650px] gap-[8px]"
    >
      <div class="flex mt-2 text-[16px] text-[#545D6A]">
        <h1 class="w-[400px]">{{ item }}</h1>
        <h1>{{ per_values[index] }}</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="650"
        height="2"
        viewBox="0 0 650 2"
        fill="none"
      >
        <path d="M0 1H650" stroke="#B6BABF" stroke-dasharray="5 5" />
      </svg>
    </div>
    <!-- Comments -->
    <div v-if="!changer" class="scroll-container">
      <div v-if="!changer" v-for="(item, index) in comments" :key="index">
        <div class="flex gap-10">
          <div
            class="bg-[#c9d0da] w-[240px] h-[77px] rounded-full flex items-center justify-center"
          >
            <img :src="item.image" alt="" class="w-[75px]" />
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-[18px]">{{ item.name }}</p>
            <div class="text-[gray] flex gap-1 text-[15px]">
              <i
                v-for="(star, index) in 5"
                :key="index"
                :class="getStarClass(index, item.rating)"
              ></i>
            </div>
            <p class="text-[12px] text-[#6f7275]">{{ item.date }}</p>
            <span class="text-[16px] text-[#515D6C]">{{ item.comment }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
const changer = ref(true);
const performances = ref([
  "Brend",
  "Sim kartalar soni",
  "O'lchamlari",
  "Modeli",
  "Akumlyator hajmi",
  "Yadrolar soni",
  "Tezkor xotiram RAM",
  "Ichki xotira ROM",
  "Protsessori",
]);
const per_values = ref([
  "Vivo",
  "2",
  "75,09х155,11х8,28",
  "Redmi T12",
  "4000 amp",
  "8",
  "6 GB",
  "128 GB",
  "MediaTek Helio P35 (MT6765)",
]);

const comments = ref([
  {
    image: "src/assets/images/userjon.png",
    name: "Evgeniy Viktorovich",
    rating: 2,
    date: "September 3, 2022",
    comment: `The most inconvenient application written with the left heel. The interface is awkward. Putting something up for sale is as difficult as possible. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass`,
  },
  {
    image: "src/assets/images/userjon.png",
    name: "Evgeniy Viktorovich",
    rating: 5,
    date: "September 3, 2022",
    comment: `The most inconvenient application written with the left heel. The interface is awkward. Putting something up for sale is as difficult as possible. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass`,
  },
  {
    image: "src/assets/images/product-imgs/single.png",
    name: "Evgeniy Viktorovich",
    rating: 4,
    date: "September 3, 2022",
    comment: `The most inconvenient application written with the left heel. The interface is awkward. Putting something up for sale is as difficult as possible. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass`,
  },
]);
const getStarClass = (index: number, rating: number) => {
  if (index < rating) {
    return "fa-solid fa-star text-[#FBB412]"; // Change 'text-black' to your desired filled star color
  } else {
    return "fa-regular fa-star text-gray";
  }
};
</script>

<style lang="scss" scoped>
.scroll-container {
  width: 680px;
  height: 380px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.scroll-container::-webkit-scrollbar {
  width: 0; /* Remove scrollbar width */
}

/* Optional: You can add additional styling to the track and thumb if needed */
.scroll-container::-webkit-scrollbar-track {
  background-color: transparent; /* Change to your desired color */
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: transparent; /* Change to your desired color */
}
.active {
  color: black;
  font-weight: 700;
  text-decoration: underline 2px;
}
</style>
