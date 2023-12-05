<template>
  <Header />

  <div class="w-[100%] mt-[2%] flex flex-col items-center">
    <div
      v-if="store.client_fav.length == 0"
      class="w-1/6 flex flex-col justify-center items-center"
    >
      <svg class="w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M9 20C9 21.1 8.1 22 7 22S5 21.1 5 20 5.9 18 7 18 9 18.9 9 20M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8M12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z"
          fill="#BABABA"
        />
      </svg>
      <h1 class="text-center text-black text-[20px]">
        Bu yerda hozircha hech nima yo`q
      </h1>
      <router-link to="/">
        <button
          class="bg-[#134E9B] mt-6 py-2 px-4 text-white font-semibold rounded-lg shadow-md hover:bg-[#0c56b6] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Bosh Sahifa
        </button></router-link
      >
    </div>
    <div v-else>
      <div class="flex w-[1180px]">
        <div class="flex flex-wrap gap-7">
          <Card
            v-for="(item, index) in products"
            :data="item"
            :key="index"
            :to="item.to ? item.to : null"
          />
        </div>
      </div>
      <div class="w-[1180px] mt-[6%]">
        <el-pagination
          v-if="store.client_fav.length"
          background
          layout="prev, pager, next"
          :total="1000"
          prev-text="Back"
          next-text="Next"
          style=":#134e9b "
        />
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Header from "../../components/Header/Header.vue";
import ProdCarusel from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/Footer.vue";
import Card from "../../components/Product/Card.vue";
import { onMounted, ref } from "vue";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import { useProductStore } from "../../stores/products/product";
const store = useFavouritesStore();
const storeProduct = useProductStore();
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
const products = ref([]);
const stocks = ref([]);
onMounted(async () => {
  storeProduct.getProductInStock();
  storeProduct.stocks.forEach((item) => {
    item.product.to = item.to;
    stocks.value.push(item.product);
  });

  await store.getClientFavourites({ client_id: clientId });
  store.client_fav.forEach(async (item) => {
    const matching = stocks.value.find((prod) => prod.id == item.product_id);
    if (matching) {
      item.product.to = matching.to;
    }
    products.value.push(item.product);
  });
});
</script>

<style lang="scss" scoped></style>
