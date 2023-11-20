import { createRouter, createWebHistory } from "vue-router";
import main from "./main";
import basket from "./basket";
import filter from "./filter";
import compare from "./compare";
import feedback from "./feedback";
import like from "./like";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [main, basket, filter, compare, feedback, like],
});

export default router;
