import { createRouter, createWebHistory } from "vue-router";
// import main from "../components/Carousel/MainCarousel.vue";
// import Product from "../components/Carousel/ProdCarousel.vue";
// import Map from "../components/Map/Map.vue";
import main from "./main";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //   {
    //     path: "/",
    //     name: "home",
    //     component: Main,
    //   },
    //   { path: "/prod", name: "Prod", component: Product },
    //   { path: "/map", name: "Map", component: Map },
    main,
  ],
});

export default router;
