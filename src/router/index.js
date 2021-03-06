import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login";
import Registration from "@/views/RegistrationView";
import store from "@/store";
import Habit from "@/views/Habit";

Vue.use(VueRouter);

//const user = localStorage.getItem("user");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { authReq: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/habit/:id",
    name: "HabitInfo",
    component: Habit,
    meta: {authReq: true},
    props: true,
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.authReq && !store.getters.isLogged) {
    next({ name: "Login" });
  }
  next();
});
export default router;
