import "./Button.scss";
const Button = (props) => {
  const classList = `button ${props.className}`;
  return <button className={classList}>{props.children}</button>;
};
export default Button;
