import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// NOTE: Auth logic (login/refresh) will be implemented by another developer.
// This store is prepared so ProtectedRoute and axios interceptor can
// read token/user without breaking the tables view in demo mode.
export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoadingAuth: false,

      // Called on app boot to hydrate auth state from localStorage
      checkAuth: () => {
        const token = get().token;
        set({ isLoadingAuth: false, isAuthenticated: Boolean(token) });
      },

      // Stub login — replace with real API call
      login: async ({ email, password }) => {
        // TODO: integrate with authentication-service (.NET)
        // Example:
        // const { data } = await axiosAuth.post('/auth/login', { email, password });
        // set({ user: data.userDetails, token: data.accessToken, ... });
        console.warn('[AuthStore] login() stub called — integrate real auth here');
        return { success: false, error: 'Auth not yet integrated' };
      },

      logout: () =>
        set({
          user: null,
          token: null,
          refreshToken: null,
          isAuthenticated: false,
        }),

      // Used internally by axios interceptor to refresh tokens
      setTokens: ({ token, refreshToken }) =>
        set({ token, refreshToken, isAuthenticated: true }),
    }),
    { name: 'ice-auth' }
  )
);
