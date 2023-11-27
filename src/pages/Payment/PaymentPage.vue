<template>
  <Header />
  <router-view></router-view>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col w-[1180px] mt-[100px] text-[#000000]">
      <div
        class="flex font-roboto text-2xl font-bold leading-10 tracking-normal text-left mb-[60px]"
      >
        Xaridlarni rasmiylashtirish
      </div>

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10"
      >
        1 Sizning malumotlariningiz
      </div>

      <div class="mb-8">
        <h1>Telfon raqam</h1>
        <input
          type="text"
          class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4"
        />
      </div>

      <div class="flex flex-row gap-[20px]">
        <div>
          <h1 class="pl-4">Ism</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4"
          />
        </div>

        <div>
          <h1 class="pl-4">Familya</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4"
          />
        </div>
      </div>

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        2 Buyurtmalaringiz
      </div>

      <div class="w-[1180px] justify-center">
        <h1 class="text-[32px] font-[700] mb-[1.5%]">Savat</h1>
        <div class="flex gap-8 mb-40 justify-between">
          <div class="grid gap-12">
            <div class="grid gap-8 justify-between">
              <div
                class="flex h-[170px] w-[761px]"
                v-for="(i, index) in order"
                :key="index"
                style="gap: 31px"
              >
                <img
                  class="w-[160px] p-[20px] bg-[#EBEFF3] rounded"
                  :src="i.image"
                  alt=""
                />
                <div class="flex flex-col w-[761px] h-[145px] justify-between">
                  <div class="flex justify-between items-start">
                    <h1 class="text-[18px]">{{ i.text }}</h1>
                    <h1 class="text-[24x] font-[700] mb-[1.5%]">
                      {{ i.price }}
                    </h1>
                  </div>
                  <div class="flex justify-between">
                    <div class="flex" style="gap: 10px">
                      <div
                        class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                      >
                        <img src="src/assets/images/heart.jpg" alt="" />
                      </div>
                      <div
                        class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                      >
                        <img
                          src="src/assets/images/fluent_delete-24-regular.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="flex">
                      <div
                        class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                      >
                        <img src="src/assets/images/math-minus.png" alt="" />
                      </div>
                      <h1 class="text-[28px] font-[400] mx-3 text-[#697B92]">
                        {{ i.count }}
                      </h1>
                      <div
                        class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                      >
                        <img src="src/assets/images/math-plus.png" alt="" />
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
              <h1 class="text-[24px] font-bold">12 568 000 usz</h1>
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

      <p
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        3 To‘lov usullari
      </p>

      <Payment class="ml-[-5px]" />

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        4 Yetkazib berish manzilini kiriting
      </div>

      <div class="mb-8 flex flex-row gap-7">
        <div>
          <h1>Viloyat</h1>
          <select
            v-model="value"
            placeholder="Select"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div>
          <h1>Tuman/Shahar</h1>
          <select
            v-model="value"
            placeholder="Select"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>

      <div class="flex flex-row gap-7">
        <div>
          <h1>Manzil</h1>
          <input
            type="text"
            class="rounded-md bg-[#EBEFF3] w-[500px] h-[60px] p-5 outline-none"
            placeholder="Chilonzor tumani 19-kvartal 16-dom 86-honodon"
          />
        </div>
        <div>
          <h1>Yetkazib berish vaqti</h1>
          <input
            type="text"
            class="rounded-md bg-[#EBEFF3] w-[204px] h-[60px] outline-none"
          />
          <svg-icon
            type="mdi"
            :path="mdiCalendarBlankOutline"
            class="absolute ml-3 mt-[-40px]"
          ></svg-icon>
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
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendarBlankOutline } from "@mdi/js";

const order = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "src/assets/images/product-imgs/image-removebg-preview (37) 1.png",
    count: 1,
  },
]);
</script>

<style scoped>
.ebani-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
