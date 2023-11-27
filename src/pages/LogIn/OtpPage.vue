<template>
  <div class="hello">
    <v-otp-input
      input-classes="otp-input"
      separator="-"
      :num-inputs="6"
      :should-auto-focus="true"
      :is-input-num="true"
      :placeholder="['*', '*', '*', '*', '*', '*']"
      @on-change="onChange"
      @on-complete="onComplete"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hello {
  display: flex;
  justify-content: center;
}
.otp-input {
  width: 35px;
  height: 35px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
