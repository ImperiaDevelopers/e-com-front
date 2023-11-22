<template>
  <Header />
  <div class="w-full flex items-center justify-center">
  <div class="flex w-[1180px]">
    <div class="flex w-[374px] h-[916px] mt-[80px] rounded-lg bg-[#EBEFF3]">
      <div class="flex flex-col m-10 gap-[80px]">
        <div>
          <p class="w-[150px] h-[24px] font-bold mb-3">Ashyo haqida</p>
          <p class="w-[286px] h-[38px] font-bold text-[#545D6A]">
            Ashyo 2022 yilda Toshkent shahrida tashkil etylgan.
          </p>
        </div>

        <div>
          <p class="w-[250px] h-[24px] font-bold mb-3">Muddatli to’lov</p>
          <p class="w-[286px] h-[38px] font-bold text-[#545D6A]">
            Ashyoda barcha eliktronika maishiy texnikalar uchun qulay onlayn
            to’lov rejasi
          </p>
        </div>

        <div>
          <p class="w-[250px] h-[24px] font-bold mb-3">To‘lov usullari</p>
          <p class="w-[286px] h-[38px] font-bold text-[#545D6A]">
            Siz uchun qulay usulda to’lang do’konda, Clik, Payme orqali.
          </p>
        </div>

        <div>
          <p class="w-[250px] h-[24px] font-bold mb-3">Yetkazib berish</p>
          <p class="w-[286px] h-[38px] font-bold text-[#545D6A]">
            Ashyoda tovarlarni yetkazib berish shartlari.
          </p>
        </div>

        <div>
          <p class="w-[250px] h-[24px] font-bold mb-3">Tavorlarga kafolat</p>
          <p class="w-[286px] h-[38px] font-bold text-[#545D6A]">
            Ashyo onlayn do’konining kafolati va qaytarilish haqida hamma
            narsani bilib oling
          </p>
        </div>

        <div>
          <p class="w-[250px] h-[24px] font-bold mb-3">Yordam</p>
          <p class="w-[286px] h-[38px] font-bold text-[#545D6A]">
            Tushumagan narsalaringiz bo’lsa savollaringizni bering
          </p>
        </div>
      </div>
    </div>
    <div>
      <h1
        class="w-[300px] h-[36px] m-10 mt-[80px]  text-4xl text-[#06172D] font-bold"
      >
        Ashyo haqida
      </h1>
      <div class="m-10 mt-[50px] w-[776px] h-[300px] bg-[#6F73EE] rounded-lg">
        <p class="flex text-8xl justify-center pt-[100px] text-[#FFFFFF]">
          Ashyo
        </p>
        <p class="mt-[150px] text-[#515D6C] text-xl">
          Ashyo - bozor narhid maishy texnika va electronics dukonlari
          qurilmalari. 2 oydan davomid mizhozlarga keng assortimentdagi
          mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi.<br /><br />

          Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi kunga
          qadar jami poytaxtda va viloyatlarda 26 that dukon faoliyat
          ko'rsatmoqda.<br /><br />

          Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin: tarmoq
          dukonlarida yoki website. Maishy uchun texnikasi onlayn b'lib t'lov
          rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan huzhzhat - bu
          pasport.<br /><br />

          Yuridik shahslar uchun pul o'tkazish yo'li bilan, eng muximi -
          qo'shimcha to'lovlarsiz sotib olish mumkin.
        </p>
        <div class="flex mt-10 gap-5 text-[20px]">
          <i class="fa-solid fa-print "></i>
          <i class="fa-solid fa-share-nodes "></i>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
</script>

<style scoped></style>
