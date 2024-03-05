import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Tagline from "../../components/tagline/tagline.component";

import SecondaryButton from "../../atoms/button-secondary/button-secondary.component";
import Collapse from "../../atoms/collapse/collapse.component";
import Content from "../../atoms/content/content.component";
import lab from "../../assets/lab.jpg";
import opposite from "../../assets/phone-opposite.jpg";

import { useNavigate } from "react-router-dom";
import "./wordpress-development.styles.scss";
export default function WordpressDevelopment() {
  const navigate = useNavigate();
  return (
    <main className={"wordpress-development"}>
      <Header />
      <div className={"heading"}>
        WordPress <div className="yellow">Web Development Service</div>
      </div>

      <div className="explainers-container container">
        <div className="explainer">
          <div className="explainer-content">
            <div className="icon">
              <i aria-hidden="true" className="fab fa-connectdevelop"></i>
            </div>
            <div className="explainer-heading">
              Get Ahead of the <span className="yellow"> Competition </span>
              with <br /> WordPress Web Development
            </div>
            <div className="explainer-description">
              Are you looking for a way to get ahead of the competition?
              Innovative MOJO’s WordPress Web Development is a great way to give
              your business an edge. With WordPress, you can create stunning and
              highly functional websites that will help you stand out from the
              crowd and reach more customers. We'll look at how WordPress can
              benefit any business, no matter its size or industry. From
              designing attractive and engaging websites to adding powerful
              features, WordPress makes it easy to keep up with the latest
              trends in web design and technology. Read on to learn more about
              how Innovative MOJO utilizes WordPress and how it can help you get
              ahead of the competition!
            </div>
            <SecondaryButton
              onClick={() => navigate("/web-design-contact")}
              type="orange small"
              icon={true}
            >
              Get Started
            </SecondaryButton>
          </div>
        </div>
        <div className="explainer">
          <div className="explainer-content">
            <div className="icon">
              <i aria-hidden="true" className="fab fa-connectdevelop"></i>
            </div>
            <div className="explainer-heading">
              Wordpress is <span className="yellow"> SEO</span> Friendly
            </div>
            <div className="explainer-description">
              For businesses looking to improve their online visibility,
              WordPress is an excellent choice for web development. It is an
              SEO-friendly platform that enables users to easily optimize their
              sites and content. This can lead to increased website traffic,
              higher rankings in search engine results pages (SERPs), and more
              conversions.
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
          <h1>
            Wordpress
            <span className={"yellow"}>&nbsp; offers several features </span>
            <div>
              make it great for <span className="yellow">SEO.</span> These
              include:
            </div>
          </h1>
          <div className="pointers-container">
            <div className="pointers-content">
              <div className="content">
                WordPress makes it easy to create content and manage it from a
                single dashboard. This makes it easy to optimize content for
                SEO, as well as to create high-quality, SEO-optimized content
                quickly and efficiently.
              </div>
              <div className="border-right"></div>
              <div className="content">
                WordPress includes several tools that make it easy to optimize
                website content. These include the ability to customize the meta
                tags, title tags, and descriptions for each page on the site. In
                addition, the platform also has built-in plugins that allow
                users to easily track and analyze keyword performance.
              </div>
            </div>

            <div className="pointers-content">
              <div className="content">
                Internal linking is an important part of SEO and WordPress makes
                it easy to add links between pages on the same website. This
                helps search engine spiders crawl and index the content more
                quickly and accurately, leading to better rankings in SERPs.
              </div>
              <div className="border-right"></div>
              <div className="content">
                WordPress allows users to set up custom URLs for each post and
                page on the website, making it easier for users and search
                engines to find content. This also helps keep users engaged on
                the site, as they can easily navigate through different pages
                without having to search or guess URLs.
                <Collapse
                  item={{
                    title: "Advantage",
                    description:
                      "By taking advantage of these features, businesses can ensure their websites are fully optimized for SEO, resulting in better SERP rankings, increased website traffic, and higher conversion rates.",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointers-container target">
        <div className="pointers-content">
          <div className="content">
            In today’s digital world, having a mobile-friendly website is an
            absolute must. People are using their phones more than ever before
            to access the internet, which means that businesses need to be
            prepared. Fortunately, WordPress makes it incredibly easy to create
            a website that works well on both mobile devices and desktops.
            <hr />
            WordPress offers a variety of mobile-friendly themes and plugins, so
            you can customize your website however you choose. You can make sure
            your site looks great on any device by tweaking the size of fonts,
            images, and other elements. In addition, you can also use plugins to
            add mobile-friendly features like tap-to-call phone numbers and
            location mapping.
          </div>
          <div className="image-container">
            <br />
            <h1>
              <div>Wordpress</div>
              <span className={"yellow"}>&nbsp; Is Mobile </span>
              Friendly
            </h1>
            <img src={opposite} alt="" />
          </div>
          <div className="content">
            WordPress websites are designed to adjust to whatever device they
            are being viewed on. This ensures that whether someone is looking at
            your website on their laptop or their mobile phone, they will get
            the same experience. This also helps you optimize for SEO as many
            search engines now factor in mobile-friendliness when ranking web
            pages.
            <hr />
            Overall, WordPress makes it easy to create a mobile-friendly website
            that is optimized for all devices. This can help you reach more
            customers and give them the best possible experience when they visit
            your website.
          </div>
        </div>
      </div>

      <div className={"headline"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <h1>
            Wordpress Is
            <span className={"yellow"}>&nbsp; Highly Customizable </span>
          </h1>
          <div className="noBackground">
            WordPress is a great platform for businesses of all sizes. It is
            highly customizable and can be tailored to the specific needs of
            each business. With its simple yet powerful content management
            system, businesses can easily create, edit and manage their website.
            WordPress offers hundreds of themes, allowing businesses to
            customize their website’s look and feel to match their brand
            identity. Moreover, businesses can install plugins that add
            additional functionality to their website, such as contact forms,
            membership areas, social media integration, and more. elements.
            <br /> <br />
            WordPress also provides businesses access to its extensive library
            of themes and plugins. This makes it easy for businesses to find the
            perfect theme and plugin combination that best fits their website’s
            purpose and goals. We understand the importance of having a
            user-friendly and visually appealing website, and that's why we use
            WordPress to deliver high-quality and customized web solutions. Our
            WordPress web development services include theme customization,
            plugin development, and website migration.
            <br /> <br />
            Our team of experts will help you create a custom WordPress website
            that meets your business needs and goals. Our team will work closely
            with you to understand your business goals and target audience and
            develop a website that reflects your brand and provides an excellent
            user experience. Choose Innovative Mojo for all your WordPress web
            development needs in Los Angeles. Our team of experts will help you
            create a powerful and effective website that meets your business
            goals and drives results.
          </div>
        </div>
      </div>

      <div className="pointers-container features">
        <div className="pointers-content  container">
          <div className="content">
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-user-secret"></i>
                </div>
              </div>
              <div>
                <h4>WordPress Is Secure</h4>
                Security is a top priority for any business website, and
                WordPress is no exception. WordPress is a secure platform that
                uses advanced security features to protect your website and its
                data.
              </div>
            </div>
            <br /> <br />
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-laptop"></i>
                </div>
              </div>
              <div>
                <h4>These Features Include:</h4>
                User authentication: With WordPress, you can easily create
                secure logins for each user on your website. This helps to
                ensure that only the correct people have access to certain parts
                of the website.
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={lab} alt="" />
          </div>
          <div className="content">
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-database"></i>
                </div>
              </div>
              <div>
                <h4>Encryption</h4>
                WordPress encrypts all information stored in its database,
                including sensitive customer data like credit card numbers. This
                helps protect your customers’ data from malicious attacks and
                hackers.
              </div>
            </div>
            <br /> <br />
            <div className="d-flex align-items-center">
              <div className="icon-container">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-server"></i>
                </div>
              </div>
              <div>
                <h4>Secure Hosting</h4>
                WordPress websites are hosted on servers that are monitored and
                managed for maximum security. All WordPress updates are tested
                for vulnerabilities and patched quickly if needed.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"headline last"}>
        <div className={"overlay"}></div>
        <div className={"headlineContent"}>
          <h1>
            Automatic
            <span className={"yellow"}>&nbsp; Backup </span>
          </h1>
          <div className="noBackground">
            WordPress automatically backs up your website data on a regular
            basis. This helps protect you from data loss due to technical issues
            or other disasters. WordPress provides the security your business
            needs to keep your website and customers safe. With its robust
            security features, WordPress can help ensure that your website is
            secure and protected against malicious attacks and hackers.
          </div>
        </div>
      </div>
      <Content
        button
        description="With 20 years of experience we have the knowledge and team to build your dream website.This is what we do! Contact us now to see if a WordPress website is right for you."
      >
        Why Innovative <span className="yellow">MOJO?</span>
      </Content>
      <Tagline />
      <Footer />
    </main>
  );
}
