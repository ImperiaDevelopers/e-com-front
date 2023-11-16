<template>
  <div>
    <Header />
    <Banner />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">Most popular product</h1>
    <Product />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">Most popular product</h1>
    <Product />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">Most popular product</h1>
    <Product />
  </div>
</template>

<script setup>
import Banner from "../../components/Carousel/MainCarousel.vue";
import Product from "../../components/Carousel/ProdCarousel.vue";
import Header from "../../components/Header.vue";
</script>

<style lang="scss" scoped></style>
