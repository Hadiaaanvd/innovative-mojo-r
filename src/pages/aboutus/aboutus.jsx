import Header from "../../components/header/header.component";
import Message from "../../components/message/message.component";
import Tagline from "../../components/tagline/tagline.component";
import Footer from "../../components/footer/footer.component";
import stat1 from "../../assets/stat1.svg";
import stat2 from "../../assets/stat2.svg";
import stat3 from "../../assets/stat3.svg";
import stat4 from "../../assets/stat4.svg";
import webdev from "../../assets/webdev.png";
import mobapdev from "../../assets/mobapdev.png";
import seo from "../../assets/seo-des.png";
import iviry from "../../assets/iviry.png";
import maintenacnce from "../../assets/maintenacnce.png";
import meraki from "../../assets/meraki.png";
import pacific from "../../assets/pacific.png";
import core from "../../assets/core.gif";
import tresmonet from "../../assets/tresmonet.png";
import foodie from "../../assets/foodie.jpg";
import black from "../../assets/black.png";
import book from "../../assets/book.jpg";

import Heading from "../../atoms/heading/heading.component";
import Carousel from "react-bootstrap/Carousel";

import "./aboutus.styles.scss";
import { useNavigate } from "react-router-dom";

const items = [
  <div className="testimonial-container">
    <div className="testimonial">
      "Innovative Mojo has been stellar from start to finish. I’m a super picky,
      hands on type of person and Eric handled me well. He took my direction and
      constant changes with grace. I’m looking forward to working with them for
      a long time, and I ABSOLUTELY recommend them to anyone looking for graphic
      design, web development, etc. 10/10 would recommend."
    </div>
    <div className="client">DANIEL ORTIZ</div>
  </div>,
  <div className="testimonial-container">
    <div className="testimonial">
      "We’re extremely pleased with not only what their work has been like, but
      the website has just been a real benefit. They increased our exposure, and
      they cut down a lot of staff work because it’s done through the Web. I’d
      hate to have to think about changing. I’m very pleased with what they’re
      doing."
    </div>
    <div className="client">EDNA CASTILLO</div>
  </div>,
  <div className="testimonial-container">
    <div className="testimonial">
      "I have enjoyed working with Innovative MOJO for more than 3 years. They
      have a great attention to detail and they bring expertise in many
      different areas of web design and development. I hope to work with them
      for many years into the future. If you are looking for a new website or
      you need to improve your online marketing, I encourage you to give
      Innovative MOJO a call."
    </div>
    <div className="client">ALICE LIM</div>
  </div>,
  <div className="testimonial-container">
    <div className="testimonial">
      "Innovative MOJO has been huge in helping me navigate the hosting of my
      existing website and making necessary updates. Eric has been extremely
      helpful, patient and a pleasure to work with. I would highly recommend
      MOJO for any website designer needs!"
    </div>
    <div className="client">WESLEY T</div>
  </div>,
  <div className="testimonial-container">
    <div className="testimonial">
      "Incredible work from this company. The team was always on-call to help
      with any website questions we had. They also went above and beyond when we
      needed some some emergency assistance. Could not recommend a better
      company to do business with."
    </div>
    <div className="client">TOM LAVERTY</div>
  </div>,
];

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <main className="about-us">
      <Header />
      <Heading title="About Us" />
      <div className={"headline"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <div>
            <span className={"yellow"}> INNOVATIVE MOJO</span>
          </div>
          <div className="background">
            With over 15 years with web design we have the experience to get the
            job done. We listen, plan and execute to ensure your vision comes to
            life.
            <br />
            Here at Innovative MOJO we believe in relationships. That is why you
            will always speak to a real person. We believe that creativity and
            Innovative minds can create masterpieces, turn dreams into reality
            and help people, help people.
            <br />
            We always pledge to <u>listen</u> , <u>embrace your project</u> ,
            <u>vision and goals</u> and create the idea you envisioned. Contact
            us and see the difference.
          </div>
        </div>
      </div>
      <div className="message ">
        <div className="message-header">
          <i>Services</i>
        </div>
        <div className="partner-container">
          <div className="partners">
            <div
              className="service-image"
              onClick={() => navigate("/web-design-services")}
            >
              <img src={webdev} alt="" />
              <h2>Web Design</h2>
              Quality that you expect and competitors can't touch.
              <button>CLICK HERE</button>
            </div>
            <div
              className="service-image"
              onClick={() => navigate("/mobile-app-development")}
            >
              <img src={mobapdev} alt="" />
              <h2>MOBILE APP DEVELOPMENT</h2>
              Create a Beautiful App with Innovative MOJO
              <button>CLICK HERE</button>
            </div>
            <div className="service-image" onClick={() => navigate("/seo")}>
              <img src={seo} alt="" />
              <h2>SEO</h2>
              Get ranked on Google and get seen by more people who care about
              what you have.
              <button>CLICK HERE</button>
            </div>
            <div
              className="service-image"
              onClick={() => navigate("/care-plans")}
            >
              <img src={maintenacnce} alt="" />
              <h2>MAINTENANCE</h2>
              Have a website already? We will service it for you for one low
              monthly rate.
              <button>CLICK HERE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="message message-testimonial">
        <div className="message-header">
          <i>Testimonials</i>
        </div>

        <Carousel>
          {items.map((item, index) => (
            <Carousel.Item>{item}</Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="message ">
        <div className="message-header">
          <i>Our Statistics</i>
        </div>
        <div className="statistics-container">
          <div className="overlay">
            <div className="statistic">
              <img src={stat1} alt="" />
              <span className="stat">1200+</span>
              <span>projects Completed</span>
            </div>
            <div className="statistic">
              <img src={stat2} alt="" />
              <span className="stat">715+</span>
              <span>happy customers</span>
            </div>
            <div className="statistic">
              <img src={stat3} alt="" />
              <span className="stat">400+</span>
              <span>5 star reviews</span>
            </div>
            <div className="statistic">
              <img src={stat4} alt="" />
              <span className="stat">15+</span>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="message ">
        <div className="message-header">
          <i>PROUD TO WORK WITH</i>
        </div>
        <div className="partner-container">
          <div className="partners">
            <div
              className="partner-image"
              onClick={() => window.open("https://iviry.com/", "_blank")}
            >
              <img src={iviry} alt="" />
            </div>
            <div
              className="partner-image"
              onClick={() =>
                window.open("https://merakilaserstudio.com/", "_blank")
              }
            >
              <img src={meraki} alt="" />
            </div>
            <div
              className="partner-image"
              onClick={() =>
                window.open("https://www.anglicotechpacific.com/", "_blank")
              }
            >
              <img src={pacific} alt="" />
            </div>
            <div
              className="partner-image"
              onClick={() =>
                window.open("https://www.tresmonet.com/", "_blank")
              }
            >
              <img src={tresmonet} alt="" />
            </div>
          </div>
          <div className="partners">
            <div
              className="partner-image"
              onClick={() =>
                window.open("https://softcorecyber.com/", "_blank")
              }
            >
              <img src={core} alt="" />
            </div>
            <div
              className="partner-image"
              onClick={() =>
                window.open("https://foodienotachef.com/", "_blank")
              }
            >
              <img src={foodie} alt="" />
            </div>
            <div
              className="partner-image"
              onClick={() => window.open("https://oedmgroup.com/", "_blank")}
            >
              <img src={black} alt="" />
            </div>
            <div
              className="partner-image"
              onClick={() =>
                window.open(
                  "https://crossroadchristianbookstore.com/",
                  "_blank"
                )
              }
            >
              <img src={book} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Message />
      <Tagline web />
      <Footer />
    </main>
  );
}
