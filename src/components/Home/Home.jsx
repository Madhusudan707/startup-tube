import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Home = () => {
  return (
    <div className="mt-72">
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
      >
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/3xU050kMbHM/maxresdefault.jpg"  />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/7HDO1p3VdYg/maxresdefault.jpg" />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/8pNxKX1SUGE/maxresdefault.jpg" />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/Dk6JNTDec9I/maxresdefault.jpg" />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/3xU050kMbHM/maxresdefault.jpg" />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/7HDO1p3VdYg/maxresdefault.jpg" />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/8pNxKX1SUGE/maxresdefault.jpg" />
        </div>
        <div className="shadow-lg">
          <img src="https://img.youtube.com/vi/Dk6JNTDec9I/maxresdefault.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
