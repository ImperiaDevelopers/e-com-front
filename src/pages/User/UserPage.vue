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
        <div v-if="changer" v-for="(i, index) in orders" :key="index">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
              class="text-[24px]"
              :title="`${i.title}`"
              :name="`${i.id}`"
            >
              <div
                class="w-3/4 h-24 h-12 rounded flex justify-between gap-3 text-[#0F4A97] text-[20px]"
              >
                <div>
                  <div class="flex">
                    Product:
                    <p class="text-black font-bold">
                      &nbsp&nbsp&nbsp{{ i.products }}
                    </p>
                  </div>
                  <div class="flex">
                    Status:
                    <p class="text-black font-bold">
                      &nbsp&nbsp&nbsp{{ i.status }}
                    </p>
                  </div>
                  <div class="flex">
                    Sana:
                    <p class="text-black font-bold">
                      &nbsp&nbsp&nbsp{{ i.data }}
                    </p>
                  </div>
                </div>
                <div class="flex pt-[15px] text-[24px]">
                  <h1 class="">Narx:</h1>
                  <p class="text-black font-bold">
                    &nbsp&nbsp&nbsp{{ i.price }}
                  </p>
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

const edit = ref(true);
const changer = ref(true);
const store = useClientStore();
const disabled = ref(true);
const change = () => {
  edit.value = false;
};
const orders = ref([
  {
    id: 1,
    title: "iphone 13",
    products: "pro, pro max",
    price: "123231",
    status: "payed",
    data: "12.12.2012",
  },
  {
    id: 2,
    title: "iphone 13",
    products: "pro, pro max",
    price: "123231",
    status: "payed",
    data: "12.12.2012",
  },
]);

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

onMounted(async () => {
  await store.getClientById(id);
  console.log(await store.info);
});
</script>

<style scoped></style>
