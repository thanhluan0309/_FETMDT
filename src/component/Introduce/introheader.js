const Introheader = () => {
  //Make the DIV element draggagle:

  return (
    <>
      <div
        style={{ justifyContent: "space-evenly" }}
        class="row cssforheaderIntro"
      >
        <div class="col-xs-12 col-sm-6 d-flex flex-wrap flex-column IntroHeader-left">
          <div className="IntroHeader-left-header">PHOTO TIME</div>
          <div className="IntroHeader-left-body">
            không đơn giản chỉ là ghi lại dấu ấn qua những bức ảnh mà còn là nơi
            mang lại niềm vui cho mọi người. Với hệ thống hiện đại cùng những
            phụ kiện độc đáo, chúng tôi sẽ tạo ra một xu hướng chụp ảnh mới đầy
            thú vị.
          </div>
        </div>

        <div
          id="mydiv"
          style={{ width: "24%" }}
          draggable={"true"}
          class="col-xs-12 col-sm-6 d-flex flex-wrap flex-column IntroHeader-Right"
        ></div>
      </div>
    </>
  );
};
export default Introheader;
