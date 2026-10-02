import axios from 'axios';
import { API_BASE_URL } from '@/constants/api.constants';
import { StorageKeys } from '@/enums/storage.enum';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(StorageKeys.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(StorageKeys.AUTH_TOKEN);
      localStorage.removeItem(StorageKeys.USER_DATA);
    }
    return Promise.reject(error);
  }
);
