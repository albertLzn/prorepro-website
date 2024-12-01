import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: () => import("../views/Invoice.vue")
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
