import "./Section.scss";
const SectionCompoenet = (props) => {
  const classList = `section ${props.classNamee}`;
  return <div className={classList}>{props.children}</div>;
};
export default SectionCompoenet;
