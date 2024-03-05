import "./mobile-features.styles.scss";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

const features = [
  {
    image: feature1,
    title: "Fast Development",
    description:
      "We will use a rich set of fully-customizable widgets to build native interfaces. This can cut time for application development by 30%.",
  },
  {
    image: feature2,
    title: "Expressive and Flexible UI",
    description:
      "Flutter’s widgets incorporate all critical platform differences such as scrolling, navigation, icons and fonts, and your Flutter code is compiled to native ARM machine code using Dart's native compilers.",
  },
  {
    image: feature3,
    title: "Native Performance",
    description:
      "Flutter’s widgets incorporate all critical platform differences such as scrolling, navigation, icons and fonts, and your Flutter code is compiled to native ARM machine code using Dart's native compilers.",
  },
];
export default function MobileFeatures() {
  return (
    <div className="mobile-features-component">
      <h2>Amazing Application Features</h2>
      <div className="divider"></div>
      <div className="all-features col-lg-11 mx-auto">
        {features.map((item) => (
          <div className="feature-container">
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p className="subtext">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
