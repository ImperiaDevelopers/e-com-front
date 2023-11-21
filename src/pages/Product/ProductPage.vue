<template >
  <Header />
  <router-view></router-view>
  <div class="flex items-center justify-center mt-[4%]">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Products :imgs="imgs" />
  <Footer />
</template>

<script setup lang="ts">
import Product from "../../components/Product/Products.vue";
import Footer from "../../components/Footer/footer.vue";
import Header from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";
import { ref } from "vue";

const imgs = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },

  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
  },
  {
    text: "AirPods Pro: Ergonomik dizayn, yuqori sifat, shumni o‘chirish va maslahatlar beradi ",
    price: "6 999 999 usz ",
    content: "src/assets/images/product-imgs/Remove-bg.ai_1700110810501.png",
  },
]);
</script>

<style lang="scss" scoped></style>
