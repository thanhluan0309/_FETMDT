import img1 from "../../img/IMG_1683.JPG";
import img2 from "../../img/IMG_1702.JPG";
import img3 from "../../img/IMG_1715.JPG";

const Introbody2 = () => {
  return (
    <>
      <div class="IntroBody cssSetbackgroundIntro">
        <div>
          <div class="title">
            <h1>PHOTOBOOTH</h1>
            <p>Hồng và Trắng / Gương và không gian chập</p>
            <hr></hr>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 d-flex flex-wrap flex-column">
            <div
              style={{ width: "98%", textAlign: "left" }}
              class="IntroBody-left"
            >
              <ul className="LeftListItem">
                <li className="LeftListItem-Item">
                  <i class="fa-solid fa-chevron-right"></i> Thiết kế nội thất
                  sang trọng và hiện đại
                </li>
                <li className="LeftListItem-Item">
                  <i class="fa-solid fa-chevron-right"></i> Khu vực chụp ảnh
                  gương khác nhau
                </li>
                <li className="LeftListItem-Item">
                  <i class="fa-solid fa-chevron-right"></i> Khu vực check in đặc
                  biệt
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 d-flex flex-wrap flex-column">
            <div
              class="IntroBody-left IntroBody-leftimg"
              data-aos="flip-down"
              data-aos-duration="1000"
            >
              <img src={img1}></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 d-flex flex-wrap flex-column">
            <div
              style={{ width: "100%", height: "220px", textAlign: "center" }}
              class="IntroBody-left IntroBody-leftimg"
              data-aos="flip-down"
              data-aos-duration="1000"
            >
              <img style={{ width: "45%" }} src={img2}></img>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 d-flex flex-wrap flex-column">
            <div
              class="IntroBody-left IntroBody-leftimg"
              data-aos="flip-down"
              data-aos-duration="1000"
            >
              <img src={img3}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Introbody2;
