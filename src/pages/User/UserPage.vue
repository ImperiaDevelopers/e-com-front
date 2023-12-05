<template>
  <Header></Header>
  <div class="w-full flex justify-center h-[500px]">
    <div class="w-[1180px] flex gap-20">
      <div class="flex flex-col gap-5 items-start">
        <button @click="changer = true" class="text-[24px]">
          Buyurtmalarim
        </button>
        <button @click="changer = false" class="text-[24px]">Sozlamalar</button>
      </div>
      <div class="w-5/6 flex flex-col gap-3">
        <div
          v-if="changer"
          v-for="(i, index) in orderStore.orders"
          :key="index"
        >
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
              :title="`Buyurtma id ${i.card.id}`"
              :name="`${i.id}`"
            >
              <div
                class="w-3/4 h-24 h-12 rounded flex justify-between gap-3 text-[#0F4A97] text-[20px]"
              >
                <div>
                  <div class="flex">
                    Product:
                    <p class="text-black">
                      &nbsp&nbsp&nbsp{{ i.card.product.name }}
                    </p>
                  </div>
                  <div class="flex">
                    Status:
                    <p class="text-black">
                      &nbsp&nbsp&nbsp{{ i.status.status_name }}
                    </p>
                  </div>
                  <div class="flex">
                    Addres:
                    <p class="text-black">
                      &nbsp&nbsp&nbsp{{ i.region.name }} - {{ i.district.name }}
                    </p>
                  </div>
                </div>
                <div class="pt-[15px] text-[24px]">
                  <div class="flex">
                    <h1 class="">Narx:</h1>
                    <p class="text-black">
                      &nbsp&nbsp&nbsp{{ formatPrice(i.card.price) }}
                    </p>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div v-else>
          <div
            class="w-[800px] p-5 flex gap-[50px] font-medium rounded-[10px] border bg-white border-[#12486B]/30 shadow-lg"
          >
            <div v-if="edit" class="w-1/2 flex flex-col text-[24px]">
              <h1>First Name: {{ store.info.first_name }}</h1>
              <h1>Last Name: {{ store.info.last_name }}</h1>
              <h1>Number: {{ store.info.phone_number }}</h1>
              <button @click="change">Edit</button>
            </div>
            <div v-else class="w-1/2 flex flex-col text-[24px]">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <button @click="save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import { onMounted, ref } from "vue";
import { useClientStore } from "../../stores/client/client";
import { useOrderStore } from "../../stores/order/order";

const orderStore = useOrderStore();
const edit = ref(true);
const changer = ref(true);
const store = useClientStore();
const disabled = ref(true);

const change = () => {
  edit.value = false;
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

const id = getCookie("clientId");

const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
const formatPrice = (price: any) => {
  if (price !== undefined) {
    return parseFloat(price).toFixed(1);
  }
  return "";
};

onMounted(async () => {
  await store.getClientById(id);
  await orderStore.getClientOrder(id);
  console.log(orderStore.orders, "orderss");

  console.log(store.info);
});
</script>

<style scoped>
#el-collapse-head-8540 {
  font-size: 50px;
}
.el-collapse-item__header {
  font-size: 30px;
}
</style>
