import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    user:{}
  },
  mutations: {
    login() {
      this.state.isLogged = true;
    },
    setUser(user){
      this.state.user = user
    }
  },
  actions: {
    async loginUser({ commit }, user) {
      commit("login");
      commit("setUser", user);
    },
  },
  modules: {},
});
