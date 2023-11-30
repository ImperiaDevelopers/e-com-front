<template>
  <div class="flex-col relative">
    <div
      class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
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
      <div class="h-[56px]">
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
import { onMounted, ref } from "vue";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import { useProductStore } from "../../stores/products/product";
import { useViewsStore } from "../../stores/last-views/views";
import Notification from "../../plugins/Notification";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useProductStore();
const storeView = useViewsStore();

const props = defineProps({
  data: Object,
  heart: Boolean,
});

const parseFormattedNumber = (number: any) => {
  let numberString = number.toString();
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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

onMounted(() => {
  const localStorageKey = `heart_${props?.data?.id}`;
  const storedHeart = localStorage.getItem(localStorageKey);

  if (storedHeart !== null) {
    heart.value = JSON.parse(storedHeart);
  }
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
