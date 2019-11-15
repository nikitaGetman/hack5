import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Events from "../views/Events.vue";
import Organizators from "../views/Organizators.vue";
import Partners from "../views/Partners.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  {
    path: "/events",
    name: "events",
    component: Events
  },
  {
    path: "/organizators",
    name: "organizators",
    component: Organizators
  },
  {
    path: "/partners",
    name: "partners",
    component: Partners
  },
  {
    path: "/organizer/:id",
    name: "home",
    component: Home
  },
  {
    path: "*",
    redirect: "/events"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
