import Footer from "../../footer/footer";
import Navbar from "../../navbar/navbar";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";
import ContentRightF from "./contentRightFrame";
import ContentLeftF from "./contentLeftF";
// Example items, to simulate fetching from another resources.
import { useEffect } from "react";
const ImageGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="titlep">
        <span className="animate-text">
          <span>S</span>
          <span>Ả</span>
          <span>N</span>
          <span>&nbsp;</span>
          <span>P</span>
          <span>H</span>
          <span>Ẩ</span>
          <span>M</span>
        </span>
      </div>
      <div class="row flex cssResponesiveForContentL">
        {/* <ContentLeft></ContentLeft> */}
        <ContentRight></ContentRight>
      </div>
      <hr></hr>
      <div className="titlep">
        <span className="animate-text">
          <span>F</span>
          <span>R</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
        </span>
      </div>
      <div class="row cssResponesiveForContentL">
        {/* <ContentLeftF></ContentLeftF> */}
        <ContentRightF></ContentRightF>
      </div>

      <Footer></Footer>
    </>
  );
};
export default ImageGallery;
