import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AuthState, User } from "../types/auth";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

interface LoginPayload {
  token: string;
  user: User;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

