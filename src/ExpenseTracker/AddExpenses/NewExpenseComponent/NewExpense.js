import "./NewExpense.scss";

import { useState } from "react";

import ExpensesData from "../../../Data/data";
import ExpenseForm from "../ExpenseFormComponent/ExpenseForm";

export default NewExpense = () => {
  const expenseData = ExpensesData();
  const [id, setId] = useState(expenseData.length + 1);
  const newExpenseHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: id,
    };
    console.log(newExpenseData);
    setId((prev) => prev + 1);
  };

  return <ExpenseForm onNewExpense={newExpenseHandler} />;
};
