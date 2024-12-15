import axios, { AxiosInstance } from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || "notfound";
console.log("Connecting to: ", baseURL)
export const api: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
    },
    responseType: 'json',
});

