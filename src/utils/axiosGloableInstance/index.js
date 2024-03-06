import { axios } from 'axios';

const API = axios.create({
    baseURL: "YOUR_BASE_URL",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

export default API;