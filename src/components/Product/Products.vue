<template>
  <div class="w-[100%] flex justify-center mt-[2%]">
    <div class="w-[1180px] flex gap-4">
      <div
        class="w-[280px] h-[900px] bg-[#EBEFF3] flex flex-col items-center py-[18px] px-[18px] rounded-md"
      >
        <div class="w-[240px] flex flex-col gap-4">
          <h2 class="text-[16px] font-[500]">Narxi[so'm]</h2>
          <div class="flex gap-2">
            <div>
              <label for="" class="text-[#00000062] text-[12px]">...dan</label>
              <input
                type="number"
                class="w-[120px] h-[48px] text-center rounded-md outline-none text-[14px]"
                v-model="value[0]"
              />
            </div>
            <div>
              <label for="" class="text-[#00000062] text-[12px]">..gacha</label>
              <input
                type="number"
                class="w-[120px] h-[48px] text-center rounded-md outline-none text-[14px]"
                v-model="value[1]"
              />
            </div>
          </div>
          <div class="slider-demo-block">
            <el-slider
              v-model="value"
              range
              :show-tooltip="false"
              :max="20000000"
            />
          </div>
        </div>
        <div class="overflow-y-auto h-[700px] scroll-container">
          <div
            class="w-[240px] flex flex-col flex-wrap gap-3 mt-[24px]"
            v-for="(item, index) in filter"
            :key="index"
          >
            <h2 class="text-[16px] font-[500]">{{ item.name }}</h2>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="(it, index) in item.values"
                :key="index"
                class="py-[7px] px-[18px] rounded-[25px] bg-[#fff] text-[12px] hover:bg-[#e5effa] hover:scale-110"
              >
                {{ it }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap gap-8">
          <Card
            v-for="(item, index) in store.filter_products"
            :data="item"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mt-[10%] flex justify-center">
    <el-pagination
      v-if="store.filter_products.length"
      background
      layout="prev, pager, next"
      class="w-[1180px] flex justify-center"
      :total="1000"
      prev-text="Back"
      next-text="Next"
      style=":#134e9b "
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useProductStore } from "../../stores/products/product";
import { useRouter, useRoute } from "vue-router";
import { useBasketStore } from "../../stores/basket/basket";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import Card from "./Card.vue";

const router = useRouter();
const route = useRoute();

const value = ref([200000, 18000000]);
const brend = ref();

const store = useProductStore();
const storeBasket = useBasketStore();
const storeFav = useFavouritesStore();
const filter = ref([
  {
    name: "Brendi",
    values: [
      "Vivo",
      "Samsung",
      "Apple",
      "Tecno",
      "Oppo",
      "Nokia",
      "Xiomi",
      "Realmi",
      "Huawei",
    ],
  },
  {
    name: "Tezkor xotira RAM",
    values: ["2GB", "3GB", "4GB", "6GB", "8GB", "12GB", "16GB"],
  },
  {
    name: "Doimiy xotira ROM",
    values: ["32GB", "64GB", "128GB", "256GB", "512GB"],
  },
  {
    name: "Akkumulyator hajmi",
    values: [
      "3000 mAh",
      "4000 mAh",
      "5000 mAh",
      "6000 mAh",
      "7000 mAh",
      "8000 mAh",
      "9000 mAh",
      "10000 mAh",
    ],
  },
  {
    name: "display",
    values: [
      "3000 mAh",
      "4000 mAh",
      "5000 mAh",
      "6000 mAh",
      "7000 mAh",
      "8000 mAh",
      "9000 mAh",
      "10000 mAh",
    ],
  },
]);

const payload = ref({
  price: {
    from: 0,
    to: 1000000000000000000000.00001,
  },
  category: Number(route.params.id),
  attributes: [],
});

onMounted(() => {
  watch(value, (value) => {
    payload.value = {
      price: {
        from: value[0],
        to: value[1],
      },
      category: Number(route.params.id),
      attributes: [],
    };
    store.getFilter(payload.value);
  });
  store.getFilter(payload.value);
});
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
onMounted(async () => {
  await storeFav.getClientFavourites({ client_id: clientId });
  // console.log(store.filter_products);
});
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
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
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.el-pagination {
  --el-color-primary: #134e9b;
}
.btn-prev .is-first {
  background-color: #134e9b;
}
.el-slider {
  --el-slider-main-bg-color: #134e9b;
  --el-border-color-light: #4d4d4d22;
}
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
