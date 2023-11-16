import { createRouter, createWebHistory } from "vue-router";
import main from "./main";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [main],
});

export default router;
