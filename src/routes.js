import React from "react";
const SEO = React.lazy(() => import("./pages/seo/seo"));
const Form = React.lazy(() => import("./pages/form/form"));
const Reports = React.lazy(() => import("./pages/reports/reports"));
const AboutUs = React.lazy(() => import("./pages/aboutus/aboutus"));
const News = React.lazy(() => import("./pages/mojo-news/mojo-news"));
const CarePlans = React.lazy(() => import("./pages/careplans/careplans"));
const Portfolio = React.lazy(() => import("./pages/portfolio/portfolio"));
const WebDevelopment = React.lazy(() => import("./pages/web-dev/web-dev"));
const Started = React.lazy(() => import("./pages/get-started/get-started"));
const Explainer = React.lazy(() => import("./pages/explainers/explainers"));
const WebDesign = React.lazy(() => import("./pages/web-design/web-design"));
const Navigation = React.lazy(() => import("./pages/navigation/navigation"));
const DesignForm = React.lazy(() => import("./pages/design-form/design-form"));
const SeoForm = React.lazy(() => import("./pages/seo-form/seo-form"));
const EcommerceWebDesign = React.lazy(() =>
  import("./pages/ecommerce-design/ecommerce-design.component")
);
const MobileDevelopment = React.lazy(() =>
  import("./pages/mobile-dev/mobile-dev.component")
);
const WordpressDesign = React.lazy(() =>
  import("./pages/wordpress-design/wordpress-design.component")
);
const WordpressDevelopment = React.lazy(() =>
  import("./pages/wordpress-development/wordpress-development.component")
);
const Work = React.lazy(() => import("./pages/work/work"));

export const finalRoutes = [
  {
    path: "/",
    name: "navigation",
    exact: true,
    component: <Navigation />,
  },
  {
    path: "/mojo-news",
    name: "navigation",
    exact: true,
    component: <News />,
  },
  {
    path: "/get-started",
    name: "navigation",
    exact: true,
    component: <Started />,
  },
  {
    path: "/explainers",
    name: "navigation",
    exact: true,
    component: <Explainer />,
  },
  {
    path: "/ecommerce-web-design-service",
    name: "navigation",
    exact: true,
    component: <EcommerceWebDesign />,
  },
  {
    path: "/web-design-services",
    name: "navigation",
    exact: true,
    component: <WebDesign />,
  },
  {
    path: "/mobile-app-development",
    name: "navigation",
    exact: true,
    component: <MobileDevelopment />,
  },
  {
    path: "/react-development-service",
    name: "navigation",
    exact: true,
    component: <WebDevelopment />,
  },
  {
    path: "/wordpress-web-design-service",
    name: "wordpress",
    exact: true,
    component: <WordpressDesign />,
  },
  {
    path: "/wordpress-web-development-service",
    name: "wordpress",
    exact: true,
    component: <WordpressDevelopment />,
  },
  {
    path: "/reports",
    name: "reports",
    exact: true,
    component: <Reports />,
  },
  {
    path: "/seo",
    name: "seo",
    exact: true,
    component: <SEO />,
  },
  {
    path: "/about",
    name: "seo",
    exact: true,
    component: <AboutUs />,
  },
  {
    path: "/portfolio",
    name: "seo",
    exact: true,
    component: <Portfolio />,
  },
  {
    path: "/portfolio/:title/:id",
    name: "seo",
    exact: true,
    component: <Work />,
  },
  {
    path: "/care-plans",
    name: "seo",
    exact: true,
    component: <CarePlans />,
  },
  {
    path: "/react-development-contact",
    name: "web-design-contact",
    exact: true,
    component: <DesignForm />,
  },
  {
    path: "/seo-contact",
    name: "seo-contact",
    exact: true,
    component: <SeoForm />,
  },
  {
    path: "/mobile-app-development-contact",
    name: "mobile-app-development-contact",
    exact: true,
    component: <Form />,
  },
];
