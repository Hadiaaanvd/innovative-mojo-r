import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import new5 from "../../assets/new-5.png";
import new3 from "../../assets/new-3.png";
import new1 from "../../assets/new-1.png";
import new4 from "../../assets/new-4.png";

import "./slider.styles.scss";

const carousel = [new5, new3, new1, new4];

const CarouselComponent = ({ images, setCurrentImage, currentImage }) => {
  const imagesArray = images ? images : carousel;
  const handleChange = (index) => {
    if (setCurrentImage) {
      setCurrentImage(index);
    }
  };
  return (
    <Carousel
      showArrows={false}
      showStatus={true}
      emulateTouch={true}
      showThumbs={false}
      centerMode={false}
      onChange={handleChange}
      selectedItem={currentImage}
      swipeable
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={500}
    >
      {imagesArray.map((item, index) => (
        <div>
          <img src={item} alt={index} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
