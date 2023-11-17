import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main/MainPage.vue";
import Payment from "../components/Payments/Payment.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
  ],
});

export default router;
