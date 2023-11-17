<template>
  <Header />
  <Banner />
  <Brand />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Most popular product</h1>
    </div>
  </div>
  <Product />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Most popular product</h1>
    </div>
  </div>
  <Product />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Most popular product</h1>
    </div>
  </div>
  <Product />
  <Category />
  <Earphone />
  <Footer />
</template>

<script setup>
import Banner from "../../components/Carousel/MainCarousel.vue";
import Brand from "../../components/Brand/Brand.vue";
import Product from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/footer/footer.vue";
import Category from "../../components/Category/Category.vue";
import Header from "../../components/Header.vue";
import Earphone from "../../components/Earphone/Earphone.vue";
</script>

<style lang="scss" scoped></style>
