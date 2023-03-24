import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Card } from "../../DesignSystem/Card/Card";
import { NormalButton } from "../../DesignSystem/Button/Button";
import { FormatedDate } from "./FormatedDate";
import { useSelector } from "react-redux";
import { useState, useContext, useRef } from "react";
import { ExpenseContext } from "../../Utils/Contexts/ExpenseContext";
const AllExpenseList = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  .expenseEntry {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(0, 0, 0, 0.3);
    .expenseInfodate {
      grid-column: span 2;
    }
    .expenseInfodate {
      grid-column: span 2;
      width: 100%;
    }
    .expenseInfoTitle {
      grid-column: span 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .expenseInfoAmount {
      grid-column: span 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .expenseActionCard {
      grid-column: span 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const ExpenseItem = () => {
  const ref = useRef();
  const expense = useContext(ExpenseContext);
  const importedExpensesData = useSelector(
    (reduxStore) => reduxStore?.expenses?.itemsForRender
  );
  const expensesDataOrder = [...importedExpensesData];
  return (
    <AllExpenseList>
      {expensesDataOrder.map((item) => {
        return (
          <li key={item.id}>
            <Card className="expenseEntry">
              <Card className="expenseInfoCard expenseInfotype">
                {item.type}
              </Card>
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
