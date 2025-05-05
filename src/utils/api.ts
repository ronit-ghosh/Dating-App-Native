import axios from 'axios';
import { getToken } from './auth-token';
import { BACKEND_URL } from './env';

const Api = axios.create({
  baseURL: BACKEND_URL,
});

Api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;
