<template>
  <table class="w-[98%] text-lg ml-3 mt-3 font-light">
    <thead class="bg-[#B5B5B5]">
      <tr>
        <th
          class="py-2 px-5 font-normal"
          v-for="(title, index) in headers"
          :key="index"
        >
          {{ title.title }}
        </th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="(item, index) in body" :key="index">
        <td class="border-b p-1" v-for="(col, ind) in headers" :key="ind">
          <slot :name="`body_${col.value}`" :item="item">
            {{ item[col.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  headers: Array,
  body: Array,
});
</script>

<style lang="scss" scoped></style>
