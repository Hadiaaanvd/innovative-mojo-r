import { useNavigate } from "react-router-dom";
import "./sidebar.styles.scss";

export default function Sidebar({ active }) {
  const navigate = useNavigate();
  return (
    <div className={`sidebar ${active ? "active" : ""} `}>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/get-started")}>
            <span>Get Started</span>
          </li>
          {/* <li onClick={() => navigate("/web-design-services")}>
            <span>Web Design Services</span>
          </li> */}
          <li onClick={() => navigate("/react-development-service")}>
            <span>React Development Services</span>
          </li>
          {/* <li onClick={() => navigate("/wordpress-web-design-service")}>
            <span>Wordpress Web Design Services</span>
          </li>
          <li onClick={() => navigate("/wordpress-web-development-service")}>
            <span>Wordpress Web Development Services</span>
          </li>
          <li onClick={() => navigate("/ecommerce-web-design-service")}>
            <span>Ecommerce Web Design Services</span>
          </li> */}
          <li onClick={() => navigate("/mobile-app-development")}>
            <span>Mobile App Development</span>
          </li>
          <li
            onClick={() =>
              window.open("https://careplans.innovativemojo.com/", "_blank")
            }
          >
            <span>Care Plans</span>
          </li>
          <li onClick={() => navigate("/seo")}>
            <span>SEO</span>
          </li>
          <li onClick={() => navigate("/explainers")}>
            <span>Explainers</span>
          </li>
          <li onClick={() => navigate("/about")}>
            <span>About Us</span>
          </li>
          <li
            onClick={() =>
              window.open("https://mojonews.innovativemojo.com/", "_blank")
            }
          >
            <span>Mojo News</span>
          </li>
          <li onClick={() => navigate("/portfolio")}>
            <span>Portfolio</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
