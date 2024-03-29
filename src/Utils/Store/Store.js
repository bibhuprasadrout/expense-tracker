import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import expenseReducer from "../Slices/ExpensesSlice";
import userReducer from "../Slices/UserSlice";
import userAuthReducer from "../Slices/UserAuthSlice";
const Store = configureStore({
  reducer: {
    expenses: expenseReducer,
    user: userReducer,
    userAuth: userAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default Store;
