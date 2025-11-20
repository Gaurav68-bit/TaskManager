import axios from "axios";

const api = axios.create({
  baseURL: "https://taskmanager-5-vnco.onrender.com",
});
export default api;
