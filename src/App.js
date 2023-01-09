import React from "react";
import ReactDOM from "react-dom/client";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
const App = () => <ExpenseTracker />;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
