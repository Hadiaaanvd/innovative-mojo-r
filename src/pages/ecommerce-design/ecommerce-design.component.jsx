import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Tagline from "../../components/tagline/tagline.component";

import SecondaryButton from "../../atoms/button-secondary/button-secondary.component";
import Collapse from "../../atoms/collapse/collapse.component";
import Content from "../../atoms/content/content.component";
import laptop1 from "../../assets/laptop-mob.png";
import hands from "../../assets/hands-background.jpg";

import { useNavigate } from "react-router-dom";
import "./ecommerce-design.styles.scss";

const collapsable = [
  {
    title: "1. Professional Design",
    description:
      "Our experienced designers will work closely with you to create an eye-catching, professional website for your store. The end product will be optimized for easy navigation and user experience, resulting in more conversions.",
  },
  {
    title: "2. Increased Sales",
    description:
      "An effective eCommerce website design can help you increase sales by making it easier for customers to find what they’re looking for. The design should also feature clear calls to action that prompt customers to purchase.",
  },
  {
    title: "3. Enhanced Customer Experience",
    description:
      "Innovative MOJO’s design team ensures that your site offers an excellent customer experience. From a fast checkout process to easy navigation, your customers will be able to find what they need quickly and make purchases with ease.",
  },
  {
    title: "4. Improved Security",
    description:
      "Innovative MOJO understands the importance of keeping your customers’ data secure. That’s why they use secure technology to protect customer information and transactions, as well as other measures to keep your site safe from cybercriminals.",
  },
  {
    title: "5. SEO Optimization",
    description:
      "MOJO’s eCommerce web design services include optimization for search engine rankings. This helps ensure that your store is visible in the search engine results pages (SERPs) and has more chances of being seen by potential customers.",
  },
  {
    title: "6. Comprehensive Support",
    description:
      "Innovative MOJO’s customer service team is available to answer any questions or concerns you may have about their eCommerce web design services. This ensures that any issue you encounter is addressed promptly and that your website remains up-to-date and functioning properly.",
  },
];

const keywords = [
  {
    title: "Keywords",
    description:
      "Keywords are words and phrases that people use when searching for products or services related to your business. When selecting keywords for SEO, be sure to choose words that are relevant to the topic of your website, as well as words that have a high search volume. Page Titles: Page titles are one of the most important elements for SEO. The title of each page should include the main keyword for that page, as well as a brief description of what is contained on the page. This will help search engines understand the content of your page and how it relates to users’ searches.",
  },
  {
    title: "Meta Descriptions",
    description:
      "Meta descriptions are short summaries of what’s contained on the page. They are displayed in search engine results pages below the page titles and act as an additional way to attract users to click on your website. Make sure your meta descriptions accurately reflect the content of the page and contain the main keyword.",
  },
  {
    title: "URLs",
    description:
      "The structure of your URLs can also help search engines better understand the content of your website. Your URLs should be structured in a logical way, using words that accurately describe the page’s content and the main keyword.",
  },
];

