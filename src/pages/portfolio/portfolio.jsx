import Header from "../../components/header/header.component";
import Tagline from "../../components/tagline/tagline.component";
import Footer from "../../components/footer/footer.component";

import { data } from "./data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./portfolio.styles.scss";

const type = [
  "all",
  "blog",
  "book",
  "e-commerce",
  "events",
  "tech",
  "recent projects",
];

export default function Portfolio() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  return (
    <main className="portfolio-main">
      <Header />
      <div className={"heading"}>Portfolio</div>
      <div className="container portfolio-container ">
        {type.map((item, index) => (
          <span
            key={index}
            onClick={() => setCategory(item)}
            className={`types ${category === item ? "active" : ""} `}
          >
            {item}
          </span>
        ))}
        <div className="row">
          {data
            .filter((x, i) =>
              category === "all"
                ? x
                : category === "recent projects"
                ? i < 21
                : x.type && x.type.includes(category)
            )
            .map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-4 col-sm-6 col-xs-6"
                onClick={() =>
                  navigate(
                    `/portfolio/${item.title
                      .toLowerCase()
                      .replace(/ +/g, "-")}/${index}`
                  )
                }
              >
                <div className="website-container">
                  <div className="image-container">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  {item.title}
                </div>
              </div>
            ))}
        </div>
      </div>

      <Tagline web />
      <Footer />
    </main>
  );
}
