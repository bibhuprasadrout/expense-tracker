import { useEffect, useState } from "react";

import ExpensesData from "../../Data/data";
import { ExpenseForm } from "./ExpenseForm";
import { AddExpenseController } from "./AddExpenseController";

// import axios from "axios";

export const NewExpense = () => {
  const expenseData = ExpensesData();
  const [id, setId] = useState(expenseData.length + 1);

  const newExpenseHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: id,
    };
    setId((prev) => prev + 1);
  };
  const [expenseFormStatus, setExpenseFormStatus] = useState(false);
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
