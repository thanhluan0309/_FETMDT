import Navbar from "../_productDetails/Components/Navbar";

import HeadTitle from "./body";
import Carousel from "./carouselProduct";
import "./index.css";
import { Box, Typography } from "@mui/material";
import BodyGuild from "./BodyGuild";
import ListUserProduct from "./ListUserProduct";
import Footer from "./footer";
import Socicalcontact from "../Socialcontact.js/Socialcontact";

const Homepage2 = () => {
  return (
    <>
      <Socicalcontact></Socicalcontact>
      <div
        style={{ backgroundColor: "white" }}
        className="container csscontainer"
      >
        <Navbar></Navbar>
        <div id="popup" class="popup">
          <div class="popup-content">
            <button
              onClick={() => {
                document.getElementById("popup").style.display = "none";
              }}
              class="close-button"
            >
              &times;
            </button>
            <Box>
              <Typography variant="h3" fontWeight={600} color={"green"}>
                Droppi
              </Typography>
              <Typography mt={2} variant="h5">
                Chào mừng đến với Sàn giao dịch
              </Typography>
              <Typography>Nền thảng hổ trợ Kinh Doanh Online</Typography>
              <Typography mt={2}>
                Tải khoản của bạn đang là<bold> tài khoảng dùng thử</bold>, một
                số tính năng sẽ bị hạn chế và sẽ sớm hết hạn. Hãy nâng cấp tài
                khoản ngay để cùng kinh doanh nhé!
              </Typography>
            </Box>

            <Box
              flexWrap="wrap"
              display="flex"
              justifyContent="space-evenly"
              gap="20px"
              mt={2}
            >
              <Box width={"100%"} display={"flex"} gridRow="span 1">
                <button
                  className="btn btn-light "
                  style={{ width: "100%", margin: "auto" }}
                  onClick={() => {
                    document.getElementById("popup").style.display = "none";
                  }}
                >
                  Để sau
                </button>
              </Box>

              <Box width={"100%"} display={"flex"} gridRow="span 1">
                <button
                  className="btn btn-success "
                  style={{ width: "100%", margin: "auto" }}
                >
                  Nâng cấp ngay
                </button>
              </Box>
            </Box>
          </div>
        </div>
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
        <Box mt={15}>
          {" "}
          <Footer></Footer>
        </Box>
      </div>
    </>
  );
};

export default Homepage2;
