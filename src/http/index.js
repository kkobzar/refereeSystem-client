import axios from "axios";

export const apiUrl = "http://localhost:5000/api";
const $api = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
});
let user = localStorage.getItem("user");


$api.interceptors.request.use((config) => {
  if (user === null) return config;
  let token = JSON.parse(localStorage.getItem("user")).token
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${apiUrl}/auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("user", JSON.stringify({token:response.data.accessToken,user:response.data.user}));
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Unauthorized");
      }
    }
    throw error;
  }
);

export default $api;
