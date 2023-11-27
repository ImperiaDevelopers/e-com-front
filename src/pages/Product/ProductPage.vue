<template>
  <Header />
  <router-view></router-view>
  <div class="flex items-center justify-center mt-[4%]">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Products :imgs="store.products" />
  <Footer />
</template>

<script setup lang="ts">
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";
import { onMounted, ref } from "vue";
import { useProductStore } from "../../stores/products/product";
const store = useProductStore();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};

onMounted(() => {
  store.getProducts();
});
</script>

<style lang="scss" scoped></style>
