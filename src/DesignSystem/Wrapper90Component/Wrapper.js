import "./Wrapper.scss";
const Wrapper90Compoenet = (props) => {
  const classList = `wrapper ${props.classNamee}`;
  return <div className={classList}>{props.children}</div>;
};
export default Wrapper90Compoenet;
