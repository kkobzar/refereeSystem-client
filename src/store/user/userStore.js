import userService from "@/services/authService";
export default {
  state: {
    isLogged: false,
    user: {},
  },
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    setUser(state, user) {
      state.user = user;
    },
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
