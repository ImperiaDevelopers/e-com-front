<template>
  <div class="bg-[#EBEFF3] w-full h-[40px] flex pt-2 justify-around">
    <div class="first flex gap-8">
      <div class="location flex gap-3">
        <i class="fa-solid fa-location-dot mt-1"></i>
        <h3>Location</h3>
      </div>
      <div class="others flex gap-2">
        <a href="#">About us</a>
        <a href="#">Products</a>
        <a href="#">Contacts</a>
      </div>
    </div>
    <div class="second flex gap-3">
      <h1 class="raqam">+998(71) 123-45-67</h1>
      <select class="color-red bg-[inherit]" name="lan" id="lan">
        <option value="uzb">Uzb</option>
        <option value="en">Eng</option>
        <option value="rus">Rus</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.location {
  i {
    color: #545d6a;
  }
  h3 {
    font-family: Roboto;
    font-weight: 400;
    color: #545d6a;
  }
}
.others {
  a {
    font-family: Roboto;
    font-weight: 400;
    color: #545d6a;
  }
}

.second {
  select {
    padding-top: 5px;
  }
}
</style>
