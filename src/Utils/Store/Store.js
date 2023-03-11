import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../Slices/ExpensesSlice";
import userReducer from "../Slices/UserSlice";
import userAuthReducer from "../Slices/UserAuthSlice";
const Store = configureStore({
  reducer: {
    expenses: expenseReducer,
    userAuth: userAuthReducer,
    user: userReducer,
  },
});
export default Store;
