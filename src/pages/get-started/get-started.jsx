import { useNavigate } from "react-router-dom";

import animation from "../../assets/animation.gif";
import animation1 from "../../assets/animation1.gif";
import background from "../../assets/background-video.mp4";
import Navbarr from "../../components/navbar/navbar.component";
import PrimaryButton from "../../atoms/button-primary/button-primary.component";

import "./get-started.styles.scss";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <main className={"web-design-main"}>
      <Navbarr />
      <video autoPlay={true} muted loop className={"video"}>
        <source src={background} type="video/mp4" />
      </video>
      <div className={"overlay"}>
        <div className="fontcontainer">
          <div className={"servicesContainer"}>
            <div
              className="content-container"
              onClick={() => navigate("/react-development-contact")}
            >
              <div className="image-container">
                <img src={animation} alt="logo" />
              </div>
              REACT DEVELOPMENT <br /> SERVICES
              <PrimaryButton>Get Sarted</PrimaryButton>
            </div>
            <div
              className="content-container"
              onClick={() => navigate("/mobile-app-development-contact")}
            >
              <div className="image-container">
                <img src={animation1} alt="logo" />
              </div>
              MOBILE APP <br /> DEVELOPMENT
              <PrimaryButton>Get Sarted</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
