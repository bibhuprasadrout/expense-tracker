import "./ExpenseTracker.scss";

import SectionComponennt from "../DesignSystem/SectionComponent/Section";
import SectionTitleComponent from "../DesignSystem/SectionTitleComponent/SectionTitle";

import NewExpense from "./AddExpenses/NewExpenseComponent/NewExpense";
import Expenses from "../ExpenseTracker/ListExpense/ExpensesComponent/Expenses";

const ExpenseTracker = () => {
  return (
    <SectionComponennt className="expenseTrackerWrapper">
      <SectionTitleComponent>Expenses Tracker</SectionTitleComponent>;
      <NewExpense />
      <Expenses />
    </SectionComponennt>
  );
};

export default ExpenseTracker;
