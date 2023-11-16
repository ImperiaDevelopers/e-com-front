<template>
  <div class="w-[100%] flex items-center justify-center">
    <div class="w-[1180px] h-[275px] m-[20px] flex">
      <div>
        <div class="artel mb-[10px] cursor-pointer">
          <img src="../../assets/brand_images/artel.png" alt="artel" />
        </div>
        <div class="iphone cursor-pointer">
          <img src="../../assets/brand_images/iphone.png" alt="iphone" />
        </div>
      </div>
      <div>
        <div class="samsung mb-[10px] cursor-pointer">
          <img src="../../assets/brand_images/samsung.png" alt="samsung" />
        </div>
        <div class="vivo cursor-pointer">
          <img src="../../assets/brand_images/vivo.png" alt="vivo" />
        </div>
      </div>
      <div>
        <div class="nokia mb-[10px] cursor-pointer">
          <img src="../../assets/brand_images/nokia.png" alt="nokia" />
        </div>
        <div class="huawei cursor-pointer">
          <img src="../../assets/brand_images/huawei.png" alt="huawei" />
        </div>
      </div>
      <div>
        <div class="mi mb-[10px] cursor-pointer">
          <img src="../../assets/brand_images/mi.png" alt="xiaomi" />
        </div>
        <button class="koproq">Ko'proq</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.artel {
  display: inline-flex;
  padding: 24px 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(103, 179, 55, 0.2);
}
.artel:hover {
  background: rgba(103, 179, 55, 0.3);
}
.iphone {
  display: inline-flex;
  height: 169px;
  padding: 17px 114px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.1);
}
.iphone:hover {
  background: rgba(0, 0, 0, 0.2);
}
.samsung {
  display: inline-flex;
  padding: 47px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(3, 78, 162, 0.1);
}
.samsung:hover {
  background: rgba(3, 78, 162, 0.2);
}
.nokia {
  display: inline-flex;
  padding: 17px 84px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(0, 67, 156, 0.12);
}
.nokia:hover {
  background: rgba(0, 67, 156, 0.24);
}
.vivo {
  display: inline-flex;
  padding: 22px 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(0, 109, 184, 0.2);
}
.vivo:hover {
  background: rgba(0, 109, 184, 0.3);
}
.mi {
  display: inline-flex;
  padding: 70px 41px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(255, 103, 0, 0.2);
}
.mi:hover {
  background: rgba(255, 103, 0, 0.3);
}
.huawei {
  display: inline-flex;
  height: 147px;
  padding: 22px 89px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: rgba(255, 26, 31, 0.2);
}
.huawei:hover {
  background: rgba(255, 26, 31, 0.3);
}
.koproq {
  display: inline-flex;
  padding: 12px 82px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: var(--secondry-background, rgb(236, 240, 244));
  color: rgb(0, 0, 140);
}
.koproq:hover {
  background: var(--secondry-background, rgb(210, 214, 218));
}
</style>