export default function EcommerceWebDesign() {
  const navigate = useNavigate();
  return (
    <main className={"ecommerce-design"}>
      <Header />
      <div className={"heading"}>
        eCommerce <div className="yellow">Web Design Service</div>
      </div>

      <div className="explainers-container container">
        <div className="explainer">
          <div className="explainer-content">
            <div className="icon">
              <i aria-hidden="true" className="fab fa-connectdevelop"></i>
            </div>
            <div className="explainer-heading">
              MOJO's Ecommerce{" "}
              <span className="yellow"> Web Design Services </span>
              <br /> Will Take Your Online Store to the Next Level
            </div>
            <div className="explainer-description">
              Are you looking to take your online store to the next level with
              the help of Innovative MOJO eCommerce web design services? MOJO is
              here to help! With years of experience in website design and
              development, Innovative MOJO can help your business grow with
              cutting-edge eCommerce web design services that are tailored to
              meet your needs. Whether you are a small business or an
              established enterprise, MOJO can provide the perfect solution for
              your eCommerce web design needs.
            </div>
            <SecondaryButton
              type="orange small"
              onClick={() => navigate("/web-design-contact")}
              icon={true}
            >
              Get Started
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className={"headline headline-pointer"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <div className="pointers-container">
            <div className="pointers-content">
              <div className="content">
                <h3>
                  Introduction:
                  <span className={"yellow"}>&nbsp;What is MOJO </span>
                  and what can it do for your online store?
                </h3>
                <br />
                Introduction: What is MOJO and what can it do for your online
                store? Innovative MOJO is an eCommerce web design service
                provider in Los Angeles that provides custom solutions for
                businesses to create unique and highly functional websites. We
                understand the importance of having an effective website for
                businesses and offer an array of features that allow for easy
                customization and control of the store. With Innovative MOJO,
                businesses can design their website from scratch or use pre-made
                templates to help them save time and money.
                <br />
                <br />
                Innovative MOJO is a unique and comprehensive eCommerce web
                design team. We offer an array of solutions to meet the specific
                needs of online stores. With our cutting-edge services, you can
                take your online store to the next level. When you use
                Innovative MOJO’s eCommerce web design services, you can expect
                to get the following benefits.
              </div>
              <div className="border-right"></div>
              <div className="content">
                <h3>
                  The Benefits of
                  <span className={"yellow"}>&nbsp;MOJO's Ecommerce </span>
                  Web Design Services
                </h3>
                <br />
                With a combination of user-friendly navigation, advanced
                features, and intuitive design, MOJO's eCommerce web design
                services can help businesses create an engaging, attractive
                website that will maximize their online presence. From creating
                an eye-catching home page to setting up payment systems,
                Innovative MOJO's services can help business owners make the
                most out of their online stores.
                <br />
                <br />
                {collapsable.map((item, index) => (
                  <Collapse item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-specifications my-4 col-lg-9  col-md-12 mx-auto">
        <div className={"pointers"}>
          <div className={"services"}>
            <h1>
              How <span className="yellow">MOJO's Ecommerce</span> Web Design
              Services Can Help You Grow Your Business
            </h1>
            <div className="service-content">
              At Innovative MOJO, we offer innovative eCommerce web design
              services that can help you take your online store to the next
              level. Our experienced web designers understand the nuances of
              eCommerce website design and can craft a customized solution that
              will provide an exceptional user experience for customers. Here
              are just a few ways MOJO's eCommerce web design services can help
              you grow your business:
            </div>
          </div>

          <img src={laptop1} className="pointer-image" alt="logo" />
        </div>
        <div className="pointers-content  our-specification-pointer">
          <div className="content">
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="far fa-object-ungroup"></i>
                </div>
              </div>
              <div>
                <h5>1. Optimized Shopping Experience</h5>
                Our web design services will ensure your customers have an
                optimized shopping experience, with a streamlined checkout
                process and easy navigation throughout your site. A positive
                customer experience can help increase conversion rates,
                resulting in more sales for your business.
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-paper-plane"></i>
                </div>
              </div>
              <div className="mt-4">
                <h5>2. Improved SEO Rankings:</h5>
                Our web design services can also create a mobile-friendly
                website that looks great on any device. With a mobile-friendly
                design, customers will be able to easily navigate your site and
                make purchases from their phones or tablets. This improved
                mobile experience will make it easier for customers to shop with
                you, increasing sales and engagement.
              </div>
            </div>
          </div>

          <div className="content">
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-book-reader"></i>
                </div>
              </div>
              <div>
                <h5>3. Improved Mobile Experience:</h5>
                Our web design services can also improve your SEO rankings,
                helping you reach more potential customers. By creating
                high-quality, keyword-rich content and utilizing other SEO best
                practices, we can increase your visibility in search engine
                results pages, allowing you to reach a larger audience.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Content
        background
        description="You can rest assured that your online store is in good hands. Their experienced team of designers and developers will ensure that your website looks great and performs optimally, helping you maximize sales and boost customer satisfaction."
      >
        By using <span className="yellow">Innovative MOJO’s eCommerce</span> web
        design services
      </Content>

      <div className={"headline last"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <h1>
            Our
            <span className={"yellow"}>&nbsp;Goal </span>
          </h1>
          <div className="noBackground">
            At Innovative MOJO, our goal is to help you maximize your eCommerce
            web design potential. We offer a comprehensive suite of web design
            services that will help you create an exceptional website that
            resonates with customers and helps you drive more sales. Contact us
            today to learn more about our eCommerce web design services and how
            they can help you grow your business!
          </div>
        </div>
      </div>

      <div className="pointers-container features">
        <div className="pointers-content  container">
          <div className="content">
            <div className="icon">
              <i aria-hidden="true" className="far fa-handshake"></i>
            </div>
            <h5>Conclusion</h5>
            Why You Should Use MOJO for Your Ecommerce Web Design Needs If
            you're looking for an innovative and reliable eCommerce web design
            solution, Innovative MOJO is the right choice. We have an
            experienced team of experts who are well-versed in creating custom
            websites that deliver results. Our comprehensive suite of services
            includes everything from website design and development to SEO
            optimization and marketing.
            <div className="icon">
              <i aria-hidden="true" className="fas fa-chart-line"></i>
            </div>
            <h5>SEO</h5>
            Search Engine Optimization (SEO) is an important factor to consider
            when developing a website with MOJO WordPress. SEO refers to the
            process of optimizing web content and website architecture to
            increase visibility in search engine results pages. By optimizing
            your website, you can make sure that potential customers can easily
            find your business online. When it comes to SEO, there are several
            factors to consider, including keywords, page titles, meta
            descriptions, and URLs.
            <br /> <br />
            {keywords.map((item) => (
              <Collapse item={item} />
            ))}
          </div>
          <div className="image-container">
            <img src={hands} alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-chalkboard-teacher"></i>
            </div>
            <h5>With Innovative MOJO,</h5>
            you can trust that your online store will be set up properly and
            running smoothly. You'll also benefit from the latest technologies
            such as responsive design, which ensures that your site looks great
            on any device. Additionally, their web design team will work with
            you to develop a unique look for your store that accurately reflects
            your brand and makes it stand out from the competition.
            <div className="icon">
              <i aria-hidden="true" className="fas fa-universal-access"></i>
            </div>
            <h5>Innovative MOJO's ECommerce</h5>
            Overall, Innovative MOJO's eCommerce web design services are an
            ideal choice for anyone who wants to make sure their online store is
            successful. With our expertise, you can rest assured that you have a
            secure, user-friendly platform that will help drive conversions and
            increase your sales.
          </div>
        </div>
      </div>

      <Content
        background
        description="By following these steps, you can ensure that your website is properly optimized for search engines and improve your chances of appearing at the top of search engine results pages. Utilizing MOJO WordPress Web Design services can also help you create an optimized website that helps you stand out from the crowd."
      ></Content>

      <Tagline web />
      <Footer />
    </main>
  );
}
