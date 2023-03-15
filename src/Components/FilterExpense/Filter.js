import styled from "styled-components";
import { Images } from "../../Assets/Images";
import { Card } from "../../DesignSystem/Card/Card";
import { useState, useContext, useEffect } from "react";
import { ExpenseContext } from "../../Utils/Contexts/ExpenseContext";
const FilterBody = styled.div`
  .filterCard {
    display: flex;
    gap: 1rem;
    .input {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      max-width: max-content;
      img {
        height: 0.9rem;
        transform: rotate(90deg);
        &.upDownIcon {
          transform: rotate(0deg);
        }
      }
      input {
        border: 0;
        outline: 0;
        background-color: transparent;
        width: 0;
        &[type="date"]::-webkit-calendar-picker-indicator {
          background: transparent;
          color: transparent;
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        &[type="type"] {
          display: none;
        }
      }
    }
  }
`;
export const Filter = ({ expenseState, setExpenseState }) => {
  const expense = useContext(ExpenseContext);
  const [order, setOrder] = useState(true);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, date: date };
    });
  }, [date]);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, type: type };
    });
  }, [type]);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, order: order };
    });
  }, [order]);
  useEffect(() => {
    console.log("expenseState:");
    console.log(expense.expenseState);
  });
  return (
    <>
      <FilterBody>
        <Card className="filterCard">
          <Card className="filterCard">
            <label
              className="input dateInput"
              onChange={(e) => setDate(e.target.value)}
            >
              Date: <img src={Images.direct} />
              <input type="date" />
            </label>
          </Card>
          <Card className="filterCard">
            <label
              className="input typeInput"
              onChange={(e) => setType(e.target.value)}
            >
              Type: <img src={Images.direct} />
              <input type="radio" />
            </label>
          </Card>
          <Card className="filterCard">
            <label
              className="input upDownInput"
              onClick={(e) => setOrder((prev) => !prev)}
            >
              <img className="upDownIcon" src={Images.upDownDark} />
            </label>
          </Card>
        </Card>
      </FilterBody>
    </>
  );
};
