import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import firebase from "../../firebase/firebase";

import divider from "../../assets/footer-diver.png";

import "./general.styles.scss";
import { useState } from "react";
import Loader from "../loader/loader.component";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    console.log("sdhds");
    setLoading(true);
    event.preventDefault();
    console.log(formData);

    const sendFormData = firebase
      .functions()
      .httpsCallable("sendFormDataInEmail");
    const resp = await sendFormData({
      formData,
      heading: "Subscription To Newsletter ",
      type: "app",
    });
    if (resp) {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="nav-container">
          <div className="footer-heading">About Us</div>
          <img src={divider} className="divider-footer" alt="divider" />
          <div>
            Innovative MOJO looks to take your business to the next level. We
            believe in getting to know your business to make your vision become
            a reality. Contact us today to get started.
          </div>
          <div className="socials">
            <div>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div className="nav-container">
          <div className="footer-heading">Navigation</div>
          <img src={divider} className="divider-footer" alt="divider" />
          <div className="nav-item" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faAngleRight} />
            Home
          </div>
          <div className="nav-item" onClick={() => navigate("/about")}>
            <FontAwesomeIcon icon={faAngleRight} />
            About Us
          </div>
          <div className="nav-item" onClick={() => navigate("/portfolio")}>
            <FontAwesomeIcon icon={faAngleRight} />
            Portfolio
          </div>
          <div
            className="nav-item"
            onClick={() =>
              window.open("https://careplans.innovativemojo.com/", "_blank")
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
            Care Plans
          </div>
          <div className="nav-item" onClick={() => navigate("/seo")}>
            <FontAwesomeIcon icon={faAngleRight} />
            SEO Plans
          </div>
          <div
            className="nav-item"
            onClick={() => navigate("/react-development-contact")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
            Get A Quote
          </div>
        </div>
        <div className="nav-container">
          <div className="footer-heading">Newsletter</div>
          <img
            src={divider}
            className="divider-footer"
            alt="divider"
            required
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            name="name"
            placeholder="FIRST NAME"
            value={formData.name}
            required
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            name="email"
            placeholder="YOUR EMAIL ADDRESS"
            required
            value={formData.email}
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            value={formData.contactNumber}
            onChange={(event) => handleChange(event)}
            name="contactNumber"
            placeholder="YOUR PHONE NUMBER"
            required
          />
          <button disabled={loading} onClick={(event) => handleSubmit(event)}>
            {loading ? <Loader size="13px" borderSize={"1px"} /> : ""}
            Submit
          </button>
        </div>
      </div>

      <div className="privacy-links">
        <div>2023 ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
}
