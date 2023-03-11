import { createSlice } from "@reduxjs/toolkit";
const UserAuthSlice = createSlice({
  name: "auth",
  initialState: {
    initialLoginState: false,
    currentLoginState: false,
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

// LoginStatus: () => (this.currentLoginState ? "Logout" : "Login"),
// items: [
//   {
//   },
// ],
