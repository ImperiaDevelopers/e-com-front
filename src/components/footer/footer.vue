<template>
   <div class="flex w-screen h-[375px] top-[5367px] left-[131px] opacity-100  items-center justify-center ">
    <div class="flex-col ml-3">
            <h2 class="font-bold m-[6px]">Bizning ijtimoiy tarmoqlarda</h2>
            <div class="flex gap-2 m-[6px] mt-5">
                    <svg-icon type="mdi" class="text-[blue]" :path="mdiFacebook"></svg-icon>
                    <svg-icon type="mdi" class="text-[red]" :path="mdiYoutube"></svg-icon>
                    <svg-icon type="mdi" class="text-[#1c1cfe]" :path="mdiSendCircle"></svg-icon>
                    <svg-icon type="mdi" class="text-[#45a2ff]"  :path="mdiTwitter"></svg-icon>
                    <svg-icon type="mdi" class="text-[#ff4545]" :path="mdiInstagram"></svg-icon>
                </div>
                <div class="mt-4">
                    <div class="font-bold m-[10px] mt-5">Mobil ilovani yuklab oling</div>
                    <div class="flex flex-column gap-2 m-[10px] mt-5">
                        <button class="w-[150px] h-[50px] top-[236px] bg-[white] rounded-lg">
                            <img src="src/assets/images/logos_apple-app-store.svg" class="w-[35px] m-[2px]" alt="">
                            <p class="absolute mt-[-35px] ml-[50px] font-bold">Apps Store</p>
                        </button>
                        <button class="w-[150px] h-[50px] top-[236px] bg-[white] rounded-lg">    
                            <img src="src/assets/images/gp.webp" class="w-[35px] m-[2px] remove.bg" alt="">
                            <p class="absolute mt-[-35px] ml-[50px] font-bold">Play Market</p>
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
           <input type="text" class="mt-2 rounded-lg bg-[#ededed] w-[314px] h-[54px]" placeholder="O'zingiz qiztirgan savollarni bering?">
         
        </div>
    </div>
    

   

</template>

<script setup>
import { mdiInstagram,mdiFacebook,mdiYoutube,mdiSendCircle,mdiTwitter,mdiApple } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';
</script>

<style scoped>
input::placeholder {
  font-size: 11px;
  padding-left: 20px;
}
</style>