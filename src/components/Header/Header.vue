<template>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- First layer -->
    <div
      class="bg-[#EBEFF3] w-full h-[40px] flex pt-2 justify-center gap-[600px] items-center"
    >
      <div class="first flex gap-8">
        <div class="location flex gap-3">
          <i class="fa-solid fa-location-dot mt-1"></i>
          <h3>Location</h3>
        </div>
        <div class="others flex gap-5">
          <a href="#">About us</a>
          <a href="#">Products</a>
          <router-link to="feedback"> <a>Contacts</a></router-link>
        </div>
      </div>
      <div class="second flex gap-8">
        <h1 class="raqam text-[#545D6A]">+998(71) 123-45-67</h1>
        <select
          class="bg-[inherit] text-[#545D6A] outline-none"
          name="lan"
          id="lan"
        >
          <option class="" value="uzb">Uz</option>
          <option value="en">En</option>
          <option value="rus">Ru</option>
        </select>
      </div>
    </div>

    <!-- Second layer -->
    <div class="bg bg-white h-[140px] flex flex-col gap-5 items-centerm">
      <div class="row1 flex flex-row justify-between items-center mt-4">
        <a href="/">
          <h1
            class="flex flex-row items-center text-[#134E9B] font-['Roboto'] text-[36px] font-black"
          >
            <img
              src="src/assets/images/logo.png"
              class="w-[48px]"
              alt="src/assets/images/logo.png"
            />
            Ashyo
          </h1></a
        >

        <div class="flex gap-3">
          <button
            class="bg-[#134E9B] text-white w-[130px] rounded-md font-['Roboto'] outline-none flex items-center justify-around hover:bg-[#0c56b6]"
            id="lan"
          >
            Kategoriya
            <i class="fa-solid fa-chevron-down text-[10px]"></i>
          </button>
          <div>
            <input
              type="text"
              placeholder="What are you looking for?"
              class="ps-5 pe-5 p-[12.3px] color-[#EBEFF3] bg-[#EBEFF3] text-[13px] w-[518px] rounded-md outline-none"
            />
            <i
              class="fa-solid fa-magnifying-glass bg-[#134E9B] text-white p-[14px] rounded-md cursor-pointer hover:bg-[#0c56b6]"
              style="margin-left: -10px"
            ></i>
          </div>
        </div>

        <div class="buttons flex gap-5 items-center">
          <router-link to="/compare">
            <i
              class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"
            >
            </i>
            <p
              class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
            >
              2
            </p>
          </router-link>
          <router-link to="/like">
            <div>
              <i
                class="fa-regular fa-heart p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"
              ></i>
              <p
                class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
              >
                11
              </p>
            </div>
          </router-link>

          <router-link to="/basket">
            <div>
              <i
                class="fa-solid fa-cart-shopping p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"
              >
              </i>
              <p
                class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
              >
                7
              </p>
            </div></router-link
          >

          <i
            class="fa-solid fa-user p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]"
          ></i>
        </div>
      </div>
      <div class="w-[1180px] flex justify-between">
        <a
          href="#"
          v-for="(item, index) in categories"
          :key="index"
          class="text-[#535c6a] font-['Roboto'] hover:text-[#2a2b2c] cat"
          >{{ item }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const categories = ref([
  "Aksiyalar",
  "Televisions",
  "Computers & Laptops",
  "Cameras",
  "Audio & Video",
  "Gaming Consoles",
  "Accessories",
  "Kiryuvish mashinasi",
  "Konditsionerlar",
]);
</script>

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
    padding-top: -10px;
    font-family: Roboto;
    margin-bottom: 8px;
  }
}
.count {
  position: relative;
  right: -30px;
  bottom: 50px;
}
.cat {
  position: relative;
}

.cat::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px; /* Adjust the thickness of the underline */
  background-color: black; /* Adjust the color of the underline */
  transition: width 0.3s ease; /* Adjust the animation duration and timing function */
}

.cat:hover::before {
  width: 100%;
}
</style>
