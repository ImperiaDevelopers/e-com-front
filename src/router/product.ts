export default {
  path: "/products",
  name: "products",
  component: () => import("../pages/Product/ProductPage.vue"),
  children: [
    {
      path: "/product",
      name: "product",
      component: () => import("../components/Product/SingleProduct.vue"),
      children: [
        {
          path: "/product",
          name: "product",
          component: () => import("../components/Product/Performance.vue"),
        },
      ],
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../components/Product/Products.vue"),
    },
  ],
};
