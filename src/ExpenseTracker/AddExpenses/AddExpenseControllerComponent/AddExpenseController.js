import "./AddExpenseController.scss";

import Wrapper90Compoenet from "../../../DesignSystem/Wrapper90Component/Wrapper";
import Card from "../../../DesignSystem/CardComponent/Card";

const AddExpenseController = ({
  changeExpenseFormStatus,
  expenseFormStatusFalse,
  ...rest
}) => {
  const renderExpenseForm = () => {
    expenseFormStatusFalse
      ? changeExpenseFormStatus((prev) => prev)
      : changeExpenseFormStatus((prev) => !prev);
  };
  return (
    <>
      <Wrapper90Compoenet>
        <Card className="addMyExpenseCard">
          <button
            className="button"
            onClick={() => {
              renderExpenseForm();
            }}
          >
            Add my expense
          </button>
        </Card>
      </Wrapper90Compoenet>
    </>
  );
};
export default AddExpenseController;
