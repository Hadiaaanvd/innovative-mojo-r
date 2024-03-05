import "./heading.styles.scss";
export default function Heading({ title, yellow, subTitle, ...props }) {
  return (
    <div className={"heading-container"}>
      <div className={"heading"}>{title}</div>
      <div className="yellow">{yellow}</div>
      {subTitle ? <div className={"subtitle"}>{subTitle}</div> : ""}
    </div>
  );
}
