import axios from "axios";

// interface AxiosClientConfig extends AxiosRequestConfig {
//   headers?: {
//     Authorization?: string;
//   };
// }

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Изменено на AxiosRequestConfig
    let token = localStorage.getItem("token");
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
axiosClient.interceptors.response.use(
  (res) => {
    return res.data;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosClient;
