import Header from "../../components/header/header.component";
import Tagline from "../../components/tagline/tagline.component";
import Footer from "../../components/footer/footer.component";

import "./explainers.styles.scss";
import Heading from "../../atoms/heading/heading.component";

export default function Explainers() {
  return (
    <main className={"explainer-main"}>
      <Header />
      <Heading title="Explainers" subTitle="“FIND YOUR INNOVATIVE MOJO.”" />

      <div className={"newsContainer"}></div>
      <div className={"iframeContainer row"}>
        <iframe
          className="col-lg-5 col-sm-12"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Innovative MOJO Web Design Explainer"
          src="https://www.youtube.com/embed/pRSpB0lDif8?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnovativemojo.com&amp;widgetid=1"
          id="widget2"
        ></iframe>
        <iframe
          className="col-lg-5 col-sm-12"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Innovative MOJO SEO Explainer"
          src="https://www.youtube.com/embed/aXsawFnj1LI?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnovativemojo.com&amp;widgetid=5"
          id="widget6"
        ></iframe>
        <iframe
          className="col-lg-5 col-sm-12"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Innovative MOJO Online Marketing 101"
          src="https://www.youtube.com/embed/rmhxY8OwdU0?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnovativemojo.com&amp;widgetid=3"
          id="widget4"
        ></iframe>
        <iframe
          className="col-lg-5 col-sm-12"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Innovative MOJO E Commerce Web Design Explainer"
          src="https://www.youtube.com/embed/aQZ76FURvI4?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Finnovativemojo.com&amp;widgetid=7"
          id="widget8"
        ></iframe>
      </div>

      <Tagline web />
      <Footer />
    </main>
  );
}
