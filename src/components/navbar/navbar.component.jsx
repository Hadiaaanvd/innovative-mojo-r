import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

import "./navbar.styles.scss";
const Navbarr = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-component">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={() => navigate("/react-development-service")}>
              React Development
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/mobile-app-development")}>
              Mobile Development
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                window.open("https://careplans.innovativemojo.com/", "_blank")
              }
            >
              Care Plans
            </Nav.Link>
            <Navbar.Brand onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Nav.Link onClick={() => navigate("/seo")}>SEO</Nav.Link>

            <Nav.Link onClick={() => navigate("/explainers")}>
              Explainers
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
            <Nav.Link
              onClick={() =>
                window.open("https://mojonews.innovativemojo.com/", "_blank")
              }
            >
              Mojo News
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/portfolio")}>
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
