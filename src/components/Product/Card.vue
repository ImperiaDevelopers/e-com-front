<template>
  <div class="flex-col relative">
    <div
      class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center justify-center relative"
      @click="otish(props?.data?.id)"
    >
      <div class="w-[180px]">
        <img
          class="m-auto object-cover"
          :src="props?.data?.image[0]?.image"
          alt="Slide Image"
        />
      </div>
    </div>
    <div
    v-if="props.to"
      class="px-[10px] py-[5px] bg-white text-[#E81504] absolute top-[4%] left-[10%] rounded-md"
    >
      Aksiyada
    </div>
    <div
    v-if="props.to"
      class="w-[140px] flex justify-center py-[3px] bg-white text-[#E81504] absolute top-[62%] right-[2%] rounded-md"
    >
      {{ formatCountdown() }}
    </div>
    <button
      @click="favourities(props?.data?.id)"
      class="absolute top-[20px] left-[235px]"
    >
      <i
        v-if="heart"
        class="fa-regular fa-heart text-[#545D6A] hover:text-[black]"
      ></i>
      <i v-else class="fa-solid fa-heart text-[#545D6A] hover:text-[black]"></i>
    </button>

    <div class="flex-col w-[273px]">
      <div class="h-[40px]">
        <h4 class="text-start mt-2 text-[14px]">{{ props?.data?.name }}</h4>
      </div>
      <div class="flex justify-between">
        <p class="text-[20px] font-[700] text-start mt-[28px]">
          {{ parseFormattedNumber(props?.data?.price) }} uzs
        </p>

        <div class="flex gap-2">
          <i
            class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#dde2e6]"
          >
          </i>
          <i
            @click="addProductToCard(props.data)"
            class="fa-solid fa-cart-shopping p-3 bg-[#134E9B] text-white rounded-md cursor-pointer mt-5 hover:bg-[#0c56b6ec]"
          >
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  isRuntimeOnly,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import { useProductStore } from "../../stores/products/product";
import { useViewsStore } from "../../stores/last-views/views";
import Notification from "../../plugins/Notification";
import { useRouter } from "vue-router";
import { ITEM_RENDER_EVT } from "element-plus/es/components/virtual-list/src/defaults.mjs";
import { dateEquals } from "element-plus";
const router = useRouter();

const store = useProductStore();
const storeView = useViewsStore();
const time = ref(new Date());
const updateCountdown = () => {
  time.value = new Date(); // Update the current time
};
onMounted(() => {
  const countdownTimer = setInterval(updateCountdown, 1000);
  // Clear the timer when the component is unmounted
  onUnmounted(() => clearInterval(countdownTimer));
});
const formatCountdown = () => {
  const targetDate = new Date(props?.to).getTime();
  const currentTime = time.value.getTime();
  const timeDifference = targetDate - currentTime;

  if (timeDifference <= 0) {
    return "Expired";
  }

  const seconds = Math.floor(timeDifference / 1000);
  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
};

const props = defineProps({
  data: Object,
  heart: Boolean,
  to: String,
});

const parseFormattedNumber = (number: any) => {
  number = Number(number);
  let numberString = number.toLocaleString();

  // Keep only the last two digits after the decimal point
  const decimalIndex = numberString.indexOf(".");
  if (decimalIndex !== -1) {
    numberString = numberString.slice(0, decimalIndex + 4);
  }

  return numberString;
};

const storeFav = useFavouritesStore();
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
const otish = async (id: any) => {
  await storeView.addViews({ client_id: clientId, product_id: id });
  await router.push(`/product/${id}`);
  location.reload();
};

const heart = ref(true);

onMounted(async () => {
  const localStorageKey = `heart_${props?.data?.id}`;
  const storedHeart = localStorage.getItem(localStorageKey);

  if (storedHeart !== null) {
    heart.value = JSON.parse(storedHeart);
  }
  await store.getProductInStock();
});
const data = ref();
const favourities = async (id: any) => {
  const localStorageKey = `heart_${id}`;

  const localSK = `h_${id}`;

  if (heart.value === true) {
    heart.value = false;
    data.value = await storeFav.createFavourites({
      client_id: clientId,
      product_id: id,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(false));
    localStorage.setItem(localSK, JSON.stringify(data.value.id));
  } else {
    heart.value = true;
    const storedId = localStorage.getItem(localSK);
    await storeFav.deleteFavourites(storedId);
    localStorage.setItem(localStorageKey, JSON.stringify(true));
  }
  location.reload();
};

const addProductToCard = async (item: any) => {
  const payload = {
    product_id: item.id,
    client_id: getCookie("clientId"),
    price: item.price,
    quantity: 1,
  };
  await store.addProductToCard(payload);
  Notification(`Mahsulot savatga qo'shildi: ${item.name}`, "success");
};
</script>

<style scoped></style>
