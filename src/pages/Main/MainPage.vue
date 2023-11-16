<template>
  <div>
    <Banner />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">
      Most popular products
    </h1>
    <Product />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">
      Most popular products
    </h1>
    <Product />
    <h1 class="text-[32px] color-[#000000] pl-[131px]">
      Most popular products
    </h1>
    <Product />
    <Footer />
  </div>
</template>

<script setup>
import Banner from "../../components/Carousel/MainCarousel.vue";
import Product from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/Footer.vue";
</script>

<style lang="scss" scoped></style>
