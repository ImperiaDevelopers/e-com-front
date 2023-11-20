import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main/MainPage.vue";
import product from "./product";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    product,
    
  ],
});

export default router;
