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
        1. Sizning ma'lumotlariningiz
      </p>

      <div class="mb-8">
        <h1 class="ml-3 text-[12px]">Telefon raqam</h1>
        <input
          type="text"
          class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[2%] text-[14px]"
        />
      </div>

      <div class="flex flex-row gap-[2%]">
        <div>
          <h1 class="ml-3 text-[12px]">Ism</h1>
          <input
            type="text"
            class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[8%] text-[14px]"
          />
        </div>

        <div>
          <h1 class="ml-3 text-[12px]">Familiya</h1>
          <input
            type="text"
            class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[8%] text-[14px]"
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
                <h1 class="text-xl w-[288px]">{{ i.product.name }}</h1>
                <h1 class="text-[24px] text-black">
                  {{ parseFormattedNumber(i.price) }} uzs
                </h1>
              </div>
              <div class="flex justify-between">
                <div class="flex gap-5">
                  <!-- <i
                    class="fa-regular fa-heart w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-center py-[6%] rounded-md cursor-pointer hover:text-black"
                  ></i> -->
                  <i
                    @click="deleteProduct(index, i.id)"
                    class="fa-regular fa-trash-can w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-center py-[6%] rounded-md cursor-pointer hover:text-black"
                  ></i>
                </div>
                <div class="flex items-center">
                  <i
                    @click="decrease_quantity(index, i.id)"
                    class="fa-solid fa-minus cursor-pointer w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] text-center py-[6%] rounded-md hover:text-black"
                  ></i>
                  <h1 class="text-[24px] text-black w-[60px] text-center">
                    {{ i.quantity }}
                  </h1>
                  <i
                    @click="increase_quantity(index, i.id)"
                    class="fa-solid fa-plus w-[50px] h-[40px] text-[24px] bg-[#EBEFF3] cursor-pointer text-center py-[6%] rounded-md hover:text-black"
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
              <h1 class="text-[14px]">
                {{ store.baskets.length }} ta mahsulot
              </h1>
              <p class="font-bold text-[18px] text-black">
                {{ parseFormattedNumber(calculateAllSumm()) }} uzs
              </p>
            </div>
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
              @click="go()"
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
        3. To‘lov usullari
      </div>

      <Payment class="ml-[-5px]" />

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        4. Yetkazib berish manzilini kiriting
      </div>

      <div class="mb-8 flex w-[720px] justify-between">
        <div>
          <h1 class="ml-3 text-[12px]">Viloyat</h1>
          <select
            v-model="value1"
            placeholder="Select"
            class="w-[330px] h-[50px] rounded-md bg-[#EBEFF3] outline-none px-[7%] text-black"
          >
            <option
              v-for="(i, inn) in regionStore.regions"
              :key="inn"
              :value="i.name"
            >
              {{ i.name }}
            </option>
          </select>
        </div>

        <div>
          <h1 class="ml-3 text-[12px]">Tuman/Shahar</h1>
          <select
            v-model="value2"
            placeholder="Select"
            class="w-[330px] h-[50px] rounded-md bg-[#EBEFF3] outline-none px-[7%] text-black"
          >
            <option
              v-for="(i, inn) in districtStore.regDistricts"
              :key="inn"
              :value="i.name"
            >
              {{ i.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex w-[720px] justify-between">
        <div>
          <h1 class="ml-3 text-[12px]">Manzil</h1>

          <input
            type="text"
            class="w-[450px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[7%] text-[14px]"
            placeholder="Chilonzor tumani 19-kvartal 16-dom 86-honodon"
          />
        </div>
        <div class="relative">
          <h1 class="ml-5 text-[12px]">Yetkazib berish vaqti</h1>
          <input
            type="date"
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
import { onMounted, ref, watch } from "vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
import Payment from "../../components/Payments/payment.vue";
import { useBasketStore } from "../../stores/basket/basket";
import { useRegionStore } from "../../stores/region/region";
import { useDistrictStore } from "../../stores/district/district";
import { useOrderStore } from "../../stores/order/order";
import Notification from "../../plugins/Notification";
import { useRouter } from "vue-router";
import { useClientStore } from "../../stores/client/client";

const clientStore = useClientStore();
const orderStore = useOrderStore();
const store = useBasketStore();
const regionStore = useRegionStore();
const districtStore = useDistrictStore();
const value1 = ref();
const value2 = ref();
const router = useRouter();

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

const calculateAllSumm = () => {
  let sum = ref(0);
  store.baskets.forEach((i) => {
    sum.value += i.product.price * i.quantity;
  });
  return sum.value;
};

const parseFormattedNumber = (number: any) => {
  let numberString = number.toString();
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return numberString;
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

const respayload = {
  client_id: +getCookie("clientId"),
  region_id: "",
  district_id: "",
  payment_id: 1,
  status_id: 1,
  card_id: "1",
};

watch(value1, async (value) => {
  const payload = {
    name: value,
  };
  const region = await regionStore.getRegionByName(payload);
  respayload.region_id = region.id;
  districtStore.getDistrictsByRegionId(region.id);
});

watch(value2, async (value) => {
  const payload = {
    name: value,
  };
  const district = await districtStore.getDistrictsByName(payload);
  respayload.district_id = district.id;
});

const go = async () => {
  orderStore.createOrder(respayload);
  router.push("/");
  Notification("Buyurtmangiz qabul qilindi", "success");

  const client = await clientStore.getClientById(+getCookie("clientId"));

  await clientStore.messageOrderClient({
    phone_number: client,
  });
};

onMounted(async () => {
  const card = await store.getClientBaskets(+getCookie("clientId"));
  respayload.card_id = card[0].id;
  await regionStore.getRegions();
  watch(value1, async (value) => {
    const payload = {
      name: value,
    };
    const region = await regionStore.getRegionByName(payload);
    districtStore.getDistrictsByRegionId(region.id);
  });
});
</script>

<style scoped></style>
