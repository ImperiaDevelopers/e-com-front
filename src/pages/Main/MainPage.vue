<template>
  <div>
    <Banner />
    <Brand />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">Most popular product</h1>
    <Product />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">Most popular product</h1>
    <Product />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">Most popular product</h1>
    <Product />
    <Category />
  </div>
</template>

<script setup>
import Banner from "../../components/Carousel/MainCarousel.vue";
import Brand from "../../components/Brand/Brand.vue";
import Product from "../../components/Carousel/ProdCarousel.vue";
import Category from "../../components/Category/Category.vue";
</script>

<style lang="scss" scoped></style>
