<template>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- First layer -->
    <div
      class="bg-[#EBEFF3] w-full h-[40px] flex pt-2 justify-center gap-[600px] items-center"
    >
      <div class="first flex gap-8">
        <div class="location flex gap-3">
          <i class="fa-solid fa-location-dot mt-1"></i>
          <h3 v-if="!city">Location</h3>
          <h3 v-if="city">{{ city }}</h3>
        </div>
        <div class="others flex gap-5">
          <router-link to="/about">About us</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/feedback">Contacts</router-link>
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
        <router-link to="/">
          <h1
            class="flex flex-row items-center text-[#134E9B] font-['Roboto'] text-[36px] font-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
            >
              <path
                d="M49.0652 38.4764C49.9944 38.7556 50.9833 38.2294 51.1683 37.2769C51.7595 34.2335 51.5366 31.0764 50.5067 28.1301C49.2829 24.6289 46.9824 21.6049 43.9348 19.4911C40.8872 17.3774 37.2488 16.2824 33.5408 16.3629C29.8328 16.4435 26.2454 17.6955 23.2925 19.9397C20.3396 22.1838 18.1727 25.3049 17.1021 28.8559C16.0315 32.407 16.1123 36.2057 17.3327 39.708C18.5532 43.2104 20.8508 46.2366 23.8964 48.3532C26.4594 50.1345 29.4414 51.1947 32.532 51.44C33.4992 51.5168 34.2711 50.7049 34.2509 49.7349C34.2308 48.7648 33.4252 48.0062 32.4602 47.9052C30.1129 47.6597 27.8551 46.8256 25.9016 45.468C23.4651 43.7746 21.6271 41.3537 20.6507 38.5518C19.6743 35.7499 19.6097 32.711 20.4662 29.8701C21.3226 27.0293 23.0562 24.5324 25.4185 22.7371C27.7808 20.9418 30.6507 19.9402 33.6171 19.8757C36.5835 19.8113 39.4943 20.6873 41.9323 22.3783C44.3704 24.0693 46.2108 26.4885 47.1898 29.2894C47.9748 31.5351 48.1738 33.9338 47.7818 36.2612C47.6207 37.218 48.1359 38.1972 49.0652 38.4764Z"
                fill="#E81504"
              />
              <path
                d="M23.8815 29.7982C23.2746 29.5625 22.5855 29.8625 22.4116 30.4898C21.8557 32.4955 21.839 34.6202 22.3737 36.6461C23.009 39.0534 24.3903 41.1976 26.3194 42.7714C28.2485 44.3453 30.6264 45.2679 33.1121 45.4069C35.5979 45.546 38.0639 44.8945 40.1565 43.5457C42.2491 42.1969 43.861 40.2201 44.7609 37.8988C45.6608 35.5775 45.8026 33.0308 45.166 30.6239C44.5293 28.2171 43.1469 26.0736 41.217 24.5008C39.5927 23.1771 37.6508 22.3149 35.5945 21.9928C34.9514 21.8921 34.3936 22.3959 34.3576 23.0459C34.3216 23.6959 34.8218 24.2445 35.4622 24.3613C37.0209 24.6455 38.4897 25.3193 39.7277 26.3283C41.2717 27.5865 42.3776 29.3013 42.8869 31.2268C43.3962 33.1523 43.2828 35.1896 42.5628 37.0467C41.8429 38.9037 40.5534 40.4851 38.8793 41.5642C37.2052 42.6432 35.2324 43.1644 33.2438 43.0532C31.2552 42.9419 29.3529 42.2038 27.8096 40.9448C26.2663 39.6857 25.1613 37.9703 24.6531 36.0445C24.2455 34.5003 24.2384 32.8844 24.6233 31.3474C24.7814 30.7159 24.4883 30.0338 23.8815 29.7982Z"
                fill="#E81504"
              />
              <path
                d="M39.1635 38.1198C39.5211 38.3616 40.0108 38.2692 40.2156 37.8893C40.8695 36.6764 41.1933 35.3077 41.1472 33.9213C41.0925 32.2737 40.5182 30.6856 39.5064 29.384C38.4946 28.0825 37.0971 27.1343 35.5138 26.675C33.9305 26.2157 32.2426 26.2688 30.6913 26.8267C29.14 27.3847 27.8049 28.4189 26.8769 29.7814C25.9489 31.144 25.4756 32.7651 25.5245 34.4129C25.5735 36.0607 26.1423 37.6509 27.1496 38.9559C27.9971 40.054 29.1185 40.9029 30.3951 41.4214C30.795 41.5838 31.2313 41.3431 31.353 40.929C31.4747 40.5149 31.235 40.085 30.8393 39.9126C29.8777 39.4937 29.0329 38.8378 28.3869 38.0009C27.5811 36.9568 27.1261 35.6847 27.0869 34.3665C27.0477 33.0482 27.4264 31.7513 28.1688 30.6613C28.9112 29.5712 29.9793 28.7439 31.2203 28.2975C32.4613 27.8512 33.8117 27.8087 35.0783 28.1761C36.3449 28.5436 37.4629 29.3022 38.2724 30.3434C39.0818 31.3846 39.5413 32.6551 39.5851 33.9732C39.6201 35.0298 39.3867 36.0737 38.9122 37.009C38.717 37.394 38.8059 37.8781 39.1635 38.1198Z"
                fill="#E81504"
              />
              <path
                d="M30.0934 32.1117C29.8868 31.9605 29.5945 32.0045 29.4647 32.2252C29.0499 32.9305 28.8278 33.7358 28.825 34.5595C28.8217 35.5384 29.1284 36.4932 29.701 37.2871C30.2736 38.081 31.0829 38.6732 32.0127 38.979C32.9426 39.2848 33.9454 39.2884 34.8775 38.9893C35.8095 38.6902 36.623 38.1038 37.2013 37.314C37.7796 36.5242 38.0931 35.5717 38.0968 34.5928C38.1006 33.614 37.7944 32.6591 37.2222 31.8649C36.7406 31.1965 36.0914 30.6709 35.3436 30.3386C35.1097 30.2346 34.8463 30.369 34.7662 30.6122C34.6861 30.8553 34.82 31.1148 35.0513 31.2246C35.6141 31.4917 36.1029 31.8975 36.4699 32.4069C36.9277 33.0423 37.1727 33.8062 37.1697 34.5893C37.1667 35.3724 36.9159 36.1344 36.4532 36.7662C35.9906 37.398 35.3398 37.8672 34.5942 38.1065C33.8485 38.3457 33.0463 38.3429 32.3024 38.0982C31.5585 37.8536 30.9111 37.3798 30.453 36.7447C29.9949 36.1096 29.7496 35.3457 29.7522 34.5627C29.7543 33.9348 29.9157 33.3203 30.2179 32.7757C30.3422 32.5518 30.3001 32.2628 30.0934 32.1117Z"
                fill="#E81504"
              />
              <path
                d="M35.5544 36.2905C35.684 36.3958 35.8758 36.3769 35.9676 36.2375C36.2613 35.7918 36.4327 35.2746 36.4618 34.7381C36.4964 34.1007 36.3282 33.4686 35.9814 32.9326C35.6347 32.3966 35.1271 31.9841 34.5315 31.7543C33.9358 31.5245 33.2827 31.4893 32.6658 31.6535C32.0489 31.8178 31.4998 32.1731 31.0973 32.6687C30.6948 33.1642 30.4595 33.7745 30.4252 34.412C30.3909 35.0495 30.5593 35.6814 30.9063 36.2173C31.1983 36.6683 31.6042 37.0318 32.0806 37.2724C32.2296 37.3477 32.4054 37.2687 32.4654 37.1129C32.5254 36.9572 32.4466 36.7839 32.2996 36.7049C31.9416 36.5127 31.6363 36.2325 31.4137 35.8887C31.1361 35.46 31.0014 34.9545 31.0289 34.4445C31.0563 33.9345 31.2445 33.4463 31.5666 33.0498C31.8886 32.6534 32.3278 32.3691 32.8214 32.2377C33.3149 32.1063 33.8374 32.1345 34.3139 32.3183C34.7904 32.5022 35.1964 32.8321 35.4739 33.261C35.7513 33.6898 35.8858 34.1954 35.8581 34.7054C35.836 35.1143 35.7104 35.5092 35.4954 35.854C35.4071 35.9956 35.4249 36.1852 35.5544 36.2905Z"
                fill="#E81504"
              />
            </svg>
            Ashyo
          </h1>
        </router-link>

        <div class="flex gap-3">
          <div class="relative h-[42px] flex">
            <button
              class="bg-[#134E9B] text-white w-[130px] rounded-md font-['Roboto'] outline-none flex items-center justify-around hover:bg-[#0c56b6]"
              id="lan"
              @click="change"
            >
              Kategoriya
              <i class="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
            <div
              v-if="opener"
              class="w-[380px] transition-transform category bg-[#EBEFF3] absolute top-16 right-[-45px] px-[35px] py-[10px] h-[540px]"
            >
              <div class="flex flex-col gap-[5px] justify-center">
                <h1
                  class="cursor-pointer text-[15px] flex gap-4 items-center hover:bg-[#c8c9ce] transition-all rounded p-3"
                  @mouseup="opener1(0)"
                >
                  <i class="fa-brands fa-salesforce w-[30px] fa-2x"></i>
                  <span>Aksiyalar</span>
                </h1>
                <a
                  v-for="(item, index) in store.categories"
                  href="#"
                  :key="index"
                  class="text-[#535c6a] text-[15px] flex gap-4 items-center hover:bg-[#c8c9ce] transition-all rounded p-3"
                  @click="opener1(item.id)"
                >
                  <img :src="item.icon" alt="" class="w-[30px]" />
                  <span>{{ item.category_name }}</span>
                </a>
              </div>
            </div>

            <!-- Aksiyalar -->
            <div
              v-if="righ1"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Aksiyadagi mahsulotlar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.product.id)"
                v-for="(item, index) in stockStore.stocks"
                :key="index"
              >
                <p>{{ item.product.name }}</p>
                <p>{{ formatPrice(item.product.price) }} so'm</p>
                <p>
                  Alsiya tugash muddati: <b>{{ item.duration }} kun</b>
                </p>
              </div>
            </div>

            <!-- Televizorlar -->
            <div
              v-if="righ2"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Televizorlar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>

            <!-- Smartfon va telefonlar -->
            <div
              v-if="righ3"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Smartfon va telefonlar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>

            <!-- Muzlatgichlar -->
            <div
              v-if="righ4"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Muzlatgichlar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>

            <!-- Konditsonerlar -->
            <div
              v-if="righ5"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Konditsonerlar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>

            <!-- Changyukgichlar -->
            <div
              v-if="righ6"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Changyutgichlar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>

            <!-- Kir yuvish mashinalari -->
            <div
              v-if="righ7"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Kir yuvish mashinalari
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>

            <!-- Kompyuter va noutbuklar -->
            <div
              v-if="righ8"
              class="w-[810px] category left-[175px] bg-[#fff] absolute top-16 px-[45px] py-[20px] h-[540px]"
            >
              <h1
                class="text-[25px] font-medium text-[#000] font-['Roboto'] mb-4"
              >
                Kompyuter va noutbuklar
              </h1>
              <div
                class="cursor-pointer flex justify-between hover:bg-[#c8c9ce] transition-all rounded p-3"
                @click="single(item.id)"
                v-for="(item, index) in productStore.catProducts"
                :key="index"
              >
                <p>{{ item.name }}</p>
                <p>{{ formatPrice(item.price) }} so'm</p>
              </div>
            </div>
          </div>

          <!-- Search -->
          <div>
            <input
              type="text"
              placeholder="What are you looking for?"
              class="ps-5 pe-5 p-[12.3px] color-[#EBEFF3] bg-[#EBEFF3] text-[13px] w-[518px] rounded-md outline-none"
              v-model="inputv"
              @change="handleChange($event)"
            />
            <i
              class="fa-solid fa-magnifying-glass bg-[#134E9B] text-white p-[14px] rounded-md cursor-pointer hover:bg-[#0c56b6]"
              style="margin-left: -10px"
            ></i>
          </div>
          <div
            v-if="isopen"
            class="w-[380px] transition-transform category bg-white absolute top-[120px] right-[610px] px-[35px] py-[10px] h-auto"
          >
            <a
              v-for="(item, index) in productStore.searchProducts"
              :key="index"
              class="flex cursor-pointer p-2 hover:bg-[#EBEFF3] transition-all rounded"
              @click="single(item.id)"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <div class="buttons flex gap-5 items-center">
          <router-link to="/compare">
            <div class="h-[35px]">
              <i
                class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]"
              >
              </i>
              <p
                v-if="0"
                class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
              >
                2
              </p>
            </div>
          </router-link>
          <router-link to="/like">
            <div class="h-[35px]">
              <i
                class="fa-regular fa-heart p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]"
              ></i>
              <p
                v-if="clientFav?.length"
                class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
              >
                {{ clientFav.length }}
              </p>
            </div>
          </router-link>

          <router-link to="/basket">
            <div class="h-[35px]">
              <i
                class="fa-solid fa-cart-shopping p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]"
              >
              </i>
              <p
                v-if="basketNumber?.length"
                class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full"
              >
                {{ basketNumber?.length }}
              </p>
            </div></router-link
          >
          <router-link v-if="isLoggedIn()" to="/user">
            <div class="h-[35px]">
              <i
                class="fa-solid fa-user p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]"
              ></i>
            </div>
          </router-link>
          <router-link v-else to="/login">
            <div class="h-[35px]">
              <i
                class="fa-solid fa-user p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer hover:bg-[#d2d6da]"
              ></i>
            </div>
          </router-link>
        </div>
      </div>
      <div class="w-[1180px] flex justify-between">
        <h1
          href="#"
          v-for="(item, index) in store.categories"
          :key="index"
          class="text-[#535c6a] font-['Roboto'] hover:text-[#272727] cursor-pointer cat"
          @click="otish(item.id)"
        >
          {{ item.category_name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCategoryStore } from "../../stores/category/category";
import { useBasketStore } from "../../stores/basket/basket";
import { useRouter } from "vue-router";
import { useFavouritesStore } from "../../stores/favourites/favourites";
import { useStockStore } from "../../stores/stock/stock";
import { useProductStore } from "../../stores/products/product";

const router = useRouter();
const store = useCategoryStore();
const store1 = useBasketStore();
const store2 = useFavouritesStore();
const stockStore = useStockStore();
const productStore = useProductStore();
const city = ref("");

const cookieValue = getCookie("city");
if (cookieValue) {
  city.value = cookieValue;
}
const formatPrice = (price: any) => {
  if (price !== undefined) {
    return parseFloat(price).toFixed(2);
  }
  return "";
};

function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");

    if (cookieName === name) {
      return cookieValue;
    }
  }

  return "";
}
const isLoggedIn = () => {
  if (getCookie("refresh_token").length > 1) {
    return true;
  } else {
    return false;
  }
};

