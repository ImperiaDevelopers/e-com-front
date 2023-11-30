import { createRouter, createWebHistory } from "vue-router";
import product from "./product";
import main from "./main";
import basket from "./basket";
import compare from "./compare";
import feedback from "./feedback";
import like from "./like";
import payment from "./payment";
import aboutAshyo from "./aboutAshyo";
import login from "./login";
import user from "./user";
import otp from "./otp";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    main,
    basket,
    compare,
    feedback,
    like,
    login,
    product,
    payment,
    aboutAshyo,
    user,
    otp,
    {
      path: "/map",
      name: "map",
      component: () => import("../components/Loader/Loading.vue"),
    },
  ],
});

export default router;
