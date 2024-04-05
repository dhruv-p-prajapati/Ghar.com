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
  (err) => {
    return {
      success: false,
      data: [],
      error: err.message
    };
  }
);

export const getUsers = () => API.get("users");

export const getBuilders = () => API.get("builders");

export const registerBuilder = (builderObj) => API.post("builders", builderObj);

export const registerUser = (userObj) => API.post("users", userObj);

export const findUser = (email) => API.get(`users?email=${email}`);

export const findBuilder = (email) => API.get(`builders?email=${email}`);

export const getAllCategories = () => API.get("categories");

export const getAllProperties = () => API.get("properties");

export const registerProperty = (propertyObj) => API.post("properties", propertyObj);

export const getPropertyById = (propertyId) => API.get(`properties/${propertyId}`);

export default API;
