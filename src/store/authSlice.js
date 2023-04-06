import { createSlice } from "@reduxjs/toolkit";
const intialAuthState = {
  isAuthenticated: false,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
