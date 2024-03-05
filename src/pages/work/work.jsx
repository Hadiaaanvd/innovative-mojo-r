import { useNavigate, useParams } from "react-router-dom";
import { data } from "../portfolio/data";
import "./work.styles.scss";

export default function Work() {
  const { id } = useParams();
  const category = data[id];
  const navigate = useNavigate();
  return (
    <main className="work-component">
      <div className="portfolio-nav">
        <span className="prev" onClick={() => navigate("/portfolio")}>
          <div rel="next">Close</div>
        </span>
        {id > 0 ? (
          <span
            className="prev"
            onClick={() =>
              navigate(
                `/portfolio/${data[id - 1].title
                  .toLowerCase()
                  .replace(/ +/g, "-")}/${id - 1}`
              )
            }
          >
            <div rel="next">Prev</div>
          </span>
        ) : (
          ""
        )}

        {data.length - 1 !== parseInt(id) ? (
          <span
            className="next"
            onClick={() =>
              navigate(
                `/portfolio/${data[parseInt(id) + 1].title
                  .toLowerCase()
                  .replace(/ +/g, "-")}/${parseInt(id) + 1}`
              )
            }
          >
            <div>Next</div>
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="content-container container">
        <div className="description-container">
          <div className={"heading"}>{category.title}</div>
          <div className={"description"}>{category.description}</div>
        </div>
        <div className="images-container">
          {category.images.map((item, index) => (
            <img src={item} key={index} alt="" />
          ))}
        </div>
      </div>
    </main>
  );
}
