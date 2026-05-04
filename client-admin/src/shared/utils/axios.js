import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor: attach token if present
axiosInstance.interceptors.request.use((config) => {
  try {
    const stored = localStorage.getItem('ice-auth');
    if (stored) {
      const { token } = JSON.parse(stored);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (_) {}
  return config;
});

export default axiosInstance;
