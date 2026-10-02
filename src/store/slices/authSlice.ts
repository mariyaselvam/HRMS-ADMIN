import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/features/auth/types/auth.types";
import { StorageKeys } from "@/enums/storage.enum";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const getInitialToken = (): string | null =>
  localStorage.getItem(StorageKeys.AUTH_TOKEN);

const getInitialUser = (): User | null => {
  const data = localStorage.getItem(StorageKeys.USER_DATA);
  if (!data) return null;
  try {
    return JSON.parse(data) as User;
  } catch {
    return null;
  }
};

const initialToken = getInitialToken();
const initialUser = getInitialUser();

const initialState: AuthState = {
  user: initialUser,
  token: initialToken,
  isAuthenticated: Boolean(initialToken && initialUser),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem(StorageKeys.AUTH_TOKEN, action.payload.token);
      localStorage.setItem(
        StorageKeys.USER_DATA,
        JSON.stringify(action.payload.user),
      );
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem(StorageKeys.AUTH_TOKEN);
      localStorage.removeItem(StorageKeys.USER_DATA);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
