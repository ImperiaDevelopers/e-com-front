<template>
  <Header />
  <div class="flex justify-center w-screen">
    <div class="w-[1180px] justify-center">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Savat</h1>
      <div class="flex gap-8 mb-40 justify-between">
        <div class="grid gap-12">
          <div class="grid gap-8 justify-between">
            <div
              class="flex h-[170px] w-[761px]"
              v-for="(i, index) in store.baskets"
              :key="index"
              style="gap: 31px"
            >
              <img
                class="w-[160px] p-[20px] bg-[#EBEFF3] rounded"
                :src="i.product.image[0].image"
                alt=""
              />
              <div class="flex flex-col w-[761px] h-[145px] justify-between">
                <div class="flex justify-between items-start">
                  <h1 class="text-[18px]">{{ i.product?.name }}</h1>
                  <h1 class="text-[24x] font-[700] mb-[1.5%]">
                    {{ i.product?.price }} usz
                  </h1>
                </div>
                <div class="flex justify-between">
                  <div class="flex" style="gap: 10px">
                    <div
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                    >
                      <!-- <i class="fa-solid fa-heart"></i> -->
                      <i class="fa-regular fa-heart"></i>
                    </div>
                    <div
                      @click="deleteProduct(index, i.id)"
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                    >
                      <i
                        class="fa-solid fa-trash-can"
                        style="color: #5c5c5c"
                      ></i>
                    </div>
                  </div>
                  <div class="flex">
                    <div
                      @click="decrease_quantity(index, i.id)"
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                    >
                      <i class="fa-solid fa-minus" style="color: #575757"></i>
                    </div>
                    <h1 class="text-[28px] font-[400] mx-3 text-[#697B92]">
                      {{ i.quantity }}
                    </h1>
                    <div
                      @click="increase_quantity(index, i.id)"
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                    >
                      <i class="fa-solid fa-plus" style="color: #5c5c5c"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ebani-row w-[340px] h-[325px] bg-[#EBEFF3]">
          <h1 class="text-[18px] font-[600] pt-10">Sizning haridingiz</h1>
          <div class="flex flex-row justify-between items-center">
            <h1 class="text-[12px] font-sans-[Roboto]">Yetkazib berish:</h1>
            <h1 class="text-[18px] font-bold">Bepul</h1>
          </div>
          <div class="flex flex-row justify-between items-center">
            <h1>Jami summa:</h1>
            <h1 class="text-[24px] font-bold">{{ calculateAllSumm() }}</h1>
          </div>
          <div
            class="flex justify-center bg-[#134E9B] rounded-md w-3/5 h-1/5 mt-10 outline-none"
          >
            <button
              class="text-white p-[10px] text-[17px] ps-5 pe-5 font-['Roboto']"
            >
              Hoziroq sotib olish
            </button>
          </div>
        </div>
      </div>
      <div class="pl-[129px]">
        <h1 class="text-[32px] font-[700] mb-[1.5%]">Last viewed products</h1>
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

onMounted(async () => {
  await store.getClientBaskets(1); //BU yerda client_id qo'lda yozilgan aslida backenddan olingan bo'lishi kerak
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
