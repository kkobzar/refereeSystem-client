import userService from "@/services/authService";

const user = localStorage.getItem("user");
const initState = user
  ? { isLogged: true, user: JSON.parse(user).user }
  : {
      isLogged: false,
      user: {},
    };
export default {
  state: initState,
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state){
      state.isLogged = false;
      state.user = {};
    }
  },
  actions: {
    async loginUser({ commit }, { email, password }) {
      let user = await userService.login(email, password);
      commit("login");
      commit("setUser", user.user);
    },
    async registerUser(
      { commit },
      { name, surname, email, password, passwordConfirm }
    ) {
      const user = await userService.register(
        name,
        surname,
        email,
        password,
        passwordConfirm
      );
      commit("login");
      commit("setUser", user.user);
    },
    async setUser({ commit }) {
      //check token first
      if (localStorage.getItem("user")){
        commit("login");
        commit("setUser", JSON.parse(localStorage.getItem("user")))
      }
    },
    async logoutUser({commit}){
      await userService.logout()
      commit("logout")
    }
  },
  getters: {
    isLogged(state) {
      return state.isLogged;
    },
    userInfo(state){
      return state.user;
    }
  }
};
