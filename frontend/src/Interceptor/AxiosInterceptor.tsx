import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
    },
});


axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log("Interceptor ", config);
        return config;
    }
)

export default axiosInstance;