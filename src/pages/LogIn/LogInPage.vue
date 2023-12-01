<template>
  <div
    class="w-full h-[100vh] flex items-center justify-center bg-gradient-to-b from-white to-[#134E9B]"
  >
    <div
      class="w-[650px] h-[500px] bg-white rounded-[2%] flex items-center justify-center flex-col gap-8 shadow-2xl"
    >
      <div class="text-center mb-5">
        <h1 class="text-[35px] text-[#134E9B] pb-2 text">Welcome</h1>
        <h6 class="text-[#585858]">
          A verification code will be sent to your phone number
        </h6>
      </div>
      <div class="flex flex-col h-[100px]">
        <div class="flex gap-2">
          <label
            class="bg-[#fff] border-2 border-[#134E9B] py-[18px] text-[#134E9B] rounded-s-md px-[20px]"
            >+998</label
          >
          <input
            name="phoneNumber"
            :class="{ valid: isValidPhoneNumber, invalid: !isValidPhoneNumber }"
            v-model="phoneNumber"
            type="text"
            class="bg-[#fff] border-2 py-[18px] text-[#134E9B] tracking-[5px] px-[25px] rounded-e-md outline-none"
            @keyup="validatePhoneNumber"
            placeholder="901234567"
          />
        </div>
        <div class="invalid-warning" v-if="!isValidPhoneNumber">
          Invalid phone number!
        </div>
      </div>
      <button
        type="submit"
        class="bg-[#134E9B] py-[18px] tracking-widest text-white px-[120px] rounded-md"
        id="login-button"
        @click="save"
        :disabled="!isValidPhoneNumber"
      >
        Login
      </button>
      <router-link to="/" class="text-[#134E9B] cursor-pointer"
        >Go Home</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useClientStore } from "../../stores/client/client";

const store = useClientStore();

const phoneNumber = ref("");
const isValidPhoneNumber = ref(true);

const validatePhoneNumber = () => {
  const validationRegex = /^\d{9}$/;
  isValidPhoneNumber.value =
    phoneNumber.value.length > 0 &&
    phoneNumber.value.match(validationRegex) !== null;
};

const router = useRouter();
const save = async () => {
  if (isValidPhoneNumber.value) {
    if (phoneNumber.value) {
      
      await store.otpClient({ phone_number: `+998${phoneNumber.value}` });
      await router.push(`/otp/+998${phoneNumber.value}`);
    } else {
      isValidPhoneNumber.value = false;
    }
  }
};
</script>

<style lang="scss">
.invalid {
  border: 2px solid red;
}

.valid {
  border: 2px solid #134e9b;
}

.invalid-warning {
  margin: 10px auto;
  color: red;
}
</style>
