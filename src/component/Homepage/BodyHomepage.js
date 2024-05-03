import Carousel from "../carousel/carousel";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";

import img6 from "../../img/hệ thống cửa hàng.png";
import img7 from "../../img/maponly.png";
const bodyhomepage = () => {
  return (
    <>
      <section
        className="row"
        style={{ padding: "0px", backgroundColor: "#eeeeee" }}
      >
        <img
          className="cssresponeIMG"
          style={{ width: "60%", margin: "auto" }}
          src={img1}
        ></img>
      </section>
      <section
        className="row "
        style={{ padding: "0px", backgroundColor: "#ffbe98" }}
      >
        <img
          className="cssresponeIMG"
          style={{ width: "60%", margin: "auto" }}
          src={img2}
        ></img>
      </section>
      <section className="row " style={{ padding: "0px", textAlign: "center" }}>
        <Carousel></Carousel>
      </section>
      <section
        className="row"
        style={{
          padding: "0px",

          backgroundColor: "#d01f85",
        }}
      >
        <img
          className="cssresponeIMG"
          style={{ width: "60%", margin: "auto" }}
          src={img5}
        ></img>
      </section>
      <section
        className="row "
        style={{ padding: "0px", backgroundColor: "#dbecff" }}
      >
        <img
          className="cssresponeIMG"
          style={{ width: "60%", margin: "auto" }}
          src={img3}
        ></img>
      </section>

      <section className="row" style={{ padding: "0px" }}>
        <img
          className="cssresponeIMG"
          style={{ width: "60%", margin: "auto" }}
          src={img6}
        ></img>
      </section>
      <section
        className="row"
        style={{ padding: "0px", backgroundColor: "#dbecff" }}
      >
        <img
          className="cssresponeIMG"
          style={{ width: "60%", margin: "auto" }}
          src={img7}
        ></img>
      </section>
      <section className="row" style={{ padding: "0px" }}>
        <div style={{ marginTop: "10%" }} className="Bodyleft-content">
          <div
            style={{ textAlign: "center" }}
            className="Bodyleft-content-title"
          >
            VỊ TRÍ
          </div>
          <p
            style={{ textAlign: "center", fontSize: ".8em" }}
            className="Bodyleft-content-content"
          >
            39 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
          className="cssGoogleMap"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1126483903877!2d106.71300847583848!3d10.80268355870719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a3eb5944ef%3A0x5b93fac1240a78ca!2zMzkgTmd1eeG7hW4gR2lhIFRyw60sIFBoxrDhu51uZyAyNSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1703314912517!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0, width: "90%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};
export default bodyhomepage;
