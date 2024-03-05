import React, { useRef } from "react";
import support from "../../assets/support.png";
import whatWeDo from "../../assets/what-we-do.png";
import mn1 from "../../assets/mn1.png";
import mn2 from "../../assets/mn2.png";
import mn3 from "../../assets/mn3.png";
import final4 from "../../assets/final-4.svg";
import final2 from "../../assets/Screen-final-2.png";
import Footer from "../../components/footer/footer.component";

import { useNavigate } from "react-router-dom";
import CarouselComponent from "../../atoms/slider/slider.component";
import MobileFeatures from "../../components/mobile-features/mobile-features.component";

import "./mobile-dev.styles.scss";
import { useState } from "react";
import NewHeights from "../../components/new-heights/new-heights.component";
import Navbarr from "../../components/navbar/navbar.component";

const capabilities = [
  "Push Notifications",
  "Feedback system",
  "Social Integration",
  "Customization",
  "Augmented Reality",
  "Google Indoor-Maps",
  "Payment Gateway Integration",
  "Advanced Analytics",
  "Advanced Analytics",
  "QR/Barcode Scanner Integration",
  "Security",
];

const images = [mn3, mn2, mn1];
export default function MobileDevelopment() {
  const myRef = useRef(null);
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="mobile-development-component">
      <Navbarr />
      <div className="header">
        <img
          className="overlay-image"
          decoding="async"
          src={final4}
          title="final-4"
          alt="final-4"
        />

        <div className="col-lg-10 header-content-container">
          <div className="header-content col-lg-6 col-sm-12">
            <br /> <h1>Create a Beautiful App with Innovative MOJO</h1>
            <p>
              The ones who are crazy enough to think they can change the world,
              are the ones that do.
            </p>
            <div className="button-container">
              <button
                onClick={() => navigate("/mobile-app-development-contact")}
              >
                Get Started
              </button>
              <button
                onClick={() =>
                  myRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="header-image">
            <img className="mobile big" decoding="async" src={final2} alt="" />

            <div className="carousel-container">
              <CarouselComponent />
            </div>
          </div>
        </div>
      </div>
      <div ref={myRef}>
        <MobileFeatures />
      </div>

      <NewHeights />
      <div className="what-we-do-container">
        <div className="what-we-do col-10 mx-auto">
          <div className="what-we-do-header">
            <div className="background-top"></div>
            <h2>What We Do</h2>
            <div className="divider"></div>
            <span className="subtext">
              With over 15 years of experience, Innovative MOJO has the
              experience and know how to see your project through. Our team will
              strategize, plan, and execute on your project. Contact us now and
              one of our specialists will reach out to you
            </span>
            <div className="speciality-container">
              <div className="retina">
                <i className="fas fa-tablet-screen-button"></i>
                <h3>Fully Responsive</h3>
                <span className="subtext">
                  Our native apps are fully responsive for Android and Apple
                  devices. We can also create applications exclusively for
                  tablets.
                </span>
              </div>
              <div className="retina">
                <i className="fas fa-mobile-screen-button"></i>
                <h3>Retina Ready</h3>
                <span className="subtext">
                  Our Retina ready, full 4K applications are ready for the
                  current gen high resolution screens and the next
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="outer-circle">
              <div className="inner-circle">
                <img src={whatWeDo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-capabilities">
        <h2>Our Capabilities</h2>
        <div className="divider"></div>
        <span className="subtext">Check out some features we can create</span>
        <div className="capability-container">
          <div className="other-images">
            {images
              .filter((x, i) => i !== currentImage)
              .map((image, index) => (
                <img decoding="async" src={image} alt="" />
              ))}
          </div>

          <div className="header-image">
            <img className="mobile" decoding="async" src={final2} alt="" />
            <div className="d-flex">
              <div className="carousel-container">
                <CarouselComponent
                  setCurrentImage={setCurrentImage}
                  images={images}
                />
              </div>
            </div>
          </div>

          <div className="capabilities">
            {capabilities.map((item) => (
              <div className="capability">{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="support">
        <div className="support-info">
          <h2>Ongoing Support</h2>
          <div className="divider"></div>
          <span className="subtext">
            We also have ongoing support. Our Application Maintenance Plans will
            ensure you keep up with the competition. Talk to your Project
            Manager for details.
          </span>
          <button onClick={() => navigate("/mobile-app-development-contact")}>
            Get Started
          </button>
        </div>
        <img src={support} alt="" />
      </div>

      <Footer />
    </div>
  );
}
