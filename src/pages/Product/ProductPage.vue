<template>
  <Header />
  <router-view></router-view>
  <div class="w-[100%] mt-[2%] flex flex-col items-center">
    <div class="flex w-[1180px]">
      <div class="flex flex-wrap gap-7"></div>
    </div>
  </div>
  <div
    v-if="products.length >= 5"
    class="flex items-center justify-center mt-[4%]"
  >
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Products v-if="products.length >= 5" :imgs="products" />
  <Footer />
</template>

<script setup lang="ts">
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";
import { onMounted, ref } from "vue";
import { useViewsStore } from "../../stores/last-views/views";
import { useProductStore } from "../../stores/products/product";
import Card from "../../components/Product/Card.vue";

const productStore = useProductStore();
const store = useViewsStore();

function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return "";
}
const id = getCookie("clientId");
const products = ref([]);
const params = {
  page: 1,
  limit: 10,
  last_page: null,
};
onMounted(async () => {
  await productStore.getProducts(params);
  console.log(productStore.products);

  await store.getClientViews(id);
  store.views.forEach((item) => {
    products.value.push(item.product);
  });
});
</script>

<style lang="scss" scoped></style>
