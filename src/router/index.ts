import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main/MainPage.vue";

import Filter from "../components/filter/FilterComponent.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    { path: "/filter", name: "Filter", component: Filter },
  ],
});

export default router;
