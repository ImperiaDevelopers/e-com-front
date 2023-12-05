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
            <div class="w-1/2 flex flex-col">
              <vee-form
                :validation-schema="schema"
                :initial-values="props.data"
                @submit="updateProfile"
              >
                <VInput
                  type="text"
                  name="first_name"
                  label="First Name"
                  placeholder="Enter your name"
                  :disabled="disabled"
                ></VInput>
                <VInput
                  type="text"
                  name="last_name"
                  label="Last Name"
                  placeholder="Enter your surname"
                  :disabled="disabled"
                ></VInput>
                <VInput
                  type="text"
                  name="phone"
                  label="Phone"
                  placeholder="(+998)-90-123-45-67"
                  :mask="'(+998)-##-###-##-##'"
                  :disabled="disabled"
                ></VInput>
                <div v-if="!disabled" class="flex gap-5">
                  <VButton
                    btn_type="danger"
                    type="button"
                    class="mt-5 w-full text-[18px]"
                    @click="cancel"
                  >
                    Cancel
                  </VButton>
                  <VButton
                    v-if="!disabled"
                    btn_type="primary"
                    type="submit"
                    class="mt-5 w-full text-[18px]"
                  >
                    Save
                  </VButton>
                </div>
                <VButton
                  v-else
                  btn_type="primary"
                  :isLoading="false"
                  type="button"
                  class="mt-5 w-full text-[18px]"
                  @click="disabled = false"
                >
                  Edit
                </VButton>
              </vee-form>
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
import VInput from "../../components/ui/VInput.vue";
import VButton from "../../components/ui/VButton.vue";
import { ref } from "vue";
const changer = ref(true);

const disabled = ref(true);

const props = defineProps({
  data: {
    first_name: "",
    last_name: "",
    status: null,
    phone: "",
    image: "",
    role: "",
    start_date: "",
    _id: "",
  },
});

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
const cancel = () => {
  disabled.value = true;
};

const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>

<style scoped></style>
