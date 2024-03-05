import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import Tagline from "../../components/tagline/tagline.component";
import SecondaryButton from "../../atoms/button-secondary/button-secondary.component";

import react1 from "../../assets/react/react3.jpg";
import react2 from "../../assets/react/react4.jpg";
import person from "../../assets/react/person.jpg";
import developer from "../../assets/service/three.jpg";
import three from "../../assets/react/three.jpg";
import two from "../../assets/service/two.jpg";

import review1 from "../../assets/react/TMP-1.jpg";
import review2 from "../../assets/react/TMP-2.jpg";
import review4 from "../../assets/react/TMP-4.jpg";
import review3 from "../../assets/react/TMP-5.jpg";
import review5 from "../../assets/react/TMP-6.jpg";
import review6 from "../../assets/react/TMP-7.jpg";
import { ReactComponent as Tick } from "../../assets/react/tick.svg";

import { ReactComponent as User } from "../../assets/service/ui.svg";
import { ReactComponent as Efficiency } from "../../assets/service/efficiency.svg";
import { ReactComponent as Security } from "../../assets/service/security.svg";
import { ReactComponent as Innovation } from "../../assets/service/innovation.svg";

import "./web-dev.styles.scss";
import { useRef } from "react";
import Navbarr from "../../components/navbar/navbar.component";

const benefits = [
  {
    title: "Increased Efficiency",
    subtext: "Streamline Operations",
    img: <Efficiency className="service-icon efficiency" />,
  },

  {
    title: "Enhanced Security",
    subtext: "Protect with Confidence",
    img: <Security className="service-icon" />,
  },
  {
    title: "Improved UI/UX",
    subtext: "Seamless User Experience",
    img: <User className="service-icon user" />,
  },
  {
    title: "Increased Innovation",
    subtext: "Unleash Creative Potential",
    img: <Innovation className="service-icon bulb" />,
  },
];
const team = [
  { name: "Hadia Naveed", designation: "React Developer" },
  { name: "Fahad Bashir", designation: "Technical Lead" },
  { name: "Supel Irame", designation: "Product Owner" },
  { name: "Lorem Ipsum", designation: "Manager" },
];

