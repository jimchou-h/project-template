import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const service = axios.create();

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
