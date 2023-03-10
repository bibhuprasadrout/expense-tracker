import styled from "styled-components";
import { Section } from "../../DesignSystem/Section/Section";
import { MainTitle } from "../../DesignSystem/Title/Title";
import { NewExpense } from "../AddExpenses/NewExpense";
import { Expenses } from "../ListExpense/Expenses";
const ExpenseTrackedWrapper = styled(Section)`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const ExpenseTracker = () => {
  return (
    <>
      <MainTitle>Expenses Tracker</MainTitle>
      <ExpenseTrackedWrapper>
        <NewExpense />
        <Expenses />
      </ExpenseTrackedWrapper>
    </>
  );
};
