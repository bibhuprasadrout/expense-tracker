import { Card } from "../../DesignSystem/Card/Card";
import { SectionTitle } from "../../DesignSystem/Title/Title";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";

import ExpensesData from "../../Data/data";

import { ExpenseItem } from "./ExpenseItem";
export const Expenses = () => {
  const expensesData = ExpensesData();

  return (
    <Wrapper>
      <Card className="Expenses">
        <SectionTitle>All Expenses</SectionTitle>
        <div className="allExpensesListWrapper">
          <ExpenseItem toChild={expensesData} />
        </div>
      </Card>
    </Wrapper>
  );
};
