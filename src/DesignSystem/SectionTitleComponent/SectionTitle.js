import "./SectionTitle.scss";
const SectionTitleComponennt = (props) => {
  const classList = `sectionTitle ${props.className}`;
  return <div className={classList}>{props.children}</div>;
};
export default SectionTitleComponennt;
