import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Avatar from "@mui/material/Avatar";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const carousel = () => {
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        containerClass="carousel-container"
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        itemClass="carousel-item-padding-20-px"
        responsive={responsive}
      >
        zxy
        <h1>abc</h1>
      </Carousel>
    </>
  );
};
export default carousel;
