<template>
  <div
    class="w-full h-[100vh] flex items-center justify-center bg-gradient-to-b from-white to-[#134E9B]"
  >
    <div
      class="w-[650px] h-[500px] bg-white rounded-[2%] flex items-center justify-center flex-col gap-8 shadow-2xl"
    >
      <img
        src="https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/authentication-16.png"
        class="w-[80px]"
        alt=""
      />
      <h1 class="text-[25px] text-[#134E9B] pb-5 text">
        Please enter the one time password
      </h1>
      <div class="otp-container pb-5">
        <input
          v-for="(value, index) in otpValues"
          :key="index"
          type="text"
          maxlength="1"
          class="otp-input"
          :value="value"
          @input="handleInput(index, $event.target.value)"
          @keydown.backspace="handleBackspace(index)"
          :ref="createRef(index)"
        />
      </div>
      <button @click="verify"
        class="bg-[#134E9B] py-[18px] tracking-widest text-white px-[120px] rounded-md"
      >
        Verify OTP
      </button>
      <h1 class="text-[#7c7c7c]">Didn't recieve code? <router-link to="/login" class="text-[#134E9B] cursor-pointer">Resend</router-link></h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClientStore } from "../../stores/client/client";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router =useRouter()

const store=useClientStore()

const otpValues = ref(["", "", "", ""]);

const refs = Array.from({ length: 4 }, (_, i) => ref(null));

const handleInput = (index, value) => {
  // Allow only numeric input
  const numericValue = value.replace(/\D/g, "");

  if (numericValue.length > 1) {
    return;
  }

  otpValues.value[index] = numericValue;

  if (numericValue.length === 1 && index < otpValues.value.length - 1) {
    refs[index + 1].value.focus();
  }
};

const handleBackspace = (index) => {
  if (otpValues.value[index] !== "") {
    otpValues.value[index] = "";
  } else if (index > 0) {
    refs[index - 1].value.focus();
  }
};

const createRef = (index) => (el) => {
  refs[index].value = el;
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

  return '';
}
const verify = async() => {
  const clientId = getCookie("userId");
  const verification=localStorage.getItem('details')
  await store.verifyClient({ phone_number: route.params.phone, verification_key: verification, otp: `${otpValues.value.join('')}`, userId: `${clientId}` })
  if (getCookie('refresh_token')) {
    router.push('/user')
  }
}
</script>

<style scoped>
.otp-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.otp-input {
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 34px;
  margin: 0 10px;
  border: none;
  border: 2px solid #a8a8a8;
  box-shadow: none;
  background-color: transparent;
  color: #134e9b;
  transition: all 0.3s ease-in-out;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20%;
}

.otp-input:focus {
  outline: none;
  border-color: #134e9b;
  font-size: 40px;
  background-color: #a5c8f51e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.267);
}
</style>
