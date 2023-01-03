import "./Title.scss";
const SectionTitleComponennt = (props) => {
  const classList = `title ${props.className}`;
  return <div className={classList}>{props.children}</div>;
};
export default SectionTitleComponennt;
