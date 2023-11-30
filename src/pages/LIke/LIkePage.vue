<template>
  <Header />
  <div class="w-[100%] mt-[2%] flex flex-col items-center ">
    <div class="flex w-[1180px]">
      <div class="flex flex-wrap gap-7">
        <Card v-for="(item, index) in products" :data="item" :key="index" />
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
      style=":#134e9b"
    />
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
const store = useFavouritesStore();
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
onMounted(async () => {
  await store.getClientFavourites({ client_id: clientId });
  store.client_fav.forEach((item) => {
    products.value.push(item.product);
  });
  console.log(products.value);
});
</script>

<style lang="scss" scoped></style>
