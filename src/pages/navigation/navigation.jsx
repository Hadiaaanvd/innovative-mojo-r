import logo from "../../assets/logo.svg";
import brain from "../../assets/brain.svg";
import video from "../../assets/background-video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.component";

import "./navigation.styles.scss";
export default function Navigation() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="navigation-main">
      <video autoPlay={true} muted loop className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="d-flex justify-content-between">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            width={145}
            height={110}
          />
          <div>
            <a href="tel:12138380155" className="number">
              (213) 838-0155
            </a>

            <div className="sidebar-toggler">
              <button
                className="sidebar-toggle"
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                ☰
              </button>
              <Sidebar active={toggleSidebar} />
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="navlinks">
            <div
              onClick={() => navigate("/get-started")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Get Started
            </div>
            <div
              onClick={() => navigate("/react-development-service")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              React Development
            </div>
            {/*
            <div
              onClick={() => navigate("/web-design-services")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Web Design Services
            </div>
            <div
              onClick={() => navigate("/wordpress-web-design-service")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Wordpress Web Design Services
            </div>
            <div
              onClick={() => navigate("/wordpress-web-development-service")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Wordpress Web Development Services
            </div>
            <div
              onClick={() => navigate("/ecommerce-web-design-service")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              <span>Ecommerce Web Design Services</span>
            </div> */}
            <div
              onClick={() => navigate("/mobile-app-development")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Mobile App Development
            </div>
            <div
              onClick={() =>
                window.open("https://careplans.innovativemojo.com/", "_blank")
              }
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Care Plans
            </div>
            <div
              onClick={() => navigate("/seo")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              SEO
            </div>
            <div
              className={`navlink ${animate ? "loaded" : ""}`}
              onClick={() => navigate("/explainers")}
            >
              Explaniners
            </div>
            <div
              onClick={() => navigate("/about")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              About US
            </div>
            <div
              onClick={() =>
                window.open("https://mojonews.innovativemojo.com/", "_blank")
              }
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Mojo News
            </div>
            <div
              onClick={() => navigate("/portfolio")}
              className={`navlink ${animate ? "loaded" : ""}`}
            >
              Portfolio
            </div>
          </div>
          <div className="footer">
            <div className="social">
              <div className="d-flex align-items-center">
                <div className="facebook">
                  <a
                    href="https://www.facebook.com/innovativemojo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div className={"instagram"}>
                  <a
                    href="https://www.instagram.com/innovativemojo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div
                  className="link"
                  onClick={() =>
                    window.open("https://reports.innovativemojo.com/", "_blank")
                  }
                >
                  Reports
                </div>
              </div>
              <div>
                <div className="small">(213) 838-0155</div>
              </div>
            </div>

            <div className={` branding-container ${animate ? "loaded" : ""}`}>
              <div className="team">INNOVATIVE MOJO TEAM</div>
              <div className="branding">
                <img className="brandingImage" src={brain} alt="logo" />
                <div className="brandingText">
                  <span>INNOVATIVE MOJO</span>
                </div>
              </div>
              <div className="tag">We strive to create your dreams</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
