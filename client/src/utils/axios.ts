import axios from 'axios';
import CONFIG from 'config';

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 0,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
