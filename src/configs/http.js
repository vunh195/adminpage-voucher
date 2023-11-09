import axios from "axios";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../redux/features/authSlice";

const http = axios.create({
  baseURL: `http://localhost:8082`,
});
http.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default http;
