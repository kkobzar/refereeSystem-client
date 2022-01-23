import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
  },
  mutations: {
    login() {
      this.state.isLogged = true;
    },
  },
  actions: {
    async loginUser({ commit }) {
      commit("login");
    },
  },
  modules: {},
});
