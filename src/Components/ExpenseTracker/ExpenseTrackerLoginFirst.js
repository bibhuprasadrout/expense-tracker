import styled from "styled-components";
import { Section } from "../../DesignSystem/Section/Section";
import { MainTitle } from "../../DesignSystem/Title/Title";
import { Card } from "../../DesignSystem/Card/Card";
const ExpenseTrackedWrapper = styled(Section)`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

const LoginFirstsCard = styled(Card)`
  min-height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 3rem;
    font-weight: 500;
    padding: 1rem;
    height: auto;
  }
`;
export const ExpenseTrackerLoginFirst = () => {
  return (
    <>
      <MainTitle>Expenses Tracker</MainTitle>
      <ExpenseTrackedWrapper>
        <LoginFirstsCard>
          <div>Please login first</div>
        </LoginFirstsCard>
      </ExpenseTrackedWrapper>
    </>
  );
};
