import React from "react";
import ReactDOM from "react-dom/client";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
export default App = () => {
  return <ExpenseTracker />;
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
