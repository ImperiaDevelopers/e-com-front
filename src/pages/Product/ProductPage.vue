<template>
  <Header />
 
  <router-view></router-view>
  <div v-if="products.length>=5" class="flex items-center justify-center mt-[4%]">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Products v-if="products.length>=5" :imgs="products" />
  <Footer />
</template>

<script setup lang="ts">
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";
import { onMounted, ref } from "vue";
import Loading from "../../components/Loader/Loading.vue";
import { useViewsStore } from "../../stores/last-views/views";
3

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
onMounted(async () => {
  await store.getClientViews(id);
  store.views.forEach((item) => {
    products.value.push(item.product);
  });
});
console.log(products.value)
</script>

<style lang="scss" scoped></style>
