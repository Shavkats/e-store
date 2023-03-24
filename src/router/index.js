import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../pages/Product.vue"),
      props: true,
    },
  ],
});

export default router;
