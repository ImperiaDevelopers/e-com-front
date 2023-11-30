<template>
  <Header />
  <div class="flex justify-center w-screen">
    <div class="w-[1180px] justify-center">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Savat</h1>
      <div class="flex justify-between mb-[20%]">
        <div class="grid gap-8 w-[800px] mb-40">
          <div
            class="flex h-[170px]"
            v-for="(i, index) in store.baskets"
            :key="index"
            style="gap: 31px"
          >
            <div
              class="w-[200px] h-[170px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
            >
              <img class="w-[120px]" :src="i.product.image[0].image" alt="" />
            </div>
            <div class="flex-col w-[560px] h-[170px] flex justify-around">
              <div class="flex items-start justify-between">
                <h1 class="text-xl w-[288px]">{{ i.product?.name }}</h1>
                <h1 class="text-[24px] text-black">
                  {{ parseFormattedNumber(i.product?.price) }} uzs
                </h1>
              </div>
              <div class="flex justify-between">
                <div
                  class="flex w-[50px] h-[40px] bg-[#EBEFF3] rounded-md cursor-pointer items-center justify-center"
                >
                  <i
                    @click="deleteProduct(index, i.id)"
                    class="fa-regular fa-trash-can text-[24px] text-[#00000099] hover:text-black"
                  ></i>
                </div>
                <div class="flex items-center">
                  <i
                    v-bind:class="{ 'pointer-events-none': i.count === 1 }"
                    @click="decrease_quantity(index, i.id)"
                    class="fa-solid fa-minus cursor-pointer w-[50px] h-[40px] text-[24px] text-[#00000099] bg-[#EBEFF3] text-center py-[6%] rounded-md hover:text-black"
                  ></i>
                  <h1 class="text-[24px] text-black w-[60px] text-center">
                    {{ i.quantity }}
                  </h1>
                  <i
                    @click="increase_quantity(index, i.id)"
                    class="fa-solid fa-plus w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-[#00000099] cursor-pointer text-center py-[6%] rounded-md hover:text-black"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-[365px] h-[330px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
        >
          <div class="flex flex-col w-[300px] h-[300px] gap-5 justify-center">
            <h1 class="text-[18px] font-bold text-center text-black">
              Sizning buyurtmalaringiz
            </h1>

            <div class="flex justify-between items-start">
              <h1 class="text-[14px]">Yetkazib berish</h1>
              <p class="font-bold text-[18px] text-black">Bepul</p>
            </div>
            <div class="flex justify-between items-center">
              <h1 class="text-[14px]">Jammi summa:</h1>
              <p class="font-bold text-[20px] text-black">
                {{ parseFormattedNumber(calculateAllSumm()) }} uzs
              </p>
            </div>
            <button
              class="h-[20%] mt-[5%] rounded-md bg-[#134E9B] text-[white]"
            >
              Hoziroq sotib olish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Products :imgs="store1.products" />
  <Footer />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "../../components/Header/Header.vue";
import Products from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/Footer.vue";
import { useBasketStore } from "../../stores/basket/basket";
import { useProductStore } from "../../stores/products/product";
import Notification from "../../plugins/Notification";
const store1 = useProductStore();
const store = useBasketStore();

const calculateAllSumm = () => {
  let sum = ref(0);
  store.baskets.forEach((i) => {
    sum.value += i.product.price * i.quantity;
  });
  return sum.value;
};

const increase_quantity = async (index: number, id: number) => {
  store.baskets[index].quantity += 1;
  const payload = {
    quantity: store.baskets[index].quantity,
  };
  await store.updateClientCard(id, payload);
};

const decrease_quantity = async (index: number, id: number) => {
  if (store.baskets[index].quantity > 1) store.baskets[index].quantity -= 1;
  const payload = {
    quantity: store.baskets[index].quantity,
  };
  await store.updateClientCard(id, payload);
};

const deleteProduct = async (index: number, id: number) => {
  store.baskets.splice(index, 1);
  await store.deleteClientCard(id);
};

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
const parseFormattedNumber = (number: any) => {
  let numberString = number.toString();
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return numberString;
};

onMounted(async () => {
  await store.getClientBaskets(+getCookie("clientId")); //BU yerda client_id qo'lda yozilgan aslida backenddan olingan bo'lishi kerak
  await store1.getProducts();
});
</script>

<style lang="scss" scoped>
.ebani-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
