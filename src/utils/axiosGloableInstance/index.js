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
export const getUserById = (userId) => API.get(`users/${userId}`);
export const registerUser = (userObj) => API.post("users", userObj);
export const findUser = (email) => API.get(`users?email=${email}`);
export const updateUser = (userId, userObj) => API.patch(`users/${userId}`, userObj);
export const deleteUser = (userId) => API.delete(`users/${userId}`);

export const getBuilders = () => API.get("builders");
export const getBuilderById = (builderId) => API.get(`builders/${builderId}`);
export const registerBuilder = (builderObj) => API.post("builders", builderObj);
export const findBuilder = (email) => API.get(`builders?email=${email}`);
export const updateBuilder = (builderId, builderObj) => API.patch(`builders/${builderId}`, builderObj);

export const getAllCategories = () => API.get("categories");

export const getAllProperties = () => API.get("properties");
export const registerProperty = (propertyObj) => API.post("properties", propertyObj);
export const getPropertyById = (propertyId) => API.get(`properties/${propertyId}`);
export const updateProperty = (propertyId, propertyObj) => API.patch(`properties/${propertyId}`, propertyObj);
export const deleteProperty = (propertyId) => API.delete(`properties/${propertyId}`);

export const getAllRequests = () => API.get("requests");
export const bookPropertyRequest = (requestObj) => API.post("requests", requestObj);
export const updatePropertyRequest = (requestId, requestObj) => API.patch(`requests/${requestId}`, requestObj);
export const deletePropertyRequest = (requestId) => API.delete(`requests/${requestId}`);

export const getAllQueries = () => API.get("queries");
export const registerQuery = (queryObj) => API.post("queries", queryObj);

export default API;
