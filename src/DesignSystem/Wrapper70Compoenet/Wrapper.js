import "./Wrapper.scss";
const Wrapper70Compoenet = (props) => {
  const classList = `wrapper ${props.classNamee}`;
  return <div className={classList}>{props.children}</div>;
};
export default Wrapper70Compoenet;
