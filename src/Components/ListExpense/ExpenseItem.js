import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../../DesignSystem/Card/Card";
import { NormalButton } from "../../DesignSystem/Button/Button";
import { FormatedDate } from "./FormatedDate";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ExpenseContext } from "../../Utils/Contexts/ExpenseContext";
const AllExpenseList = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  .expenseEntry {
    display: flex;
    gap: 1rem;
    .expenseInfodate {
      min-width: 7rem;
    }
    .expenseInfoTitle {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .expenseInfoAmount {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 7rem;
    }
    .expenseActionCard {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const ExpenseItem = () => {
  const expense = useContext(ExpenseContext);
  const expensesData = useSelector((expenses) => expenses.expenses.items);
  const expensesDataOrderTrue = [...expensesData];
  const expensesDataOrderFalse = [...expensesData].reverse();
  useEffect(() => {
    console.log(expense?.expenseState?.order);
  });
  return (
    <AllExpenseList>
      {expense?.expenseState?.order
        ? expensesDataOrderTrue.map((item) => {
            return (
              <li key={item.id}>
                <Card className="expenseEntry">
                  <Card className="expenseInfoCard expenseInfodate">
                    <FormatedDate date={item.date} />
                  </Card>
                  <Card className="expenseInfoCard expenseInfoTitle">
                    {item.title}
                  </Card>
                  <Card className="expenseInfoCard expenseInfoAmount">
                    {item.amount}
                  </Card>
                  <Card className="expenseActionCard">
                    <NormalButton>Edit this expense</NormalButton>
                  </Card>
                </Card>
              </li>
            );
          })
        : expensesDataOrderFalse.map((item) => {
            return (
              <li key={item.id}>
                <Card className="expenseEntry">
                  <Card className="expenseInfoCard expenseInfodate">
                    <FormatedDate date={item.date} />
                  </Card>
                  <Card className="expenseInfoCard expenseInfoTitle">
                    {item.title}
                  </Card>
                  <Card className="expenseInfoCard expenseInfoAmount">
                    {item.amount}
                  </Card>
                  <Card className="expenseActionCard">
                    <NormalButton>Edit this expense</NormalButton>
                  </Card>
                </Card>
              </li>
            );
          })}
    </AllExpenseList>
  );
};
