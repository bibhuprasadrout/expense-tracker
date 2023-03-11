import { createSlice } from "@reduxjs/toolkit";
const UserAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    authStatus: {
      initialLoginState: false,
      currentLoginState: false,
      LoginStatus: () => (this.currentLoginState ? "Logout" : "Login"),
    },
  },
  reducers: {
    login: (state) => {
      state.currentLoginState = true;
    },
    logoff: (state) => {
      state.currentLoginState = false;
    },
  },
});
export const { login, logoff } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