const opener = ref(false);
let righ1 = ref(false);
let righ2 = ref(false);
let righ3 = ref(false);
let righ4 = ref(false);
let righ5 = ref(false);
let righ6 = ref(false);
let righ7 = ref(false);
let righ8 = ref(false);

const opener1 = (index: number) => {
  if (index == 0) {
    righ1.value = true;
    righ2.value = false;
    righ3.value = false;
    righ4.value = false;
    righ5.value = false;
    righ6.value = false;
    righ7.value = false;
    righ8.value = false;
    stockStore.getStocks();
  }
  if (index == 8) {
    righ2.value = true;
    righ1.value = false;
    righ3.value = false;
    righ4.value = false;
    righ5.value = false;
    righ6.value = false;
    righ7.value = false;
    righ8.value = false;
    productStore.getProductByCatId(index);
  }
  if (index == 5) {
    righ3.value = true;
    righ1.value = false;
    righ2.value = false;
    righ4.value = false;
    righ5.value = false;
    righ6.value = false;
    righ7.value = false;
    righ8.value = false;
    productStore.getProductByCatId(index);
  }
  if (index == 9) {
    righ4.value = true;
    righ1.value = false;
    righ2.value = false;
    righ3.value = false;
    righ5.value = false;
    righ6.value = false;
    righ7.value = false;
    righ8.value = false;
    productStore.getProductByCatId(index);
  }
  if (index == 10) {
    righ5.value = true;
    righ1.value = false;
    righ2.value = false;
    righ3.value = false;
    righ4.value = false;
    righ6.value = false;
    righ7.value = false;
    righ8.value = false;
    productStore.getProductByCatId(index);
  }
  if (index == 13) {
    righ6.value = true;
    righ1.value = false;
    righ2.value = false;
    righ3.value = false;
    righ4.value = false;
    righ5.value = false;
    righ7.value = false;
    righ8.value = false;
    productStore.getProductByCatId(index);
  }
  if (index == 11) {
    righ7.value = true;
    righ1.value = false;
    righ2.value = false;
    righ3.value = false;
    righ4.value = false;
    righ5.value = false;
    righ6.value = false;
    righ8.value = false;
    productStore.getProductByCatId(index);
  }
  if (index == 6) {
    righ8.value = true;
    righ1.value = false;
    righ2.value = false;
    righ3.value = false;
    righ4.value = false;
    righ5.value = false;
    righ6.value = false;
    righ7.value = false;
    productStore.getProductByCatId(index);
  }
};
const change = () => {
  opener.value = !opener.value;
  righ1.value = false;
  righ2.value = false;
  righ3.value = false;
  righ4.value = false;
  righ5.value = false;
  righ6.value = false;
  righ7.value = false;
  righ8.value = false;
};

