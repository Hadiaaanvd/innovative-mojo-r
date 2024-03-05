import SecondaryButton from "../button-secondary/button-secondary.component";
import "./content.styles.scss";
export default function Content({ button, description, children, background }) {
  return (
    <div
      className={`content-component message-body ${
        background ? "background" : ""
      }`}
    >
      <div className={"content-component-heading"}>{children}</div>
      <div className="quote">{description ? description : ""}</div>
      {button ? (
        <SecondaryButton type="orange small" icon={true}>
          Get a call
        </SecondaryButton>
      ) : (
        ""
      )}
    </div>
  );
}
