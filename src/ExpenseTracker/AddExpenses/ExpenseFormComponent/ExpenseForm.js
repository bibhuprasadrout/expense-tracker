import "./ExpenseForm.scss";

import { useEffect, useState, useCallback } from "react";

import CardComponent from "../../../DesignSystem/CardComponent/Card";
import TitleComponennt from "../../../DesignSystem/TitleComponent/Title";
import Wrapper90Component from "../../../DesignSystem/Wrapper90Component/Wrapper";

import ExpensesData from "../../../Data/data";

const ExpenseForm = ({
  onNewExpense,
  changeExpenseFormStatus,
  expenseFormStatusTrue,
  ...rest
}) => {
  // Child omponent of NewExpenseComponent.
  // This component renders a form to accept input from user
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
    setExpense((prevExpense) => {
      return { ...prevExpense, expenseTitle: event.target.value };
    });
  };
  const expenseAmountHandler = (event) => {
    setExpense((prevExpense) => {
      return { ...prevExpense, expenseAmount: event.target.value };
    });
  };
  const expenseDateHandler = (event) => {
    setExpense((prevExpense) => {
      return { ...prevExpense, expenseDate: event.target.value };
    });
  };
  const [state, setState] = useState("Not Clicked");
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredExpenseData = {
      title: expense.expenseTitle,
      amount: expense.expenseAmount,
      date: new Date(expense.expenseDate).toLocaleDateString(),
    };
    onNewExpense(enteredExpenseData);
    setExpense(() => {
      return {
        expenseTitle: " ",
        expenseAmount: " ",
        expenseDate: " ",
      };
    });
    renderAddMyExpense();
  };
  useEffect(() => {}, [state]);
  const renderAddMyExpense = () => {
    expenseFormStatusTrue
      ? changeExpenseFormStatus((prev) => !prev)
      : changeExpenseFormStatus((prev) => prev);
  };
  return (
    <Wrapper90Component>
      <CardComponent className="expenseFormCard">
        <TitleComponennt>Enter Expense Form</TitleComponennt>
        <CardComponent className="formCard">
          <form onSubmit={submitHandler}>
            <CardComponent className="formControls">
              <div className="formControl">
                <input
                  placeholder="Expense Name"
                  type="text"
                  onChange={expenseTitleHandler}
                  value={expense.expenseTitle}
                />
              </div>
              <div className="formControl">
                <input
                  placeholder="Amount"
                  type="number"
                  min="0.01"
                  step="0.01"
                  onChange={expenseAmountHandler}
                  value={expense.expenseAmount}
                />
              </div>
              <div className="formControl">
                <input
                  type="date"
                  min="2021-01-01"
                  max="2027-12-31"
                  onChange={expenseDateHandler}
                  value={expense.expenseDate}
                />
              </div>
            </CardComponent>
            <CardComponent className="formActions">
              <button className="button" type="submit">
                Submit
              </button>
              <button
                className="button"
                type="reset"
                onClick={
                  // setState("Clicked")
                  // setState((prev) => !prev)
                  () => renderAddMyExpense()
                }
              >
                Reset
              </button>
            </CardComponent>
          </form>
        </CardComponent>
      </CardComponent>
    </Wrapper90Component>
  );
};
export default ExpenseForm;
