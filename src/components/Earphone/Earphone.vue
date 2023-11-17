<template>
  <div
    class="w-[100%] flex items-center justify-center mt-[50px] pb-[80px] mb-[4%]"
  >
    <div class="main flex flex-row justify-evenly relative">
      <img class="ear" src="../../assets/Ear_img/ear.png" alt="EarPhone" />
      <Soya class="soya absolute" />
      <div class="flex flex-col justify-center">
        <p>Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!</p>
        <button>Batafsil</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Soya from "../../assets/Soya/Soya.vue";
</script>

<style lang="scss" scoped>
.main {
  width: 1180px;
  height: 420px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #282828;
}
p {
  width: 438px;
  color: var(--secondry-white, #fff);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 118.75% */
}
button {
  display: inline-flex;
  padding: 18px 16px;
  align-items: flex-start;
  border-radius: 6px;
  background: #fff;
  margin-top: 30px;
  width: 180px;
  justify-content: center;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 2px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}
button:hover {
  background: rgb(112, 112, 112);
  color: white;
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
.ear {
  width: 518px;
  height: 493px;
  flex-shrink: 0;
}
.soya {
  top: -150px;
  left: -20px;
}
</style>
