import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../layouts/App.vue"),
    children: [
      {
        path: "",
        name: "Index",
        component: Index,
        meta: {
          pageTitle: "Inicio App",
        },
      },
    ],
  },
  {
    path: "/not-found",
    name: "NotFount",
    component: NotFound,
  },
  {
    path: "*",
    redirect: "/not-found",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: process.env.BASE_URL,
});

export default router;
