import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../views/HomePageView.vue";
// import HomeView from "../views/HomeView.vue";
import Main from "../components/Carousel/MainCarousel.vue";
import Product from "../components/Carousel/ProdCarousel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageView,
    },
      component: Main,
    },
    { path: "/prod", name: "Prod", component: Product },
  ],}
});

export default router;
