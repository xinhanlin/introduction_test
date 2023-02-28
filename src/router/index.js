import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/study1",
    name: "study1",
    component: () => import("../views/Study1.vue"),
  },
  {
    path: "/study2",
    name: "study2",

    component: () => import("../views/Study2.vue"),
  },
  {
    path: "/study3",
    name: "study3",

    component: () => import("../views/Study3.vue"),
  },
  {
    path: "/study4",
    name: "study4",

    component: () => import("../views/Study4.vue"),
  },
  {
    path: "/skill1",
    name: "skill1",

    component: () => import("../views/Skill1.vue"),
  },
  {
    path: "/skill2",
    name: "skill2",

    component: () => import("../views/Skill2.vue"),
  },
  {
    path: "/skill3",
    name: "skill3",

    component: () => import("../views/Skill3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
