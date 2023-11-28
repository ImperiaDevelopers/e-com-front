<template>
  <div>
    <Header />
    <h1>Likes</h1>
    <div>
      <div class="flex flex-wrap gap-8">
        <Card
          v-for="(item, index) in storeFav.client_fav"
          :data="item"
          :key="index"
        />
      </div>
      <!-- <el-pagination
        v-if="store.filter_products.length"
        background
        layout="prev, pager, next"
        class="mt-[6%]"
        :total="1000"
        prev-text="Back"
        next-text="Next"
        style=":#134e9b "
      /> -->
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../../components/Header/Header.vue";
import ProdCarusel from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/Footer.vue";
import Card from "../../components/Product/Card.vue";
import { useProductStore } from "../../stores/products/product";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import { onMounted } from "vue";

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
onMounted(async () => {
  await storeFav.getClientFavourites({ client_id: clientId });
  console.log(storeFav.client_fav);
});
</script>

<style lang="scss" scoped></style>
