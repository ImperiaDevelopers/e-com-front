<template>
  <div class="flex-col relative">
    <div
      class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
      @click="props.otish(props.data.id)"
    >
      <div class="w-[180px]">
        <img
          class="m-auto object-cover"
          :src="props.data.image[props.data.image.length - 1]?.image"
          alt="Slide Image"
        />
      </div>
    </div>
    <button
      @click="favourities(props.data.id)"
      class="absolute top-[20px] left-[235px]"
    >
      <i
        v-if="heart"
        class="fa-regular fa-heart text-[#545D6A] hover:text-[black]"
      ></i>
      <i
        v-if="!heart"
        class="fa-solid fa-heart text-[#545D6A] hover:text-[black]"
      ></i>
    </button>
    <div class="flex-col w-[273px]">
      <div class="h-[56px]">
        <h4 class="text-start mt-2 text-[14px]">{{ props.data.name }}</h4>
      </div>
      <div class="flex justify-between">
        <p class="text-[20px] font-[700] text-start mt-[28px]">
          {{ parseFormattedNumber(props.data.price) }} uzs
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
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useFavouritesStore } from "../../stores/favourites/favourites";

const props = defineProps({
  otish: Function,
  client_fav: Array,
  data: Object,
  heart: Boolean,
});
const parseFormattedNumber = (number: any) => {
  let numberString = number.toString();
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return numberString;
};
const storeFav = useFavouritesStore();
const heart = ref(true);
const data = ref();
const clientId = getCookie("clientId");

function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");

    if (cookieName === name) {
      return Number(cookieValue);
    }
  }

  return null;
}
const favourities = async (id: any) => {
  if (heart.value === true) {
    heart.value = false;
    data.value = await storeFav.createFavourites({
      client_id: clientId,
      product_id: id,
    });
    console.log(data.value);
  } else {
    heart.value = true;
    storeFav.deleteFavourites(data.value.id);
  }
};
</script>

<style scoped></style>
