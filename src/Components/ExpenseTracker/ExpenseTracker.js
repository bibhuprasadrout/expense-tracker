import styled from "styled-components";
import { Section } from "../../DesignSystem/Section/Section";
import { MainTitle } from "../../DesignSystem/Title/Title";
import { NewExpense } from "../AddExpenses/NewExpense";
import { Filter } from "../FilterExpense/Filter";
import { Expenses } from "../ListExpense/Expenses";
import { ExpenseContext } from "../../Utils/Contexts/ExpenseContext";
import { useState } from "react";
const ExpenseTrackedWrapper = styled(Section)`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const ExpenseTracker = () => {
  const [expenseState, setExpenseState] = useState({ testItem: "abc" });
  const value = { expenseState: expenseState, setExpenseState };
  return (
    <>
      <MainTitle>Expenses Tracker</MainTitle>
      <ExpenseContext.Provider value={value}>
        <ExpenseTrackedWrapper>
          <NewExpense />
          <Filter
            expenseState={expenseState}
            setExpenseState={setExpenseState}
          />
          <Expenses />
        </ExpenseTrackedWrapper>
      </ExpenseContext.Provider>
    </>
  );
};
