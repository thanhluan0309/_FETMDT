import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import CarouselProduct from "../carousel/carouselProduct";
import Introheader from "./introheader";
import Introbody1 from "./introbody1";
import Introbody2 from "./introbody2";
import ExpandBox from "./Expandbox";
import { useEffect } from "react";
const Intro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Introheader></Introheader>
      <Introbody1></Introbody1>
      <Introbody2></Introbody2>

      <div class="IntroBody">
        <div>
          <div class="title">
            <h1>Về hệ thống</h1>
            <p>Được chia làm các loại phục vụ nhiều loại ảnh khác nhau</p>
            <hr></hr>
          </div>
        </div>
        <div className="row" style={{ display: "flex" }}>
          <div
            class="content-wrapper cssresponesivehethong"
            style={{ width: "60%", textAlign: "6%", minHeight: "181px" }}
          >
            <div class="title-wrapper">BANBE ROOM</div>

            <p
              className="wrapper-content"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Khách hàng có thể sử dụng nhiều background từ Lotte World của Hàn
              Quốc, Cung điện, phố Iksun-dong,.... Và được trải nghiệm trang
              phục như Hanbok, đồng phục nữ sinh Hàn Quốc mà các IDOL đã mặc và
              tùy chỉnh địa điểm để tạo cảm giác như được chụp ảnh tại Hàn Quốc.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>

        <div
          className="row cssresponesivehethongNone"
          style={{ display: "flex", width: "100%", marginLeft: "40%" }}
        >
          <div
            class="content-wrapper cssresponesivehethong"
            style={{ width: "60%", textAlign: "6%", minHeight: "280px" }}
          >
            <div class="title-wrapper">XR STUDIO</div>

            <p
              className="wrapper-content"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Công nghệ không gian do PHOTO TIME sáng tạo Buồng kích hoạt chuyển
              động cho phép hiện thực hóa thực tế trong sáng tạo, kết hợp từ các
              chuyên gia của PHOTO TIME và công nghệ AI.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="row" style={{ display: "flex" }}>
          <div
            class="content-wrapper cssresponesivehethong"
            style={{ width: "60%", textAlign: "6%", minHeight: "280px" }}
          >
            <div class="title-wrapper">VIP ROOM</div>

            <p
              className="wrapper-content"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Đây là phòng đặc trưng của PHOTO TIME nơi mà bạn có thể chọn các
              background khác nhau theo phong cách Hàn Quốc và chụp ảnh với các
              frame được cập nhật hàng tháng của nhiều ấn phẩm độc quyền khác
              nhau.
              <br></br>
              <br></br>
              Hệ thống sẽ được thiết lập các background có sẵn để bạn có thể
              trải nghiệm chụp ảnh ở những địa điểm và điểm du lịch nổi tiếng
              của Hàn Quốc, do PHOTO TIME thực hiện bằng máy chiếu độ phân giải
              cao. Đây là dịch vụ lần đầu tiên có ở một studio tự chụp ảnh phong
              cách Hàn Quốc.
            </p>
          </div>
        </div>
      </div>

      <div class="IntroBody">
        <div>
          <div class="title">
            <h1>Tầm nhìn doanh nghiệp</h1>
            <p>
              Các chi nhánh được phát triễn trên các tĩnh thành phố Việt Nam
            </p>
            <hr></hr>
          </div>
        </div>
        <div className="row IntroBodyMap">
          <div className="col-xs-12 col-sm-6 d-flex flex-wrap flex-column">
            <div class="expand-container">
              <div style={{ display: "flex" }}>
                <ExpandBox
                  initialContent="01"
                  hoverContent="Khuấy động thị trường Đạt mức tối ưu hóa lợi nhuận tập trung quanh 8 thành phố trung tâm và nhắm mục tiêu tạo thêm doanh thu từ hoạt động kinh doanh của nhà phân phối ở các khu vực khác."
                />

                <div class="expand-box-Tamgiac"></div>
              </div>
            </div>
            <div class="expand-container">
              <div style={{ display: "flex" }}>
                <ExpandBox
                  initialContent="02"
                  hoverContent="Thâm nhập thị trường Mở rộng 7 cửa hàng trực tiếp và 2 cửa hàng nhượng quyền từ tháng 12 năm 2022 đến nửa đầu năm 2023"
                />

                <div class="expand-box-Tamgiac"></div>
              </div>
            </div>
            <div class="expand-container">
              <div style={{ display: "flex" }}>
                <ExpandBox
                  initialContent="03"
                  hoverContent="Tạo lập thị trường Lấy Hà Nội và Hồ Chí Minh làm trung tâm, mở rộng 50 cửa hàng tại 8 thành phố được chỉ định trên bản đồ trong vòng một năm từ nửa cuối năm 2023 đến nửa đầu năm 2023"
                />

                <div class="expand-box-Tamgiac"></div>
              </div>
            </div>
            <div class="expand-container"></div>

            <div style={{ display: "flex" }}>
              <ExpandBox
                initialContent="04"
                hoverContent="Kích hoạt thị trường Lấy Hà Nội làm trung tâm, mở rộng lên 350 cửa hàng ở miền Bắc, lấy Hồ Chí Minh làm trung tâm, mở rộng lên 400 cửa hàng ở miền Nam; cuối cùng, mở rộng lên 250 cửa hàng ở miền Trung từ 2025 đến 2027"
              />

              <div class="expand-box-Tamgiac"></div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 d-flex flex-wrap flex-column backgroundMap"></div>
        </div>
      </div>
      <div className="IntroBody">
        <div>
          <div class="title">
            <h1>TIN TỨC</h1>

            <hr></hr>
          </div>
        </div>
        <div style={{ marginBottom: "12%" }}>
          <CarouselProduct></CarouselProduct>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Intro;
