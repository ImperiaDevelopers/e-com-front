<template>
  <div class="w-[100%] mt-[6%] flex items-center justify-center mb-[4%]">
    <div class="w-[1180px] h-[275px] flex gap-[10px]">
      <div class="w-[310px] flex flex-col gap-[10px]">
        <div
          class="artel h-[98px] flex items-center justify-center cursor-pointer"
        >
          <img src="../../assets/brand_images/artel.png" alt="artel" />
        </div>
        <div
          class="iphone cursor-pointer h-[169px] flex items-center justify-center"
        >
          <img src="../../assets/brand_images/iphone.png" alt="iphone" />
        </div>
      </div>
      <div class="w-[300px] flex flex-col gap-[10px]">
        <div
          class="samsung h-[167px] flex items-center justify-center cursor-pointer"
        >
          <img src="../../assets/brand_images/samsung.png" alt="samsung" />
        </div>
        <div
          class="vivo h-[100px] flex items-center justify-center cursor-pointer"
        >
          <img src="../../assets/brand_images/vivo.png" alt="vivo" />
        </div>
      </div>
      <div class="w-[320px] flex flex-col gap-[10px]">
        <div
          class="nokia h-[120px] flex items-center justify-center cursor-pointer"
        >
          <img src="../../assets/brand_images/nokia.png" alt="nokia" />
        </div>
        <div
          class="huawei h-[147px] flex items-center justify-center cursor-pointer"
        >
          <img src="../../assets/brand_images/huawei.png" alt="huawei" />
        </div>
      </div>
      <div class="w-[220px] flex flex-col gap-[10px]">
        <div
          class="mi h-[223px] flex items-center justify-center cursor-pointer"
        >
          <img src="../../assets/brand_images/mi.png" alt="xiaomi" />
        </div>
        <button class="koproq h-[44px] flex items-center justify-center">
          Ko'proq
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.artel {
  border-radius: 6px;
  background: rgba(103, 179, 55, 0.2);
}

img {
  width: auto;
  height: auto;
  transition: transform 0.3s ease-in-out;
}
.artel:hover img,
.iphone:hover img,
.huawei:hover img,
.vivo:hover img,
.nokia:hover img,
.mi:hover img,
.samsung:hover img {
  transform: scale(1.1);
}

.artel:hover {
  background: rgba(103, 179, 55, 0.3);
}
.iphone {
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.1);
}
.iphone:hover {
  background: rgba(0, 0, 0, 0.2);
}
.samsung {
  border-radius: 6px;
  background: rgba(3, 78, 162, 0.1);
}
.samsung:hover {
  background: rgba(3, 78, 162, 0.2);
}
.nokia {
  border-radius: 6px;
  background: rgba(0, 67, 156, 0.12);
}
.nokia:hover {
  background: rgba(0, 67, 156, 0.24);
}
.vivo {
  border-radius: 6px;
  background: rgba(0, 109, 184, 0.2);
}
.vivo:hover {
  background: rgba(0, 109, 184, 0.3);
}
.mi {
  border-radius: 6px;
  background: rgba(255, 103, 0, 0.2);
}
.mi:hover {
  background: rgba(255, 103, 0, 0.3);
}
.huawei {
  border-radius: 6px;
  background: rgba(255, 26, 31, 0.2);
}
.huawei:hover {
  background: rgba(255, 26, 31, 0.3);
}
.koproq {
  border-radius: 6px;
  background: var(--secondry-background, rgb(236, 240, 244));
  color: rgb(0, 0, 140);
}
.koproq:hover {
  background: var(--secondry-background, rgb(210, 214, 218));
}
</style>
