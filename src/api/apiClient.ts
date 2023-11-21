import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosClientConfig extends AxiosRequestConfig {
  headers?: {
    Authorization?: string;
  };
}

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config: AxiosClientConfig) => {
    let token = localStorage.getItem("token");
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosClient.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosClient;
