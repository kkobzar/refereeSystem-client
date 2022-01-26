import userService from "@/services/userService";
export default {
  state: {
    isLogged: false,
    user: null,
  },
  mutations: {
    login() {
      this.state.isLogged = true;
    },
    setUser(user) {
      this.state.user = user;
    },
  },
  actions: {
    async loginUser({ commit }, { email, password }) {
      let user = await userService.login(email, password);
      commit("login");
      commit("setUser", user.user);
    },
    //async registerUser({commit},{name,surname,email,password,passwordConfirm})
  },
};
