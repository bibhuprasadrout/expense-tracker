import "./ExpenseForm.scss";

import { useState, useEffect } from "react";

import CardComponent from "../../../DesignSystem/CardComponent/Card";
import TitleComponennt from "../../../DesignSystem/TitleComponent/Title";
import Wrapper90Component from "../../../DesignSystem/Wrapper90Component/Wrapper";

import ExpensesData from "../../../Data/data";
import AddExpenseController from "../AddExpenseControllerComponent/AddExpenseController";

const ExpenseForm = () => {
  const expenseData = ExpensesData();
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expenseAmount, setAxpenseAmount] = useState("");
  // const [expenseDate, setExpenseDate] = useState("");
  const [expense, setExpense] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const expenseTitleHandler = (event) => {
    setExpense((expense) => {
      return { ...expense, expenseTitle: event.target.value };
    });
  };
  const expenseAmountHandler = (event) => {
    setExpense((expense) => {
      return { ...expense, expenseAmount: event.target.value };
    });
  };
  const expenseDateHandler = (event) => {
    setExpense((expense) => {
      return { ...expense, expenseDate: event.target.value };
    });
  };
  const [id, setId] = useState(expenseData.length + 1);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredExpenseData = {
      id: id,
      title: expense.expenseTitle,
      amount: expense.expenseAmount,
      date: new Date(expense.expenseDate).toLocaleDateString(),
    };
    console.log(enteredExpenseData);
  };
  useEffect(() => {
    setExpense({
      expenseTitle: " ",
      expenseAmount: " ",
      expenseDate: " ",
    });
  }, []);
  return (
    <Wrapper90Component>
      <CardComponent>
        <TitleComponennt>Enter Expense Form</TitleComponennt>
        <form onSubmit={onSubmitHandler}>
          <div className="formControls">
            <div className="formControl">
              <label>Expense: </label>
              <input type="text" onChange={expenseTitleHandler} />
            </div>
            <div className="formControl">
              <label>Amount: </label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={expenseAmountHandler}
              />
            </div>
            <div className="formControl">
              <label>Date: </label>
              <input
                type="date"
                min="2021-01-01"
                max="2027-12-31"
                onChange={expenseDateHandler}
              />
            </div>
          </div>
          <div className="formActions">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        <AddExpenseController />
      </CardComponent>
    </Wrapper90Component>
  );
};

export default ExpenseForm;
