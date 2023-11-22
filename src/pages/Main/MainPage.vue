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
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Most popular products</h1>
    </div>
  </div>
  <Product />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Most popular products</h1>
    </div>
  </div>
  <Product />
  <Category />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Discounted products</h1>
    </div>
  </div>
  <Product />

  <Earphone />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Product />
  <Footer />
</template>

<script setup>
import Banner from "../../components/Carousel/MainCarousel.vue";
import Brand from "../../components/Brand/Brand.vue";
import Product from "../../components/Carousel/ProdCarousel.vue";
import Category from "../../components/Category/Category.vue";
import Earphone from "../../components/Earphone/Earphone.vue";
import Footer from "../../components/Footer/footer.vue";
import Header from "../../components/Header/Header.vue";
</script>

<style lang="scss" scoped></style>
