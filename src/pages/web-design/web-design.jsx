import Heading from "../../atoms/heading/heading.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Message from "../../components/message/message.component";
import Tagline from "../../components/tagline/tagline.component";
import SecondaryButton from "../../atoms/button-secondary/button-secondary.component";

import seo from "../../assets/seo.svg";
import star from "../../assets/star.svg";
import years from "../../assets/year.svg";
import stats from "../../assets/stats.svg";
import node from "../../assets/nodejs.png";
import html from "../../assets/html5.png";
import css from "../../assets/css3.png";
import sass from "../../assets/sass.png";
import php from "../../assets/php.png";
import gulp from "../../assets/gulp.png";
import ux from "../../assets/ux.png";
import built from "../../assets/build.svg";
import laptop from "../../assets/laptop.jpg";
import laptop1 from "../../assets/laptop1.jpg";
import laptop3 from "../../assets/laptop3.png";
import angular from "../../assets/angular.png";
import design from "../../assets/web-design.svg";
import optimized from "../../assets/optimized.svg";
import wordpress from "../../assets/wordpress.png";
import exam from "../../assets/exam.png";
import integrated from "../../assets/integrated.svg";
import experience from "../../assets/experience.svg";
import creativity from "../../assets/creativity.png";
import covert from "../../assets/build-to-convert.svg";
import maintenance from "../../assets/maintenance.svg";
import responsive from "../../assets/mobile-responsive.svg";
import computerGraphic from "../../assets/computer-graphic.png";

