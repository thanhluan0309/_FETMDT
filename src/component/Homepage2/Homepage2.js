import Navbar from "../_navbar/navbar";
import HeadTitle from "./body";
import Carousel from "./carouselProduct";
import "./index.css";
import { Box } from "@mui/material";
import BodyGuild from "./BodyGuild";
import ListUserProduct from "./ListUserProduct";
import Footer from "./footer";
const Homepage2 = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="col-12 bgtitle">abc</div>
      <div className="container">
        {" "}
        <HeadTitle></HeadTitle>
        <Carousel></Carousel>
        <BodyGuild></BodyGuild>
        <ListUserProduct></ListUserProduct>
      </div>
      <Box mt={15}>
        {" "}
        <Footer></Footer>
      </Box>
    </>
  );
};

export default Homepage2;
