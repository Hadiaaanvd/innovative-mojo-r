import arrow from "../../assets/right-arrow.svg";
import "./button-secondary.styles.scss";
export default function SecondaryButton({ children, type, icon, ...props }) {
  console.log(icon);
  return (
    <div className={"button-secondary-container"}>
      <button {...props} className={type}>
        {!icon ? "" : <img src={arrow} alt="" />} {children}
      </button>
    </div>
  );
}
