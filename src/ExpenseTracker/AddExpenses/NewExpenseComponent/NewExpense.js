import "./NewExpense.scss";

import { useEffect, useState } from "react";

import ExpensesData from "../../../Data/data";
import ExpenseForm from "../ExpenseFormComponent/ExpenseForm";
import AddExpenseController from "../AddExpenseControllerComponent/AddExpenseController";

const NewExpense = () => {
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
  const [expenseFormStatus, setExpenseFormStatus] = useState(false);
  console.log(expenseFormStatus);
  useEffect(() => {
    console.log(expenseFormStatus);
  }, [expenseFormStatus]);
  return (
    <>
      {expenseFormStatus && (
        <ExpenseForm
          onNewExpense={newExpenseHandler}
          expenseFormStatusTrue={expenseFormStatus}
          changeExpenseFormStatus={setExpenseFormStatus}
        />
      )}
      {!expenseFormStatus && (
        <AddExpenseController
          expenseFormStatusFalse={expenseFormStatus}
          changeExpenseFormStatus={setExpenseFormStatus}
        />
      )}
    </>
  );
};
export default NewExpense;
