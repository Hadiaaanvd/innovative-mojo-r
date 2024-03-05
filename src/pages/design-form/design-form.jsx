import React, { useState } from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import firebase from "../../firebase/firebase";
import Loader from "../../components/loader/loader.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./design-form.styles.scss";

const DesignForm = () => {
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
      heading: "WEB DESIGN CONTACT FORM ",
      type: "web",
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
    <div className="design-quote-component">
      <Header />
      <div className="form-container">
        <div className="row mx-auto container">
          <div className="contact-background col-lg-5">
            <div className="about-us">
              <h2>GET A QUOTE</h2>
              <p>
                We have the creativity, innovative minds and experience to
                deliver the results you expect. We only accept 9 projects per
                month to ensure quality, efficiency and customer service. <br />
                Get your quote now.
              </p>

              <div>
                <div className="label-containers">
                  <div className="label-container">
                    <div className="label">Email Us</div>
                    <a
                      href="mailto:contact@innovativemojo.com"
                      className="number"
                    >
                      Contact@innovativemojo.com
                    </a>
                  </div>
                  <div className="label-container">
                    <div className="label">Call Us</div>
                    <a href="tel:12138380155" className="number">
                      (213) 838-0155
                    </a>
                  </div>
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
          <form onSubmit={handleSubmit} className="col-lg-7">
            {/* <h2>GET A QUOTE</h2>
            <p>
              SO YOU LIKE WHAT YOU SEE AND YOU WANT TO GET STARTED? NO PROBLEM,
              JUST FILL OUT A QUICK QUESTIONNAIRE ABOUT YOUR REACT PROJECT AND
              WE'LL GET STARTED. SOMEONE WILL CONTACT YOU WITHIN 24 HOURS WITH A
              QUOTE.
            </p> */}
            <div className="row-container">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="applicationName"
                  type="text"
                  placeholder="WHAT IS THE NAME OF YOUR WEBSITE?"
                  value={formData.applicationName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="applicationUrl"
                  type="text"
                  placeholder="CURRENT WEBSITE URL"
                  value={formData.applicationUrl}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  name="contactNumber"
                  type="tel"
                  placeholder="CONTACT NUMBER"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  name="projectGoal"
                  type="text"
                  placeholder="WHAT IS YOUR GOAL FOR THIS PROJECT?"
                  value={formData.projectGoal}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="timeFrame"
                  placeholder="WHAT IS YOUR TIME-FRAME FOR THIS PROJECT?"
                  value={formData.timeFrame}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="budget"
                  type="text"
                  placeholder="WHAT IS YOUR BUDGET?"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="pages"
                  type="text"
                  placeholder="HOW MANY PAGES DO YOU NEED?"
                  value={formData.pages}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="applicationUI"
                  type="text"
                  placeholder="DO YOU HAVE WEBSITE UI?"
                  value={formData.applicationUI}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span>Best Time To Reach?</span>
                <label>
                  <input
                    type="radio"
                    name="bestTime"
                    value="MORNING"
                    checked={formData.bestTime === "MORNING"}
                    onChange={handleChange}
                  />
                  <p>Morning</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="bestTime"
                    value="AFTERNOON"
                    checked={formData.bestTime === "AFTERNOON"}
                    onChange={handleChange}
                  />
                  <p>Afternoon</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="bestTime"
                    value="EVENING"
                    checked={formData.bestTime === "EVENING"}
                    onChange={handleChange}
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
                    type="radio"
                    name="eCommerce"
                    value="YES"
                    checked={formData.eCommerce === "YES"}
                    onChange={handleChange}
                  />
                  <p>YES</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="eCommerce"
                    value="NO"
                    checked={formData.eCommerce === "NO"}
                    onChange={handleChange}
                  />
                  <p>NO</p>
                </label>
              </div>
              <div>
                <span>Do you have content for the project?</span>
                <label>
                  <input
                    type="radio"
                    name="hasContent"
                    value="YES"
                    checked={formData.hasContent === "YES"}
                    onChange={handleChange}
                  />
                  <p>YES</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasContent"
                    value="NO"
                    checked={formData.hasContent === "NO"}
                    onChange={handleChange}
                  />
                  <p>NO</p>
                </label>
              </div>
              <div>
                <input
                  name="inspirations"
                  type="text"
                  placeholder="GIVE EXAMPLE OF SOME WEBSITES YOU LIKE (PASTE URL)"
                  value={formData.inspirations}
                  onChange={handleChange}
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
            <button onSubmit={(event) => handleSubmit(event)}>
              {loading ? <Loader size="13px" borderSize={"1px"} /> : ""}
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DesignForm;
