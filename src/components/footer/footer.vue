<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <div
    class="flex w-[100%] mb-[70px] mt-[70px] left-[131px] gap-[150px] items-start justify-center"
  >
    <div class="flex-col">
      <h2 class="font-bold mt-[6px]">Bizning ijtimoiy tarmoqlarda</h2>
      <div class="flex gap-2 m-[6px] mt-5">
        <button class="icons">
          <i class="fa-brands fa-facebook text-[#2880F3] text-[22px]"></i>
        </button>
        <button class="icons">
          <i class="fa-brands fa-youtube text-[#FF0303] text-[22px]"></i>
        </button>
        <button class="icons">
          <i class="fa-brands fa-instagram text-[22px]"></i>
        </button>
        <button class="icons">
          <i class="fa-brands fa-twitter text-[#55ACEE] text-[22px]"></i>
            
          <svg-icon
            type="mdi"
            class="text-[#45a2ff]"
            :path="mdiTwitter"
          ></svg-icon>
        </button>
        <button class="icons">
          <i class="fa-brands fa-telegram text-[#26ABE6] text-[22px]"></i>
         
        </button>
      </div>
      <div class="mt-4">
        <div class="font-bold m-[10px] mt-5">Mobil ilovani yuklab oling</div>
        <div class="flex flex-column gap-2">
          <button
            class="w-[188px] h-[66px] bg-[#EBEFF3] rounded-lg gap-3 flex items-center justify-center"
          >
            <img
              src="src/assets/images/logos_apple-app-store.svg"
              class="w-[35px] m-[2px]"
              alt=""
            />
            <p class="font-bold">Apps Store</p>
          </button>
          <button
            class="w-[188px] h-[66px] bg-[#EBEFF3] rounded-lg gap-3 flex items-center justify-center"
          >
            <img
              src="src/assets/images/gp.webp"
              class="w-[35px] m-[2px] remove.bg"
              alt=""
            />
            <p class="font-bold">Play Market</p>
          </button>
        </div>
      </div>
    </div>
    <div class="flex-col ml-10">
      <h1 class="font-bold m-[6px]">Menyu</h1>
      <p>Ashyo haqida</p>
      <p>Foydalanish shartlari</p>
      <p>Maxfiylik va hafsizlik siyosati</p>
      <p>Mahsulotlarni va tovarlarni qaytarish siyosati</p>
      <p>Biz bilan aloqa</p>
    </div>

    <div class="flex-col ml-12">
      <h1 class="font-bold m-[6px]">Aloqa</h1>
      <h1 class="font-bold m-[6px]">+998 (71) 123-45-67</h1>
      <p>Savolingiz bormi?</p>
      <input
        type="text"
        class="mt-2 rounded-lg bg-[#ededed] w-[314px] h-[54px] outline-none pl-[20px]"
        placeholder="O'zingiz qiztirgan savollarni bering?"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
input::placeholder {
  font-size: 11px;
}

.icons {
  width: 40px;
  height: 40px;
  background-color: #ebeff3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
}
.fa-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  color: white;
  width: 21.5px;
  border-radius: 30%;
}
</style>
