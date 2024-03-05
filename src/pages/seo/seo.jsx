import Header from "../../components/header/header.component";
import Tagline from "../../components/tagline/tagline.component";
import Footer from "../../components/footer/footer.component";
import Heading from "../../atoms/heading/heading.component";
import stats from "../../assets/stats.svg";

import "./seo.styles.scss";
import SecondaryButton from "../../atoms/button-secondary/button-secondary.component";
import { useNavigate } from "react-router-dom";

export default function SEO() {
  const navigate = useNavigate();
  return (
    <main className="seo-main">
      <Header />
      <Heading title="SEO" />
      <div className={"newsContainer"}></div>
      <div className={"iframeContainer container"}>
        <iframe
          class="elementor-video"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Innovative MOJO SEO Explainer"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/aXsawFnj1LI?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnovativemojo.com&amp;widgetid=1"
          id="widget2"
        ></iframe>

        <SecondaryButton
          onClick={() => navigate("/seo-contact")}
          type="orange"
          icon={false}
        >
          CONTACT US NOW
        </SecondaryButton>

        <div className="seo-description">
          <div className="description-content">
            Boost your online visibility with professional SEO services from
            Innovative Mojo, the leading SEO agency in Los Angeles. Our team of
            experts will help you improve your website’s search engine rankings,
            drive more traffic to your site, and ultimately increase your online
            presence.
            <br />
            <br /> We understand the importance of having a strong online
            presence in today’s digital world, and that’s why we offer
            customized SEO solutions to meet the specific needs of your
            business. Our professional SEO services include on-page
            optimization, technical SEO, local SEO, and link building. Our team
            will work closely with you to understand your business’s objectives
            and target audience and develop a customized SEO strategy to help
            you reach those goals. <br /> <br />
            Innovative Mojo is a local SEO agency in Los Angeles that provides
            top-notch SEO services to help you achieve your business goals. Our
            team of experts will help you improve your search engine rankings,
            drive more traffic to your site, and ultimately increase your online
            visibility. Contact us today to learn more about our professional
            SEO services.
          </div>
          <div className="description-image">
            <img src={stats} alt="" />
          </div>
        </div>
      </div>

      <Tagline seo />
      <Footer />
    </main>
  );
}
