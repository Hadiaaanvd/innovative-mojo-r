import "./button-primary.styles.scss";
export default function PrimaryButton({ children, ...props }) {
  return (
    <div className={"button-primary-container"}>
      <button {...props}>{children}</button>
    </div>
  );
}
