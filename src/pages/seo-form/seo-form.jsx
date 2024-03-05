import React, { useState } from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import firebase from "../../firebase/firebase";
import Loader from "../../components/loader/loader.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./seo-form.styles.scss";

const SeoForm = () => {
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
    additional: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const sendFormData = firebase
      .functions()
      .httpsCallable("sendFormDataInEmail");
    const resp = await sendFormData({
      formData,
      heading: "SEO CONTACT FORM ",
      type: "seo",
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
    <div className="seo-quote-component">
      <Header />
      <div className="heading-container">
        <h1>Let's discuss your project!</h1>
        <p>
          We have the creativity, innovative minds and experience to deliver the
          results you expect. We only accept 9 projects per month to ensure
          quality, efficiency and customer service. Get your quote below.
        </p>
      </div>
      <div className="form-container">
        <div className="row container mx-auto">
          <form onSubmit={handleSubmit} className="col-lg-7">
            <h2>GET A QUOTE</h2>
            <p>
              SO YOU LIKE WHAT YOU SEE AND YOU WANT TO GET STARTED? NO PROBLEM,
              JUST FILL OUT A QUICK QUESTIONNAIRE. SOMEONE WILL CONTACT YOU
              WITHIN 24 HOURS WITH A QUOTE.
            </p>
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
                type="tel"
                placeholder="CONTACT NUMBER"
                name="contactNumber"
                value={formData.contactNumber}
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
              <input
                type="text"
                name="projectGoal"
                placeholder="WHAT IS YOUR GOAL FOR THIS PROJECT?"
                value={formData.projectGoal}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                name="timeFrame"
                type="text"
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
                placeholder="What is your budget?"
                value={formData.budget}
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
            <button onSubmit={(event) => handleSubmit(event)}>
              {loading ? <Loader size="13px" borderSize={"1px"} /> : ""}
              Submit
            </button>
          </form>
          <div className="contact-background col-lg-5">
            <div className="overlay"></div>
            <div className="about-us">
              <h2>Innovative Mojo</h2>
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

export default SeoForm;
