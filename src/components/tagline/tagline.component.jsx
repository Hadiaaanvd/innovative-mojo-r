import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../atoms/button-secondary/button-secondary.component";
import "./general.styles.scss";
export default function Tagline({ web, seo }) {
  const navigate = useNavigate();
  return (
    <div className="tagline">
      <div className="tagline-text">
        We Strive To Create Your Dreams
        <span className="yellow"> Innovative MOJO Team</span>
      </div>
      <div className="tagline-starter">
        <div className="quote">
          Let's get the conversation <span className="yellow">Started</span>
        </div>
        {web ? (
          <SecondaryButton
            icon={true}
            onClick={() => navigate("/react-development-contact")}
          >
            Get Started
          </SecondaryButton>
        ) : (
          <SecondaryButton
            icon={true}
            onClick={() =>
              navigate(seo ? "/seo-contact" : "/mobile-app-development-contact")
            }
          >
            Get Started
          </SecondaryButton>
        )}
      </div>
    </div>
  );
}
