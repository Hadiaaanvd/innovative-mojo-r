import React, { useState } from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import firebase from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Loader from "../../components/loader/loader.component";

import "./form.styles.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    applicationName: "",
    applicationUrl: "",
    contactNumber: "",
    bestTime: "",
    projectGoal: "",
    timeFrame: "",
    budget: "",
    applicationUI: "",
    pages: "",
    monthlyMaintenance: false,
    eCommerce: false,
    hasContent: false,
    inspirations: "",
    additional: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(formData);

    const sendFormData = firebase
      .functions()
      .httpsCallable("sendFormDataInEmail");
    const resp = await sendFormData({
      formData,
      heading: "MOBILE APP DEVELOPMENT CONTACT FORM ",
      type: "app",
    });
    console.log(resp);
    if (resp) {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        applicationName: "",
        applicationUrl: "",
        contactNumber: "",
        bestTime: "",
        projectGoal: "",
        timeFrame: "",
        budget: "",
        applicationUI: "",
        pages: "",
        monthlyMaintenance: false,
        eCommerce: false,
        hasContent: false,
        inspirations: "",
        additional: "",
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
    <div className="mobile-quote-component">
      <Header />

      <div className="form-container">
        <div className="row container mx-auto">
          <form onSubmit={(event) => handleSubmit(event)} className="col-lg-7">
            <h2>LET'S DISCUSS YOUR PROJECT</h2>
            <div className="row-container">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="applicationName"
                  type="text"
                  placeholder="WHAT IS THE NAME OF YOUR APPLICATION?"
                  value={formData.applicationName}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="applicationUrl"
                  placeholder="CURRENT APPLICATION URL"
                  value={formData.applicationUrl}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <input
                  name="contactNumber"
                  type="tel"
                  placeholder="CONTACT NUMBER"
                  value={formData.contactNumber}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>

              <div>
                <input
                  name="projectGoal"
                  placeholder="WHAT IS YOUR GOAL FOR THIS PROJECT?"
                  value={formData.projectGoal}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="timeFrame"
                  placeholder="WHAT IS YOUR TIME-FRAME FOR THIS PROJECT?"
                  value={formData.timeFrame}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="budget"
                  placeholder="What is your budget?"
                  value={formData.budget}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="pages"
                  placeholder="HOW MANY PAGES DO YOU NEED?"
                  value={formData.pages}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="applicationUI"
                  placeholder="DO YOU HAVE APPLICATION UI?"
                  value={formData.applicationUI}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <span>Best Time To Reach?</span>
                <label>
                  <input
                    name="bestTime"
                    type="radio"
                    value="MORNING"
                    checked={formData.bestTime === "MORNING"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>Morning</p>
                </label>
                <label>
                  <input
                    name="bestTime"
                    type="radio"
                    value="AFTERNOON"
                    checked={formData.bestTime === "AFTERNOON"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>Afternoon</p>
                </label>
                <label>
                  <input
                    name="bestTime"
                    type="radio"
                    value="EVENING"
                    checked={formData.bestTime === "EVENING"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>Evening</p>
                </label>
              </div>
              <div>
                <span>Do you need monthly maintenance?</span>
                <label>
                  <input
                    name="monthlyMaintenance"
                    type="radio"
                    value="YES"
                    checked={formData.monthlyMaintenance === "YES"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>YES</p>
                </label>
                <label>
                  <input
                    name="monthlyMaintenance"
                    type="radio"
                    value="NO"
                    checked={formData.monthlyMaintenance === "NO"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>NO</p>
                </label>
              </div>
              <div>
                <span>Do you need e-commerce?</span>

                <label>
                  <input
                    name="eCommerce"
                    type="radio"
                    value="YES"
                    checked={formData.eCommerce === "YES"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>YES</p>
                </label>
                <label>
                  <input
                    name="eCommerce"
                    type="radio"
                    value="NO"
                    checked={formData.eCommerce === "NO"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>NO</p>
                </label>
              </div>
              <div>
                <span>Do you have content for the project?</span>
                <label>
                  <input
                    name="hasContent"
                    value="YES"
                    checked={formData.hasContent === "YES"}
                    onChange={(event) => handleChange(event)}
                    type="radio"
                  />
                  <p>YES</p>
                </label>
                <label>
                  <input
                    value="NO"
                    type="radio"
                    checked={formData.hasContent === "NO"}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>NO</p>
                </label>
              </div>
              <div>
                <input
                  name="inspirations"
                  placeholder="GIVE EXAMPLE OF SOME APPLICATIONS YOU LIKE (PASTE URL)"
                  value={formData.inspirations}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
              <div>
                <input
                  name="additional"
                  placeholder="ANYTHING ELSE YOU WOULD LIKE US TO KNOW"
                  value={formData.additional}
                  onChange={(event) => handleChange(event)}
                  required
                />
              </div>
            </div>
            <button
              disabled={loading}
              onSubmit={(event) => handleSubmit(event)}
            >
              {loading ? <Loader size="13px" borderSize={"1px"} /> : ""}
              Submit
            </button>
          </form>
          <div className="contact-background col-lg-5">
            <div className="overlay"></div>
            <div className="about-us">
              <h2>GET A QUOTE</h2>
              <p>
                We have the creativity, innovative minds and experience to
                deliver the results you expect. We only accept 9 projects per
                month to ensure quality, efficiency and customer service. Get
                your quote below.
              </p>
              <div className="label-container">
                <div className="label">Email Us</div>
                <a href="mailto:contact@innovativemojo.com" className="number">
                  Contact@innovativemojo.com
                </a>
              </div>
              <div className="label-container">
                <div className="label">Call Us</div>
                <a href="tel:12138380155" className="number">
                  (213) 838-0155
                </a>
              </div>
              <div className="socials">
                <div
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/innovativemojo",
                      "_blank"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/innovativemojo/",
                      "_blank"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
