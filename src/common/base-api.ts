import axios, { AxiosInstance } from "axios";
const baseURL = "http://localhost:8050";//process.env.REACT_APP_BASE_URL;
console.log('baseURL',baseURL);
export const api: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
    },
    responseType: 'json',
});

