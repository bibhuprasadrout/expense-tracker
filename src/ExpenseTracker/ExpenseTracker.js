import "./ExpenseTracker.scss";
import SectionComponennt from "../DesignSystem/SectionComponent/Section";
import SectionTitleComponent from "../DesignSystem/SectionTitleComponent/SectionTitle";
import ExpensesComponent from "../ExpenseTracker/ListExpense/ExpensesComponent/Expenses";
import ExpenseFormComponent from "../ExpenseTracker/AddExpenses/ExpenseFormComponent/ExpenseForm";

const ExpenseTracker = () => {
  return (
    <div>
      <SectionComponennt>
        <SectionTitleComponent>Expenses Tracker</SectionTitleComponent>;
        <ExpenseFormComponent />
        <ExpensesComponent />
      </SectionComponennt>
    </div>
  );
};

export default ExpenseTracker;
