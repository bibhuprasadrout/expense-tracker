import "./Expenses.scss";

import CardComponent from "../../../DesignSystem/CardComponent/Card";
import TitleComponennt from "../../../DesignSystem/TitleComponent/Title";
import Wrapper90Component from "../../../DesignSystem/Wrapper90Component/Wrapper";

import ExpensesData from "../../../Data/data";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
const ExpensesComponent = () => {
  const expensesData = ExpensesData();

  return (
    <Wrapper90Component>
      <CardComponent className="Expenses">
        <TitleComponennt>All Expenses</TitleComponennt>
        <div>
          <ul>
            <ExpenseItem toChild={expensesData} />
          </ul>
        </div>
      </CardComponent>
    </Wrapper90Component>
  );
};
export default ExpensesComponent;
