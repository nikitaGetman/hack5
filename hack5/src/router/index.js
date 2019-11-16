import Vue from "vue";
import VueRouter from "vue-router";

import Events from "../views/Events.vue";
import Organizers from "../views/Organizers.vue";
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
    path: "/organizers",
    name: "organizers",
    component: Organizers
  },
  {
    path: "/partners",
    name: "partners",
    component: Partners
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
