import { Card } from "../../DesignSystem/Card/Card";
import { SectionTitle } from "../../DesignSystem/Title/Title";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { ExpenseItem } from "./ExpenseItem";
export const Expenses = () => {
  return (
    <Wrapper>
      <Card className="Expenses">
        <SectionTitle>All Expenses</SectionTitle>
        <div className="allExpensesListWrapper">
          <ExpenseItem />
        </div>
      </Card>
    </Wrapper>
  );
};
