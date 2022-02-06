import Vue from "vue";
import Vuex from "vuex";
import userStore from "@/store/user/userStore";
import habitStore from "@/store/habits/habitStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { userStore, habitStore},
});
