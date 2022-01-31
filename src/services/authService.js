import $api from "../../http";

export default {
  //returns tokens and user data
  async login(email, password) {
    let re = await $api.post("/auth/login", {
      email,
      password
    });
    if (re.status === 200) {
      localStorage.setItem("token", re.data.accessToken);
    }

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

    return re.data;

  },
  async getAllUsers(){
    const res = await $api.get("/core/users");

    return res.data;
  },
};
