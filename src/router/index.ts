import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: import("@/components/Login.vue"),
    },
    { path: "/signup", component: import("@/components/Signup.vue") },
    { path: "/about", component: () => import("@/components/About.vue") },
    { path: "/poll/:id", component: () => import("@/components/Voting.vue") },
    { path: "/blogs", component: () => import("@/components/Blogs.vue") },
    {
      path: "/blog/:username/:id",
      component: () => import("@/components/BlogSingle.vue"),
    },
    { path: "/contact", component: () => import("@/components/Contact.vue") },
  ],
});

export default router;
