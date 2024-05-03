import tenct from "../../img/tenct.png";
import diachi from "../../img/diachi.png";
import thanhlap from "../../img/thanhlap.png";
import thuonghieu from "../../img/thuonghieu.png";
import ceo from "../../img/ceo.png";
import doanhnghiep from "../../img/doanhnghiep.png";

const Introbody1 = () => {
  return (
    <>
      <div class="IntroBody">
        <div>
          <div class="title">
            <h1>Về chúng tôi</h1>
            <p>
              Sử dụng hệ thống máy chụp hình thế hệ 3 do chính chúng tôi phát
              triển
            </p>
            <hr></hr>
          </div>
        </div>
        <div className="cssResponesiveIntrobody1" style={{ display: "flex" }}>
          <div
            class="IntroBody-left"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <ul>
              <li className="IntroBody-left-li">
                <img
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  src={tenct}
                  alt="Image 1"
                />
                <p>SUNGA VINA VIETNAM</p>
              </li>
              <li className="IntroBody-left-li">
                <img
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  src={thuonghieu}
                  alt="Image 2"
                />
                <p>PHOTO TIME VIETNAM</p>
              </li>
              <li className="IntroBody-left-li">
                <img
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  src={ceo}
                  alt="Image 3"
                />
                <p>SUNG KWANG SOO</p>
              </li>
            </ul>
          </div>
          <div
            class="IntroBody-left"
            data-aos="slide-right"
            data-aos-duration="2000"
          >
            <ul>
              <li className="IntroBody-left-li">
                <img
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  src={doanhnghiep}
                  alt="Image 4"
                />
                <p>PHOTO SELF STUDIO</p>
              </li>
              <li className="IntroBody-left-li">
                <img
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  src={diachi}
                  alt="Image 5"
                />
                <p>
                  39 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Ho Chi Minh
                  City, Vietnam
                </p>
              </li>
              <li className="IntroBody-left-li">
                <img
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  src={thanhlap}
                  alt="Image 6"
                />
                <p>2022.10.03</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Introbody1;
