import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';


const BACKEND_URL = 'https://18.ecmascript.pages.academy/cinemaddict';
const REQUEST_TIMEOUT = 5000;
const AUTH_TOKEN_KEY_NAME = 'cinemaddict';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.headers) {
        config.headers['Authorization'] = AUTH_TOKEN_KEY_NAME;
      }

      return config;
    }
  );

  return api;
};
