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
  <div v-if="stocks.length >= 5" class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Discounted products</h1>
    </div>
  </div>
  <Product v-if="stocks.length >= 5" :imgs="stocks" />

  <Earphone />
  <div v-if="products.length >= 5" class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
    </div>
  </div>
  <Product v-if="products.length >= 5" :imgs="products" />
  <Footer />
</template>

<script setup lang="ts">
import Banner from "../../components/Carousel/MainCarousel.vue";
import Brand from "../../components/Brand/Brand.vue";
import Product from "../../components/Carousel/ProdCarousel.vue";
import Category from "../../components/Category/Category.vue";
import Earphone from "../../components/Earphone/Earphone.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";

import { ref, onMounted } from "vue";
import { useClientStore } from "../../stores/client/client";
import { useViewsStore } from "../../stores/last-views/views";
import { useProductStore } from "../../stores/products/product";
const store = useClientStore();
const storeProduct = useProductStore();
const storeView = useViewsStore();

const userLocation = ref({});
const city = ref(null);

onMounted(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        userLocation.value = { latitude, longitude };
        getCityFromCoordinates(latitude, longitude);

        // console.log("User Location:", userLocation.value);
      },
      (error) => {
        console.error("Error getting user location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

  async function getCityFromCoordinates(latitude: any, longitude: any) {
    const apiKey = "8cd517dc4ea348fba36cdd2dc038cf67";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const cityResult = data.results[0].components.city;

        if (cityResult) {
          city.value = cityResult;
          document.cookie = `city=${cityResult}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/`;
        }
      }
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  }
});

const getUniqueUserId = async () => {
  let userId = getCookie("userId");
  if (!userId) {
    userId = generateUniqueId();
    await store.createClient({ first_name: `${userId}` });
    // console.log(store.client);
    setCookie("clientId", store.client.id, 365);
    setCookie("userId", userId, 365);
  }

  return userId;
};

function getCookie(name: any) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function setCookie(name: any, value: any, days: any) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function generateUniqueId() {
  return "user_" + Math.random().toString(36).substr(2, 9);
}
getUniqueUserId();

const products = ref([]);

const id = getCookie("clientId");
const stocks = ref([]);
onMounted(async () => {
  await storeProduct.getProductInStock();
  storeProduct.stocks.forEach((item) => {
    item.product.to = item.to;
    stocks.value.push(item.product);
  });
  await storeView.getClientViews(id);
  storeView.views.forEach((item) => {
    const matching = stocks.value.find((prod) => prod.id == item.product_id);
    if (matching) {
      item.product.to = matching.to;
    }
    products.value.push(item.product);
  });
});
</script>

<style lang="scss" scoped></style>
