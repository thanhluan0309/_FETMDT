import React from "react";
import "./styles.css";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import ImgBK from "../../../imgchinhanh/D2.png";
import { useEffect } from "react";
const Dowload = () => {
  useEffect(() => {
    window.scrollTo(0, 200);
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <div
        className="row cssresponesiveDowload"
        style={{ padding: "9%", height: "761px", backgroundColor: "#000000e0" }}
      >
        <div className="col-xs-12 col-md-6 flex">
          {" "}
          <div style={{ margin: "auto" }}>
            <a
              style={{ padding: "4%", cursor: "pointer" }}
              className="m-auto"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.phototime.membership"
                );
              }}
              tabIndex="0"
            >
              <img
                data-aos="flip-up"
                data-aos-duration="1000"
                style={{ width: "275px", height: "auto" }}
                class="bn45"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="bn45"
              />
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 flex">
          <div style={{ margin: "auto" }}>
            <a
              style={{ padding: "4%", cursor: "pointer" }}
              className="m-auto"
              onClick={() => {
                window.open(
                  "https://apps.apple.com/vn/app/photo-time/id6478430752?l=vi"
                );
              }}
              tabIndex="0"
            >
              <img
                data-aos="flip-up"
                data-aos-duration="1000"
                style={{ width: "275px", height: "auto" }}
                class="bn46"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="bn45"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Dowload;
