<template>
  <button
    :class="classess"
    :disabled="isLoading"
    class="flex justify-center items-center p-[10px] rounded-full border-none disabled:cursor-not-allowed text-white text-[16px]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  btn_type: String,
  isLoading: Boolean,
});
const type_style = {
  primary:
    "bg-[#134E9B] hover:bg-[#0c56b6] active:bg-[#0c56b6] disabled:bg-[#0c56b6]",
  danger: "bg-red-600 hover:bg-red-400 active:bg-red-600 disabled:bg-red-300",
  success:
    "bg-green-600 hover:bg-green-400 active:bg-green-600 disabled:bg-green-300",
  info: "bg-blue-400 hover:bg-blue-400 active:bg-blue-600 disabled:bg-blue-300",
};

const classess = computed(() => {
  return type_style[props.btn_type];
});
</script>

<style lang="scss" scoped></style>
