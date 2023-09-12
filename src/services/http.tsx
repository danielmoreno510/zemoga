import { API_URL } from '../constants';
import axios from 'axios';

const http = axios.create({
  baseURL: API_URL,
  withCredentials: false, // This is the default
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});
http.interceptors.request.use(
  async function (config) {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default http;
