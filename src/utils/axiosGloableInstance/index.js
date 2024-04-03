import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
});

API.interceptors.response.use(
  (response) => {
    return {
      success: true,
      data: response.data,
      error: null
    };
  },
  (error) => {
    console.error("Global error interceptor:", error);
    return Promise.reject({
      success: false,
      data: [],
      error: error.message
    });
  }
);

export const getUsers = () => API.get("users");

export const getBuilders = () => API.get("builders");

export const registerBuilder = (builderObj) => API.post("builders", builderObj);

export default API;
