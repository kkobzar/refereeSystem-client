import axios from "axios";

export const apiUrl = "http://localhost:5000/api";
const $api = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
});

$api.interceptors.request.use((config) => {
  if (localStorage.getItem("token") === null) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});



export default $api;
