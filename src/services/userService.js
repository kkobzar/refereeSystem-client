import $api from "../../http";
import store from "@/store";

export default {
  async login(email, password) {
    let re = await $api.post("/auth/login", {
      email,
      password
    });
    if (re.status === 200) {
      localStorage.setItem("token", re.data.accessToken);
    }

    await store.dispatch("loginUser",re.data.user)
    console.log(re);
    return re.data;

  },
  async register(name, surname, email, password, passwordConfirm) {
    const re = await $api.post("/auth/register", {
      name,
      surname,
      email,
      password,
      passwordConfirm,
    });

    if (re.status === 200){
      console.log(re);
    }
    return re.data;

  },
};
