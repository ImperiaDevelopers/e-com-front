<template>
  <Header />
  <router-view></router-view>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col w-[1180px] mt-[4%] text-[#00000099]">
      <p
        class="flex font-roboto text-[32px] font-bold leading-10 tracking-normal text-left mb-[4%]"
      >
        Xaridlarni rasmiylashtirish
      </p>

      <p
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left my-[3%]"
      >
        1 Sizning malumotlariningiz
      </p>

      <div class="mb-8">
        <h1 class="ml-5 text-[12px]">Telfon raqam</h1>
        <input
          type="text"
          class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[4%] text-[14px]"
        />
      </div>

      <div class="flex flex-row gap-[2%]">
        <div>
          <h1 class="ml-5 text-[12px]">Ism</h1>
          <input
            type="text"
            class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[16%] text-[14px]"
          />
        </div>

        <div>
          <h1 class="ml-5 text-[12px]">Familiya</h1>
          <input
            type="text"
            class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[16%] text-[14px]"
          />
        </div>
      </div>

      <p
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left my-[4%]"
      >
        2 Buyurtmalaringiz
      </p>

      <div class="flex justify-between">
        <div class="grid gap-8 w-[800px]">
          <div
            class="flex h-[170px]"
            v-for="(i, index) in order"
            :key="index"
            style="gap: 31px"
          >
            <div
              class="w-[200px] h-[170px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
            >
              <img class="w-[120px]" :src="i.image" alt="" />
            </div>
            <div class="flex-col w-[560px] h-[170px] flex justify-around">
              <div class="flex items-start justify-between">
                <h1 class="text-xl w-[288px]">{{ i.text }}</h1>
                <h1 class="text-[24px] text-black">
                  {{ parseFormattedNumber(i.price) }} uzs
                </h1>
              </div>
              <div class="flex justify-between">
                <div class="flex gap-5">
                  <i
                    class="fa-regular fa-heart w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-center py-[6%] rounded-md cursor-pointer hover:text-black"
                  ></i>
                  <i
                    class="fa-regular fa-trash-can w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-center py-[6%] rounded-md cursor-pointer hover:text-black"
                  ></i>
                </div>
                <div class="flex items-center">
                  <i
                    @click="i.count = i.count + 1"
                    class="fa-solid fa-plus w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] cursor-pointer text-center py-[6%] rounded-md hover:text-black"
                  ></i>
                  <h1 class="text-[24px] text-black w-[60px] text-center">
                    {{ i.count }}
                  </h1>
                  <i
                    v-bind:class="{ 'pointer-events-none': i.count === 1 }"
                    @click="i.count = i.count - 1"
                    class="fa-solid fa-minus cursor-pointer w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-center py-[6%] rounded-md hover:text-black"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-[365px] h-[430px] bg-[#EBEFF3] rounded-md flex items-center justify-center"
        >
          <div class="flex flex-col w-[300px] h-[290px] gap-5">
            <h1 class="text-[18px] font-bold text-center text-black">
              Sizning buyurtmalaringiz
            </h1>
            <div class="flex justify-between items-center mt-[5%]">
              <h1 class="text-[14px]">{{ order.length }} ta mahsulot</h1>
              <p class="font-bold text-[18px] text-black">
                {{ parseFormattedNumber(totalPrice) }} uzs
              </p>
            </div>
            <div class="flex justify-between items-start">
              <h1 class="text-[14px]">Yetkazib berish</h1>
              <p class="font-bold text-[18px] text-black">Bepul</p>
            </div>
            <div class="flex justify-between items-center">
              <h1 class="text-[14px]">Jammi summa:</h1>
              <p class="font-bold text-[20px] text-black">
                {{ parseFormattedNumber(totalPrice) }} uzs
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

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        3 To‘lov usullari
      </div>

      <Payment class="ml-[-5px]" />

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        4 Yetkazib berish manzilini kiriting
      </div>

      <div class="mb-8 flex w-[720px] justify-between">
        <div>
          <h1 class="ml-5 text-[12px]">Viloyat</h1>
          <select
            v-model="value1"
            placeholder="Select"
            class="w-[330px] h-[50px] rounded-md bg-[#EBEFF3] outline-none px-[10%] text-black"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div>
          <h1 class="ml-5 text-[12px]">Tuman/Shahar</h1>
          <select
            v-model="value2"
            placeholder="Select"
            class="w-[330px] h-[50px] rounded-md bg-[#EBEFF3] outline-none px-[10%] text-black"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>

      <div class="flex w-[720px] justify-between">
        <div>
          <h1 class="ml-5 text-[12px]">Manzil</h1>

          <input
            type="text"
            class="w-[450px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[10%] text-[14px]"
            placeholder="Chilonzor tumani 19-kvartal 16-dom 86-honodon"
          />
        </div>
        <div class="relative">
          <h1 class="ml-5 text-[12px]">Yetkazib berish vaqti</h1>
          <input
            type="text"
            class="rounded-md bg-[#EBEFF3] w-[204px] h-[50px] text-black outline-none px-[25%] text-[14px]"
          />
          <i
            class="fa-regular fa-calendar absolute left-[10%] top-[50%] text-black"
          ></i>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
import Payment from "../../components/Payments/payment.vue";
const value1 = ref();
const value2 = ref();

const order = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6999999",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6999999",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6999999",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
]);
const totalPrice = ref(
  order.value.reduce(
    (total, item) => total + Number(item.price) * item.count,
    0
  )
);
const parseFormattedNumber = (number: any) => {
  let numberString = number.toString();
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return numberString;
};
</script>

<style scoped></style>