let basketNumber = ref();
let clientFav = ref();
const otish = async (id: any) => {
  await router.push(`/products/${id}`);
  location.reload();
};

const single = async (id: number) => {
  await router.push(`/product/${id}`);
  location.reload();
};

// // // // // search
const inputv = ref("");
const isopen = ref(false);

const handleChange = async (e: any) => {
  inputv.value = e.target.value;
  isopen.value = true;
  if (e.target.value == "") {
    isopen.value = false;
  }
  await productStore.getProductSearch({ name: inputv.value });
};
onMounted(async () => {
  basketNumber.value = await store1.getClientBaskets(+getCookie("clientId"));
  clientFav.value = await store2.getClientFavourites({
    client_id: +getCookie("clientId"),
  });
  await store.getCategories();
});
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
    position: relative;
  }
  a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* Adjust the thickness of the underline */
    background-color: black; /* Adjust the color of the underline */
    transition: width 0.3s ease; /* Adjust the animation duration and timing function */
  }

  a:hover::before {
    width: 100%;
  }
  a:hover {
    color: black;
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
  z-index: 0;
}
.category {
  z-index: 10000000000;
  box-shadow: 2px 5px 7px rgba(0, 0, 0, 0.1), -2px -5px 7px rgba(0, 0, 0, 0.1);
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
