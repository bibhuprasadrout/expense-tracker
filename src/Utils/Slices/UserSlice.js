import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "user",
  initialState: {
    items: [
      {
        user: "X8SJSJ",
        password: "123456",
      },
      {
        user: "XSM93K",
        password: "123456",
      },
      {
        user: "XQM2WS",
        password: "123456",
      },
      {
        user: "XQ32WS",
        password: "123456",
      },
      {
        user: "X28WIQ",
        password: "123456",
      },
    ],
  },
  redusers: {},
});
export default UserSlice.reducer;
