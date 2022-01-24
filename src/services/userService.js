const headers = {
  "Content-Type": "application/json",
};
const apiUrl = "http://localhost:5000";
export default {
  async login(email, password) {
    return (
      await fetch(apiUrl + "/api/auth/login", {
        method: "POST",
        mode: "cors",
        headers,
        body: JSON.stringify({ email, password }),
      })
    ).json();
  },
  async register(name, surname, email, password, passwordConfirm) {
    return (
      await fetch(apiUrl + "/api/auth/register", {
        method: "POST",
        headers,
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
          passwordConfirm,
        }),
      })
    ).json();
  },
};
