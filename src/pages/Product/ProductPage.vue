<template>
  <Header />
  <router-view></router-view>
  <div class="flex items-center justify-center mt-[4%]">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Products />
  <Footer />
</template>

<script setup lang="ts">
import Product from "../../components/Product/Products.vue";
import Footer from "../../components/Footer/footer.vue";
import Header from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";
</script>

<style lang="scss" scoped></style>
