import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Main from "../components/Carousel/MainCarousel.vue";
import Product from "../components/Carousel/ProdCarousel.vue";
import Footer from "../components/footer/footer.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    { path: "/prod", name: "Prod", component: Product },
    { path: "/footer", name: "Footer", component: Footer },
  ],
});

export default router;
