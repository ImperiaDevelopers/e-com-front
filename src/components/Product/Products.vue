<template>
  <div class="w-[100%] flex justify-center mt-[2%]">
    <div class="w-[1180px] flex gap-4">
      <div
        class="w-[280px] h-[900px] bg-[#EBEFF3] flex flex-col items-center py-[15px] rounded-md"
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
          <div v-for="(item, index) in store.filter_products" :key="index">
            <div class="flex-col relative">
              <div
                class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
                @click="otish(item.id)"
              >
                <div class="w-[180px] img-ust">
                  <img
                    class="m-auto object-cover"
                    :src="item.image[item.image.length - 1]?.image"
                    alt="Slide Image"
                  />
                </div>
              </div>
              <button class="absolute top-[20px] left-[235px]">
                <i
                  class="fa-regular fa-heart text-[#545D6A] hover:text-[black]"
                ></i>
              </button>
              <div class="flex-col w-[273px]">
                <div class="h-[56px]">
                  <h4 class="text-start mt-2 text-[14px]">{{ item.name }}</h4>
                </div>
                <div class="flex justify-between">
                  <p class="text-[20px] font-[700] text-start mt-[28px]">
                    {{ item.price }}
                  </p>

                  <div class="flex gap-2">
                    <i
                      class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#dde2e6]"
                    >
                    </i>
                    <i
                      @click="addProductToCard(item)"
                      class="fa-solid fa-cart-shopping p-3 bg-[#134E9B] text-white rounded-md cursor-pointer mt-5 hover:bg-[#0c56b6ec]"
                    >
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card
            v-for="(item, index) in store.filter_products"
            :data="item"
            :key="index"
            :favourities="favourities"
            :heart="heart"
            :otish="otish"
          />
        </div>
        <el-pagination
          v-if="store.filter_products.length"
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
import { onMounted, ref, watch } from "vue";
import { useProductStore } from "../../stores/products/product";
import Notification from "../../plugins/Notification";
import { useRouter, useRoute } from "vue-router";
import { useBasketStore } from "../../stores/basket/basket";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import Card from "./Card.vue";

const router = useRouter();
const route = useRoute();

const value = ref([200000, 18000000]);
const addProductToCard = async (item: any) => {
  const payload = {
    product_id: item.id,
    client_id: 1,
    price: item.price,
    quantity: 1,
  };
  await store.addProductToCard(payload);
  Notification(`Mahsulot savatga qo'shildi: ${item.name}`, "success");
};
const brend = ref();

const otish = (id: any) => {
  router.push(`/product/${id}`);
};

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

const payload = ref({ from: 0, to: 10000000000000000000000000000000 });

onMounted(() => {
  watch(value, (value) => {
    payload.value = { from: value[0], to: value[1] };
    store.getFilter(payload.value);
  });
  store.getFilter(payload.value);
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

.img-ust:hover {
  cursor: pointer;
  scale: 1.05;
  transition: all 0.4s;
}
</style>
