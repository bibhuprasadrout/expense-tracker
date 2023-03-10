import { useEffect, useState } from "react";

import ExpensesData from "../../Data/data";
import { ExpenseForm } from "./ExpenseForm";
import { AddExpenseController } from "./AddExpenseController";

// import axios from "axios";

export const NewExpense = () => {
  // const callServer = async () => {
  //   const serverData = await axios.get("http://localhost:3001/api");
  //   console.log(Object.keys(serverData.data));
  //   console.log(Object.values(serverData.data));
  //   console.log(JSON.stringify(serverData));
  // };
  // useEffect(() => {
  //   callServer();
  // });

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
