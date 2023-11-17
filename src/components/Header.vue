<template>
  <!-- First layer -->
  <div
    class="bg-[#EBEFF3] w-full h-[40px] flex pt-2 justify-center gap-[600px]"
  >
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
    <div class="second flex gap-8">
      <h1 class="raqam text-[#545D6A]">+998(71) 123-45-67</h1>
      <select class="bg-[inherit] text-[#545D6A] outline-none" name="lan" id="lan">
        <option class="" value="uzb">Uz</option>
        <option value="en">En</option>
        <option value="rus">Ru</option>
      </select>
    </div>
  </div>

  <!-- Second layer -->
  <div class="bg bg-white w-full h-[140px] flex flex-col gap-5">
    <div class="row1 flex flex-row gap-[50px] justify-center items-center mt-4">
      <h1
        class="flex flex-row items-center text-[#134E9B] font-['Roboto'] text-[36px] font-black"
      >
        <img src="../assets/images/logo.png" class="w-[48px]" alt="Logo" />
        Ashyo
      </h1>

      <div class="flex gap-3">
        <select
          class="bg-[#134E9B] text-white p-[10px] ps-5 pe-5 rounded-md font-['Roboto'] outline-none"
          name="lan"
          id="lan"
        >
          <option selected disabled hidden value="">Kategriya</option>
        </select>
        <div>
          <input
            type="text"
            placeholder="What are you looking for?"
            class="ps-5 pe-5 p-[12.3px] color-[#EBEFF3] bg-[#EBEFF3] text-[13px] w-[518px] rounded-md outline-none"
          />
          <i
            class="fa-solid fa-magnifying-glass bg-[#134E9B] text-white p-[14px] rounded-md cursor-pointer"
            style="margin-left: -10px"
          ></i>
        </div>
      </div>

      <div class="buttons flex gap-5 items-center">
        <div>
          <i
            class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"
          >
          </i>
          <p
            class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
          >
            2
          </p>
        </div>
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
        </div>

        <i
          class="fa-solid fa-user p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]" 
        ></i>
      </div>
    </div>
    <div class="flex justify-center gap-[52px]">
      <a href="#" class="text-[#535c6a] font-['Roboto'] hover:text-[#2a2b2c]">Aksiyalar</a>
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]">Smartfonlar</a>
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]">Noutbuklar</a>
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]">Konditsionerlar</a>
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]">Televizorlar</a>
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]">Muzlatgichlar</a>
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Kir yuvish mashinalari</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto']">Maishiy texnika</a>
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
</style>
