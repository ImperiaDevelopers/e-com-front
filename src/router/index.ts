import { createRouter, createWebHistory } from "vue-router";
import product from "./product";
import main from "./main";
import basket from "./basket";
import compare from "./compare";
import feedback from "./feedback";
import like from "./like";
import payment from "./payment";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [main, basket, compare, feedback, like, product,payment],
});

export default router;
