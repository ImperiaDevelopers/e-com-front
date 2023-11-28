<template>
  <Header />
  <div class="w-[100%] flex justify-center mt-[2%]">
    <div class="w-[1180px] flex gap-4">
      <div>
        <div class="flex flex-wrap gap-8">
          <Card
            v-for="(item, index) in store.products"
            :data="item"
            :key="index"
          />
        </div>
        <el-pagination
          v-if="store.filter_products.length"
          background
          layout="prev, pager, next"
          class="mt-[6%]"
          :total="1000"
          prev-text="Back"
          next-text="Next"
          style=":#134e9b "
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "../../components/Header/Header.vue";
import ProdCarusel from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/Footer.vue";
import Card from "../../components/Product/Card.vue";
import  { onMounted } from "vue";
import { useProductStore } from "../../stores/products/product";
const store=useProductStore()
onMounted(async() => {
  await store.getProducts()

})
</script>

<style lang="scss" scoped></style>
