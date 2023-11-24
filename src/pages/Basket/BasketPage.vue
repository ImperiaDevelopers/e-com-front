<template>
  <Header />
  <h1 class="pl-[129px] text-[32px] font-[700] mb-[1.5%]">Savat</h1>
  <div class="flex gap-7 mb-40 justify-around">
    <div class="grid gap-12">
      <div class="grid gap-8 justify-between">
        <div
          class="pl-[129px] flex justify-between"
          v-for="(i, index) in store.baskets"
          :key="index"
          style="gap: 31px"
        >
          <div class="flex flex-col justify-center items-center">
            <img
              class="w-[202px] h-[auto] bg-[#EBEFF3] rounded"
              :src="i.product.image[0].image"
              alt="img"
            />
          </div>

          <div class="flex-col w-[800px] h-[145px]">
            <div class="flex justify-between items-start">
              <h1 class="text-[30px]">{{ i.product?.name }}</h1>
              <h1 class="text-[30px] font-[400] mb-[1.5%]">
                {{ i.product?.price }} sum
              </h1>
            </div>
            <div class="flex justify-between">
              <div class="flex" style="gap: 10px">
                <div
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                  @click="changeHeart(index)"
                >
                  <i v-if="heart" class="fa-solid fa-heart"></i>
                  <i v-if="!heart" class="fa-regular fa-heart"></i>
                </div>
                <div
                  @click="deleteProduct(index)"
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </div>
              </div>
              <div class="flex">
                <div
                  @click="decrease_quantity(index)"
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                >
                  <i class="fa-solid fa-minus"></i>
                </div>
                <h1 class="text-[24px] font-[400] mx-3 text-[#697B92]">
                  {{ i.quantity }}
                </h1>
                <div
                  @click="increase_quantity(index)"
                  class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                >
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ebani-row w-1/5 h-3/5 bg-[#EBEFF3]">
      <h1 class="text-[18px] font-bold pt-10">Sizning haridingiz</h1>
      <div class="flex flex-row justify-between">
        <h1>Yetkazib berish:</h1>
        <h1 class="text-[18px] font-bold">Bepul</h1>
      </div>
      <div class="flex flex-row justify-between">
        <h1>Jami summa:</h1>
        <h1 class="text-[24px] font-bold">{{ calculateAllSumm() }}</h1>
      </div>
      <div
        class="flex justify-center bg-[#134E9B] rounded-md w-3/5 h-1/5 mt-10 outline-none"
      >
        <button class="text-white p-[10px] ps-5 pe-5 font-['Roboto']">
          Hoziroq sotib olish
        </button>
      </div>
    </div>
  </div>
  <div class="pl-[129px]">
    <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
  </div>
  <ProdCarousel />
  <Footer />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "../../components/Header/Header.vue";
import ProdCarousel from "../../components/Carousel/ProdCarousel.vue";
import Footer from "../../components/Footer/Footer.vue";
import { useBasketStore } from "../../stores/basket/basket";
const store = useBasketStore();

const calculateAllSumm = () => {
  let sum = ref(0);
  store.baskets.forEach((i) => {
    sum.value += i.product.price * i.quantity;
  });
  return sum.value;
};

const increase_quantity = (index: number) => {
  store.baskets[index].quantity += 1;
};

const decrease_quantity = (index: number) => {
  if (store.baskets[index].quantity > 0) store.baskets[index].quantity -= 1;
};

const deleteProduct = (index: number) => {
  store.baskets.splice(index, 1);
};

let heart = ref(false);

const changeHeart = (index: number) => {
  heart.value = !heart.value;
};

onMounted(async () => {
  await store.getClientBaskets(1); //BU yerda client_id qo'lda yozilgan aslida backenddan olingan bo'lishi kerak
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
