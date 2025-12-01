import { api } from "./axios";
import jwtUtil from "./jwtUtil";

let isRefreshing = false;
let refreshQueue: ((token: string | null) => void)[] = [];

export const setupInterceptors = (auth: { token: any; refresh: () => any; logout: () => void; }) => {
  if (api.interceptors.request.use.length > 0) return;

  api.interceptors.request.use(
    async (config) => {
      let token = auth.token;

      // token missing OR expired
      if (!token || jwtUtil(token)) {
        if (!isRefreshing) {
          isRefreshing = true;
          const newToken = await auth.refresh();
          isRefreshing = false;

          refreshQueue.forEach((cb) => cb(newToken));
          refreshQueue = [];

          token = newToken;
        } else {
          const newToken = await new Promise((resolve) =>
            refreshQueue.push(resolve)
          );
          token = newToken;
        }
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // --- RESPONSE INTERCEPTOR ---
  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const original = error.config;

      if (error.response?.status === 401 && !original._retry) {
        original._retry = true;

        const newToken = await auth.refresh();

        if (!newToken) {
          auth.logout();
          return Promise.reject(error);
        }

        original.headers.Authorization = `Bearer ${newToken}`;
        return api(original);
      }

      return Promise.reject(error);
    }
  );
};
