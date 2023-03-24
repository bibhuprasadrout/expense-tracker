import styled from "styled-components";
const Date = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const FormatedDate = (props) => {
  return (
    <div className="dateFormated">
      <div>
        {props.date.toLocaleString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div>{props.date.getFullYear()}</div>
    </div>
  );
};
