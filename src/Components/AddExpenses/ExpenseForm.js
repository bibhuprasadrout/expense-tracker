import styled from "styled-components";

import { useEffect, useState } from "react";

import { Card } from "../../DesignSystem/Card/Card";
import { SectionTitle } from "../../DesignSystem/Title/Title";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";

import ExpensesData from "../../Data/data";
const ExpenseFormCard = styled(Card)`
  min-height: 30rem;
  .formCard {
    display: inherit;
    .hide {
      display: none;
    }
    form {
      display: flex;
      flex-flow: column;
      gap: 1rem;
      .formControls {
        display: flex;
        flex-flow: column;
        gap: 1rem;
        .formControl {
          input {
            border: 7px solid rgba(230, 230, 230, 0.3);
            height: 2.5rem;
            border-radius: 7px;
            padding: 1rem;
          }
        }
      }
      .formActions {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
      }
    }
  }
`;
export const ExpenseForm = ({
  onNewExpense,
  changeExpenseFormStatus,
  expenseFormStatusTrue,
  ...rest
}) => {
  // Child component of NewExpense.
  // This component renders a form to accept input from user
  const expenseData = ExpensesData();
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
    <Wrapper>
      <ExpenseFormCard className="expenseFormCard">
        <SectionTitle>Enter Expense Form</SectionTitle>
        <Card className="formCard">
          <form onSubmit={submitHandler}>
            <Card className="formControls">
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
            </Card>
            <Card className="formActions">
              <button className="button" type="submit">
                Submit
              </button>
              <button
                className="button"
                type="reset"
                onClick={() => renderAddMyExpense()}
              >
                Reset
              </button>
            </Card>
          </form>
        </Card>
      </ExpenseFormCard>
    </Wrapper>
  );
};
