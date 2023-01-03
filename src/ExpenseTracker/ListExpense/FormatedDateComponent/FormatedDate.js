import "./FormatedDate.scss";
const FormatedDate = (props) => {
  return (
    <div className="dateFormated">
      <div>{props.date.toLocaleString("en-us", { month: "long" })}</div>
      <div>{props.date.toLocaleString("en-us", { day: "2-digit" })}</div>
      <div>{props.date.getFullYear()}</div>
    </div>
  );
};
export default FormatedDate;
