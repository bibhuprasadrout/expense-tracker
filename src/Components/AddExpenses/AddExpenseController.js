import styled from "styled-components";
import { NormalButton } from "../../DesignSystem/Button/Button";

import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
const AddMyExpenseCard = styled(Card)`
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    font-size: 3rem;
    font-weight: 500;
    padding: 1rem 3rem;
    height: auto;
  }
`;
export const AddExpenseController = ({
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
      <Wrapper>
        <AddMyExpenseCard>
          <NormalButton onClick={() => renderExpenseForm()}>
            Add my expense
          </NormalButton>
        </AddMyExpenseCard>
      </Wrapper>
    </>
  );
};
