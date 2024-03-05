import { useState } from "react";
import "./collapse.styles.scss";
export default function Collapse({ item }) {
  const { title, description } = item;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={"collapse-container"}>
      <div className="title-container" onClick={handleClick}>
        {title}
        <i className={`fas ${active ? "fa-caret-up" : "fa-caret-right"}`}></i>
      </div>
      <div
        className={`description ${
          active ? "active-category" : "nonactive-category"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
