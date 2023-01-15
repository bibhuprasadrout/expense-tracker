import "./ExpenseItem.scss";

import CardComponent from "../../../DesignSystem/CardComponent/Card";
import Button from "../../../DesignSystem/Button/Button";

import FormatedDate from "../FormatedDateComponent/FormatedDate";

const ExpenseItem = (props) => {
  const expensesData = props.toChild;
  return (
    <ul className="allExpensesList">
      {expensesData.map((item) => {
        return (
          <li key={item.id}>
            <CardComponent className="expenseEntry">
              <CardComponent className="expenseInfoCard expenseInfodate">
                <FormatedDate date={item.date} />
              </CardComponent>
              <CardComponent className="expenseInfoCard expenseInfoTitle">
                {item.title}
              </CardComponent>
              <CardComponent className="expenseInfoCard expenseInfoAmount">
                {item.amount}
              </CardComponent>
              <CardComponent className="expenseActionCard">
                <Button>Edit this expense</Button>
              </CardComponent>
            </CardComponent>
          </li>
        );
      })}
    </ul>
  );
};
export default ExpenseItem;
