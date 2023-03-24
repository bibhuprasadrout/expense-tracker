import styled from "styled-components";
import { Images } from "../../Assets/Images";
import { Card } from "../../DesignSystem/Card/Card";
import { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleFilterOptions,
  all,
  fashion,
  food,
  necessities,
  transportation,
  handleDateYear,
  handleDateMonth,
  handleDateDay,
  handleOrder,
} from "../../Utils/Slices/ExpensesSlice";
import { ExpenseContext } from "../../Utils/Contexts/ExpenseContext";
const FilterBody = styled.div`
  .filterCardWrapper {
    display: flex;
    gap: 1rem;
    .filterCard {
      display: flex;
      gap: 1rem;
      background-color: rgba(0, 0, 0, 0.3);
      img {
        height: 0.9rem;
        transform: rotate(90deg);
        &.upDownIcon {
          transform: rotate(0deg);
        }
      }
      .input {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        max-width: max-content;
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
  }
  .filterDropdownCard {
    position: relative;
    min-width: max-content;
    border-radius: 7px 7px 0 0;
    img {
      height: 0.9rem;
      transform: rotate(90deg);
    }
    .filterOptionExpand {
      display: flex;
      flex-flow: column;
      padding: 1rem 0.1rem;
      gap: 0.5rem;
      position: absolute;
      align-items: center;
      flex-flow: column;
      padding: 1rem 0.1rem;
      gap: 0.5rem;
      top: 100%;
      left: 0;
      background-color: rgba(0, 0, 0, 0.77);
      color: rgba(255, 255, 255, 1);
      min-width: max-content;
      width: 100%;
      border-radius: 0 0 7px 7px;
      label {
        min-width: max-content;
        width: calc(100% - 2rem);
        text-align: center;
        padding-bottom: 0.5rem;
        border-radius: 0;
        border-bottom: 1px solid black;
        input {
          width: 0;
        }
      }
    }
    .filterOptionNone {
      display: none;
    }
  }
`;
export const Filter = ({ expenseState, setExpenseState }) => {
  const expense = useContext(ExpenseContext);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(true);
  const [year, setYear] = useState("All");
  const [yearList, setYearList] = useState(false);
  const [month, setMonth] = useState("All");
  const [monthList, setMonthList] = useState(false);
  const [day, setDay] = useState("All");
  const [dayList, setDayList] = useState(false);
  const [type, setType] = useState("All");
  const [optionYear, setOptionYear] = useState(false);
  const [optionMonth, setOptionMonth] = useState(false);
  const [optionDay, setOptionDay] = useState(false);
  const [optionType, setOptionType] = useState(false);
  useEffect(() => {
    dispatch(handleFilterOptions(expenseState));
  });
  useEffect(() => {
    dispatch(all());
  }, []);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, year: year };
    });
    setYearList((prev) => !prev);
  }, [year]);
  useEffect(() => {
    dispatch(handleDateYear());
  }, [yearList]);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, month: month };
    });
    setMonthList((prev) => !prev);
  }, [month]);
  useEffect(() => {
    dispatch(handleDateMonth());
  }, [monthList]);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, day: day };
    });
    setDayList((prev) => !prev);
  }, [day]);
  useEffect(() => {
    dispatch(handleDateDay());
  }, [dayList]);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, type: type };
    });
    if (type === "All") {
      dispatch(all());
    }
    if (type === "Fashion") {
      dispatch(fashion());
    }
    if (type === "Food") {
      dispatch(food());
    }
    if (type === "Necessities") {
      dispatch(necessities());
    }
    if (type === "Transportation") {
      dispatch(transportation());
    }
  }, [type]);
  useEffect(() => {
    setExpenseState((expenseState) => {
      return { ...expenseState, order: order };
    });
    dispatch(handleOrder());
  }, [order]);
  const types = ["All", "Fashion", "Food", "Necessities", "Transportation"];
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const handleYearOption = () => {
    setOptionYear((prev) => !prev);
  };
  const handleMonthOption = () => {
    setOptionMonth((prev) => !prev);
  };
  const handleDayOption = () => {
    setOptionDay((prev) => !prev);
  };
  const handleTypeOption = () => {
    setOptionType((prev) => !prev);
  };
  return (
    <>
      <FilterBody>
        <Card className="filterCardWrapper">
          {
            //Set the date filter
          }
          <Card className="filterCard">
            <span>Date :</span>
            <Card className="filterDropdownCard" onClick={handleYearOption}>
              Year: <img src={Images.direct} />
              <ul
                className={
                  optionYear ? "filterOptionExpand" : "filterOptionNone"
                }
              >
                <label
                  onChange={(e) => {
                    if (optionDay === true) {
                      handleDayOption();
                    }
                    if (optionMonth === true) {
                      handleMonthOption();
                    }
                    handleYearOption();
                    setYear(e.target.value);
                    setMonth("All");
                    setDay("All");
                  }}
                >
                  All
                  <input type="radio" value="All" name="expenseDateYear" />
                </label>
                {years.map((year, index) => (
                  <label
                    key={index}
                    onChange={(e) => {
                      if (optionDay === true) {
                        handleDayOption();
                      }
                      if (optionMonth === true) {
                        handleMonthOption();
                      }
                      handleYearOption();
                      setYear(e.target.value);
                      setMonth("All");
                      setDay("All");
                    }}
                  >
                    {year}
                    <input type="radio" value={year} name="expenseDateYear" />
                  </label>
                ))}
              </ul>
            </Card>
            <Card
              className="filterDropdownCard"
              onClick={handleMonthOption}
              style={
                year != "All" ? {} : { pointerEvents: "none", opacity: "0.3" }
              }
            >
              Month: <img src={Images.direct} />
              <ul
                className={
                  optionMonth ? "filterOptionExpand" : "filterOptionNone"
                }
              >
                {months.map((month, index) => (
                  <label
                    key={index}
                    onChange={(e) => {
                      if (optionDay === true) {
                        handleDayOption();
                      }
                      handleMonthOption();
                      setMonth(e.target.value);
                      setDay("All");
                    }}
                  >
                    {month}
                    <input type="radio" value={month} name="expenseDateMonth" />
                  </label>
                ))}
              </ul>
            </Card>
            <Card
              className="filterDropdownCard"
              onClick={handleDayOption}
              style={
                year != "All" && month != "All"
                  ? {}
                  : { pointerEvents: "none", opacity: "0.3" }
              }
            >
              Day: <img src={Images.direct} />
              <ul
                className={
                  optionDay ? "filterOptionExpand" : "filterOptionNone"
                }
              >
                <label onChange={() => setDay("All")}>
                  All
                  <input type="radio" value="All" name="expenseDateDay" />
                </label>
                {days.map((day, index) => (
                  <label key={index} onChange={(e) => setDay(e.target.value)}>
                    {day}
                    <input type="radio" value={day} name="expenseDateDay" />
                  </label>
                ))}
              </ul>
            </Card>
          </Card>
          {
            //Set the type filter
          }
          <Card className="filterCard">
            <Card className="filterDropdownCard" onClick={handleTypeOption}>
              Type: <img src={Images.direct} />
              <ul
                className={
                  optionType ? "filterOptionExpand" : "filterOptionNone"
                }
              >
                {types.map((type, index) => (
                  <label key={index} onChange={(e) => setType(e.target.value)}>
                    {type}
                    <input type="radio" value={type} name="expenseType" />
                  </label>
                ))}
              </ul>
            </Card>
          </Card>
          {
            //Set the order filter
          }
          <Card className="filterCard">
            <Card>
              <label
                className="input upDownInput"
                onClick={(e) => setOrder((prev) => !prev)}
              >
                <img className="upDownIcon" src={Images.upDownDark} />
              </label>
            </Card>
          </Card>
        </Card>
      </FilterBody>
    </>
  );
};