import "./web-design.styles.scss";
import { useNavigate } from "react-router-dom";
export default function WebDesign() {
  const navigate = useNavigate();
  return (
    <main className={"design-main"}>
      <Header />
      <div className={"title"}>
        <div className={"titleHeader"}>
          <Heading
            title="We Design & Build"
            yellow="Custom WORDPRESS Websites"
          />
          <SecondaryButton
            icon={true}
            onClick={() => navigate("/web-design-contact")}
          >
            Get Started
          </SecondaryButton>
        </div>
        <img className={"laptop"} src={laptop} alt="logo" />
      </div>
      <div className={"headline"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <div>
            Start Your <span className={"yellow"}> Business</span>
          </div>
          <div>
            Why pay to do your own work when you can have the professionals do
            it for you? No more excuses it's time to get your business booming!
            All you have to do is have the idea and we will do the rest.
          </div>
          <SecondaryButton
            icon={true}
            onClick={() => navigate("/web-design-contact")}
            type="orange"
          >
            Get A Call
          </SecondaryButton>
        </div>
      </div>
      <div className={"specifications"}>
        <div className="spec-container">
          <div className={"spec"}>
            <img className="icon" src={responsive} alt="" />
            <div className="spec-heading">Mobile Responsive</div>
            <span>
              Ensure customer accessibility across digital touchpoints with a
              mobile experience for shoppers on-the-go.
            </span>
          </div>
          <div className={"spec"}>
            <img src={laptop3} className="laptop" alt="logo" />
          </div>
          <div className={"spec"}>
            <img className="icon" src={covert} alt="" />
            <div className="spec-heading">Built To Convert</div>
            <span>
              Ensure customer accessibility across digital touchpoints with a
              mobile experience for shoppers on-the-go.
            </span>
          </div>
        </div>
        <div className="spec-container">
          <div className={"spec"}>
            <img className="icon" src={optimized} alt="" />
            <div className="spec-heading">Optimized For Speed</div>
            <span>
              Our websites are designed to load fast and we test them when
              completed. This helps with SEO and conversion rates.
            </span>
          </div>
          <div className={"spec "}>
            <img className="icon" src={integrated} alt="" />
            <div className="spec-heading">Integrated</div>
            <span>
              Pull in product and inventory data from third parties. Connect to
              CRMs (Customer relationship management) & ERPs (Enterprise
              resource planning), mailing lists, and digital marketing tools.
            </span>
          </div>
          <div className={"spec"}>
            <img className="icon" src={experience} alt="" />
            <div className="spec-heading">Great User Experience</div>
            <span>
              Modern websites should be easy for customers to use. We make sure
              the UX and UI aren't an obstacle for customers.
            </span>
          </div>
        </div>
      </div>
      <div className="headline second">
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <div>
            We can build
            <span className={"yellow"}> All Types of Websites</span>
          </div>
          <div>
            We've been in business for 15+ years and in that time we've built
            all types of websites. Here are 4 common types that we are asked to
            build most often.
          </div>
        </div>
      </div>
      <div className={"pointers"}>
        <div className={"services"}>
          <div className="service">
            <img className="icon" src={design} alt="" />
            <div className="service-content">
              <div className="spec-heading">Web Design</div>
              <span>Quality that you expect and competitors can't touch.</span>
              <div className={"buttonContainer"}>
                <SecondaryButton
                  icon={true}
                  onClick={() => navigate("/web-design-contact")}
                  type="small"
                >
                  Get Started
                </SecondaryButton>
              </div>
            </div>
          </div>
          <div className="service">
            <img className="icon" src={seo} alt="" />
            <div className="service-content">
              <div className="spec-heading">SEO</div>
              <span>
                Get ranked on Google and get seen by more people who care about
                what you have.
              </span>
              <div className={"buttonContainer"}>
                <SecondaryButton
                  icon={true}
                  onClick={() => navigate("/web-design-contact")}
                  type="small"
                >
                  Get Started
                </SecondaryButton>
              </div>
            </div>
          </div>
          <div className="service">
            <img className="icon" src={maintenance} alt="" />
            <div className="service-content">
              <div className="spec-heading">Maintenance</div>
              <span>
                Have a website already? We will service it for you for one low
                monthly rate.
              </span>
              <div className={"buttonContainer"}>
                <SecondaryButton
                  icon={true}
                  onClick={() => navigate("/web-design-contact")}
                  type="small"
                >
                  Get Started
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>

        <img src={laptop1} className="pointer-image" alt="logo" />
      </div>
      <div className={"headline"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <div>
            Our <span className={"yellow"}> Process</span>
          </div>
          <div>
            With over 15 years of experience, we've developed a method of
            building websites that yields success. We do customize the process
            for unique situations and projects but this is the general flow.
          </div>
          <SecondaryButton
            icon={true}
            onClick={() => navigate("/web-design-contact")}
            type="orange"
          >
            Get A Call
          </SecondaryButton>
        </div>
      </div>
      <div className={"process"}>
        <div className="spec-container">
          <div className={"spec"}>
            <img className="icon" src={creativity} alt="" />
            <div className="spec-heading">Talk To Us</div>
            <span>
              We get to know your business. You will answer a quick
              questionnaire that provides us with the information required to
              make your site come true.
            </span>
          </div>
          <div className={"spec"}>
            <img className="icon" src={ux} alt="" />
            <div className="spec-heading">Research & Design</div>
            <span>
              It is very important to think through a website and tailor its
              structure, flow, and content toward your goal for the website and
              your customer's goal in visiting. Our team will find the best
              style that fits your needs
            </span>
          </div>
        </div>
        <div className="spec-container">
          <div className={"spec"}>
            <img className="icon" src={stats} alt="" />
            <div className="spec-heading">The Result</div>
            <span>
              We offer ongoing maintenance services as well as a high-level
              consultative retainer support service. Ask about our ongoing
              consulting review services, where we'll make suggestions on how to
              improve your website.
            </span>
          </div>
        </div>
        <div className="spec-container">
          <div className={"spec "}>
            <img className="icon" src={computerGraphic} alt="" />
            <div className="spec-heading">Integrated</div>
            <span>
              Pull in product and inventory data from third parties. Connect to
              CRMs (Customer relationship management) & ERPs (Enterprise
              resource planning), mailing lists, and digital marketing tools.
            </span>
          </div>
          <div className={"spec"}>
            <img className="icon" src={exam} alt="" />
            <div className="spec-heading">Launch</div>
            <span>
              Your project will be complete for you and ready to go. You can
              focus on what's important. YOUR BUSINESS. Get started now!
            </span>
          </div>
        </div>
      </div>
      <div className={"headline last"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <div>
            Get The
            <span className={"yellow"}>
              &nbsp;Professional Web Design Services
            </span>
            &nbsp; You Need For Your Business In Los Angeles With Innovative
            Mojo
          </div>
          <p className={"nobackground"}>
            At Innovative Mojo, we are dedicated to providing professional web
            design services in Los Angeles. Our team will work closely with you
            to understand your business needs and goals and develop a custom web
            design that meets those requirements. Our web design process
            includes research and design, where we carefully consider the
            structure, flow, and content of your website to ensure a seamless
            user experience.
            <br /> <br />
            Our web design services are responsive and tailored to your specific
            needs, ensuring that your website will look great and perform
            optimally on all devices. As a web design company in Los Angeles, we
            offer ongoing maintenance and support services to keep your website
            performing at its best. Launch your project with confidence and
            focus on your business. Contact us today to get started!
          </p>
        </div>
      </div>
      <div className={"stats"}>
        <div className="stat">
          <div className="image-container">
            <img src={years} alt="" />
          </div>

          <div className="stat-heading">15+</div>
          <div>Years Experience</div>
        </div>
        <div className="stat">
          <div className="image-container">
            <img src={built} alt="" />
          </div>
          <div className="stat-heading">1200+</div>
          <div>Websites Built</div>
        </div>
        <div className="stat">
          <div className="image-container">
            <img src={star} alt="" />
          </div>
          <div className="stat-heading">5*</div>
          <div>Google Rating</div>
        </div>
      </div>
      <div className="technologies-container">
        <div className="technologies">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={sass} alt="" />
          <img src={gulp} alt="" />
          <img src={php} alt="" className="php" />
          <img src={angular} alt="" />
          <img src={wordpress} alt="" />
          <img src={node} alt="" />
        </div>

        <SecondaryButton
          icon={true}
          type="small"
          onClick={() => navigate("/web-design-contact")}
        >
          Get Started
        </SecondaryButton>
        <SecondaryButton
          icon={true}
          onClick={() => navigate("/portfolio")}
          type="orange"
        >
          View Portfolio
        </SecondaryButton>
      </div>
      <Message />
      <Tagline web />
      <Footer />
    </main>
  );
}
