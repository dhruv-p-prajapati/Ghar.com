import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselComponent = ({ children }) => {
  return (
    <div className="w-[90vw] mx-auto">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        transitionDuration={1000}>
        {children}
      </Carousel>
    </div>
  );
};

CarouselComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default CarouselComponent;