const testimonials = [
  {
    image: review1,
    review:
      "Throughout the process of designing our website the team at Innovative Mojo never seized to impress. They were great! I felt at ease with such a professional and experienced team at my side..",
    name: "Able Maug",
  },
  {
    image: review2,
    review:
      "I worked on a project for an SME in the service sector and asked Innovative Mojo to optimize the company's website. Innovative Mojo worked swiftly and meticulously on the website and captured our vision.",
    name: "Dennis Bridgeford",
  },
  {
    image: review6,
    review:
      "Remarkable work! Professionalism at it’s best. This team really goes above and beyond to bring your plan to life. This is truly the best website company I’ve ever worked with and the prices are the bomb!",
    name: "Ashley Richardson",
  },
  {
    image: review1,
    review:
      "Throughout the process of designing our website the team at Innovative Mojo never seized to impress. They were great! I felt at ease with such a professional and experienced team at my side..",
    name: "Able Maug",
  },
  {
    image: review2,
    review:
      "I worked on a project for an SME in the service sector and asked Innovative Mojo to optimize the company's website. Innovative Mojo worked swiftly and meticulously on the website and captured our vision.",
    name: "Dennis Bridgeford",
  },
  {
    image: review6,
    review:
      "Remarkable work! Professionalism at it’s best. This team really goes above and beyond to bring your plan to life. This is truly the best website company I’ve ever worked with and the prices are the bomb!",
    name: "Ashley Richardson",
  },
  {
    image: review1,
    review:
      "Throughout the process of designing our website the team at Innovative Mojo never seized to impress. They were great! I felt at ease with such a professional and experienced team at my side..",
    name: "Able Maug",
  },
  {
    image: review2,
    review:
      "I worked on a project for an SME in the service sector and asked Innovative Mojo to optimize the company's website. Innovative Mojo worked swiftly and meticulously on the website and captured our vision.",
    name: "Dennis Bridgeford",
  },
  {
    image: review6,
    review:
      "Remarkable work! Professionalism at it’s best. This team really goes above and beyond to bring your plan to life. This is truly the best website company I’ve ever worked with and the prices are the bomb!",
    name: "Ashley Richardson",
  },
  {
    image: review1,
    review:
      "Throughout the process of designing our website the team at Innovative Mojo never seized to impress. They were great! I felt at ease with such a professional and experienced team at my side..",
    name: "Able Maug",
  },
  {
    image: review2,
    review:
      "I worked on a project for an SME in the service sector and asked Innovative Mojo to optimize the company's website. Innovative Mojo worked swiftly and meticulously on the website and captured our vision.",
    name: "Dennis Bridgeford",
  },
  {
    image: review6,
    review:
      "Remarkable work! Professionalism at it’s best. This team really goes above and beyond to bring your plan to life. This is truly the best website company I’ve ever worked with and the prices are the bomb!",
    name: "Ashley Richardson",
  },

  {
    image: review4,
    review:
      "Great and Quality work. The team reviewed our requirements, and provided a solution that was innovative yet affordable.",
    name: "Marquis Garrett, RCDD",
  },
  {
    image: review5,
    review:
      "Spectacular job on my website! Thank you to the amazing team at Innovative Mojo! Well worth the price!!",
    name: "Stephan Isaacs",
  },
  {
    image: review3,
    review:
      "Absolutely looooove the website guys!!! I couldn’t have asked for a better outcome. The  team managed to achieve the perfect mixture of beauty, elegance and professionalism, truly ideal for my new spa.",
    name: "Zahra Lakhani",
  },
  {
    image: review4,
    review:
      "Great and Quality work. The team reviewed our requirements, and provided a solution that was innovative yet affordable.",
    name: "Marquis Garrett, RCDD",
  },
  {
    image: review5,
    review:
      "Spectacular job on my website! Thank you to the amazing team at Innovative Mojo! Well worth the price!!",
    name: "Stephan Isaacs",
  },
  {
    image: review3,
    review:
      "Absolutely looooove the website guys!!! I couldn’t have asked for a better outcome. The  team managed to achieve the perfect mixture of beauty, elegance and professionalism, truly ideal for my new spa.",
    name: "Zahra Lakhani",
  },
  {
    image: review4,
    review:
      "Great and Quality work. The team reviewed our requirements, and provided a solution that was innovative yet affordable.",
    name: "Marquis Garrett, RCDD",
  },
  {
    image: review5,
    review:
      "Spectacular job on my website! Thank you to the amazing team at Innovative Mojo! Well worth the price!!",
    name: "Stephan Isaacs",
  },
  {
    image: review3,
    review:
      "Absolutely looooove the website guys!!! I couldn’t have asked for a better outcome. The  team managed to achieve the perfect mixture of beauty, elegance and professionalism, truly ideal for my new spa.",
    name: "Zahra Lakhani",
  },
  {
    image: review4,
    review:
      "Great and Quality work. The team reviewed our requirements, and provided a solution that was innovative yet affordable.",
    name: "Marquis Garrett, RCDD",
  },
  {
    image: review5,
    review:
      "Spectacular job on my website! Thank you to the amazing team at Innovative Mojo! Well worth the price!!",
    name: "Stephan Isaacs",
  },
  {
    image: review3,
    review:
      "Absolutely looooove the website guys!!! I couldn’t have asked for a better outcome. The  team managed to achieve the perfect mixture of beauty, elegance and professionalism, truly ideal for my new spa.",
    name: "Zahra Lakhani",
  },
];
export default function WebDevelopment() {
  const navigate = useNavigate();
  const myRef = useRef(null);
  return (
    <main className="react-development-component">
      <Navbarr />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/swiper-bundle.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/swiper-bundle.min.css.map"
      />
      <div className="react-development-banner">
        <div className="banner-header">
          <div>
            Innovative Mojo <br /> <span>React Development</span>
          </div>
          <div className="subtext">
            Building innovative react solutions tailored to your needs
          </div>
          <div className="header-buttons">
            <SecondaryButton
              type="orange small"
              onClick={() => navigate("/react-development-contact")}
            >
              Get Started
            </SecondaryButton>
            &nbsp;
            <SecondaryButton
              type="noshadow small"
              onClick={() =>
                myRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </SecondaryButton>
          </div>
        </div>
        <img className="top" src={react1} alt="" />
        <img className="bottom" src={react2} alt="" />
      </div>

      <div className="services-container" ref={myRef}>
        <div className="container">
          <div className="services-heading">
            <span className="subtext">How can we help you?</span>
            We Help Your Business
          </div>
          <div className="services-content-container row col-11 mx-auto">
            <img className="person col-lg-4" src={person} alt="" />
            <div className="row col-lg-8">
              {benefits.map((item, index) => (
                <div key={index} className="individual-service-container col-6">
                  <div className="individual-service">
                    {item.img}
                    <div className="service-content">
                      <div className="title"> {item.title} </div>
                      <div className="subtext"> {item.subtext} </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-12 full-width-container">
                With over 15 years of experience, we've developed a method of
                building websites that yields success which can be customized
                for unique projects.
              </div>
            </div>
          </div>
          <div className="pointers-content sub-session col-11 row mx-auto">
            <div className="text-content  col-lg-6">
              <div>
                <div className="title">
                  Elevate Your Business <br /> with Innovative Mojo
                </div>
                <div className="subtext">
                  Captivate and Connect with Engaging Web Solutions
                </div>
              </div>
              <ul>
                <li>
                  <Tick />
                  Our team of experienced developers can help you create unique,
                  powerful websites that will showcase your business in the best
                  light.
                </li>
                <li>
                  <Tick />
                  We will create a website that is visually appealing and user
                  friendly, making it easier for customers to find you and
                  interact with your business.
                </li>
                <li>
                  <Tick />
                  Our developers use the latest coding languages and platforms
                  to ensure your website is fast, secure, and up-to-date.
                </li>
                <li>
                  <Tick />
                  At Innovative MOJO, we believe in helping businesses reach
                  their full potential through innovative coding solutions.
                </li>
                <li>
                  <Tick />
                  We strive to provide a reliable, professional service that
                  will help you get the most out of your online presence.
                </li>
                {/* Contact us today to learn more about how we can help you unleash
                your innovative mojo! */}
              </ul>
            </div>
            <div className="development col-lg-6">
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={developer} alt="" />
            </div>
          </div>
        </div>
        <div className="team-content">
          <div className="triangle"></div>
          <div className="text-content container">
            <div className="col-lg-11 mx-auto">
              <div className="title">
                <div className="subtext">EXCLUSIVE MEMBERS</div>
                Meet Our Experienced <br />
                Team Members
              </div>
              <br /> <br />
              <div className="row col-12">
                {team.map((item) => (
                  <div className="col-lg-3 col-md-3 col-6 team-card-container">
                    <div className="team-face">
                      <img
                        src="https://rrdevs.net/demos/html/techex/assets/img/team/team1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="team-card">
                      <div className="name">{item.name}</div>
                      <div className="designation">{item.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pointers-content testimonial">
          <div className="row testimonial-wrapper">
            {testimonials
              .filter((x, i) => i < 12)
              .map((item, index) => (
                <div className="col-lg-4">
                  <div
                    className={`testimonial-card-container section-${index}`}
                  >
                    <div className="testimonial-face">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="testimonial-card-content">
                      <div className="designation">{item.review}</div>
                      <div className="name">{item.name}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <br />
          <div className="row testimonial-wrapper">
            {testimonials
              .filter((x, i) => i > 11)
              .map((item, index) => (
                <div className="col-lg-4">
                  <div
                    className={`testimonial-card-container section-${index}`}
                  >
                    <div className="testimonial-face">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="testimonial-card-content">
                      <div className="designation">{item.review}</div>
                      <div className="name">{item.name}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Tagline web />
      <Footer />
    </main>
  );
}
