import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbarr from "../navbar/navbar.component";

import cover from "../../assets/cover.mp4";

import "./general.styles.scss";
export default function Header() {
  return (
    <div className="header">
      <Navbarr />
      <video autoPlay={true} muted loop className="video">
        <source src={cover} type="video/mp4" />
      </video>
      <div className="overlay">
        <span className="jost">
          <a href="tel:12138380155">(213) 838-0155</a>
          <div className="socials">
            <a
              href="https://www.facebook.com/innovativemojo"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.instagram.com/innovativemojo/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
}
