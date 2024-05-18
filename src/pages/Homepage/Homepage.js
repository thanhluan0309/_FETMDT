import Navbar from "../../component/Navbar/navbar";
import Footer from "../../component/Footer/footer";
import HeadTitle from "./body";
import Carousel from "./carouselProduct";

import { Box, Typography } from "@mui/material";
import BodyGuild from "./BodyGuild";
import ListUserProduct from "./ListUserProduct";
import PopupNotice from "../../component/PopupNotice/PopupNotice";
const Homepage = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="container csscontainer"
      >
        <PopupNotice></PopupNotice>
        <div className="col-12 ">
          <img
            className="bgtitle"
            src="https://img.pikbest.com/png-images/20211011/startup-managers-presenting-and-analyzing-sales-growth-chart_6143677.png!bw700"
          ></img>
        </div>
        <HeadTitle></HeadTitle>
        <Carousel></Carousel>
        <BodyGuild></BodyGuild>
        <ListUserProduct></ListUserProduct>
      </div>
    </>
  );
};

export default Homepage;
