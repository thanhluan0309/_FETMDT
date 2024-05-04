import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar } from "@mui/material";
import img1 from "../../imgchinhanh/GIGA.png";
import img2 from "../../imgchinhanh/CINESTAR.png";
import img3 from "../../imgchinhanh/D2.png";
import Slider from "react-slick";
import "./index.css"
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
const divs = Array.from({ length: 20 }, (_, i) => i + 1);

const carousel = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {divs.map((number) => (
            <div class="image-container">
              <div
                style={{ marginTop: "10px", marginLeft: "10px" }}
                className="position-absolute "
              >
                {" "}
                <Avatar></Avatar>
              </div>
              <img
                src="https://t3.ftcdn.net/jpg/05/63/66/48/360_F_563664874_ibw1AUSzTgJ4vUz3WxTehvTSC53FVLJB.jpg"
                alt="Example Image"
                style={{ objectFit: "cover" }}
              />
              <div class="footer-text"> text on the image</div>
            </div> // Lưu ý việc sử dụng `key`
          ))}
        </Slider>
      </div>
    </>
  );
};
export default carousel;
