import { useNavigate } from "react-router-dom";
const Offcanvs = () => {
  const Nav = useNavigate();
  const backtoaboutus = () => {
    window.location.href = "/#/Intro";
    window.location.reload();
  };
  const backtodowload = () => {
    window.location.href = "/#/dowload";
    window.location.reload();
  };
  const backtoproduct = () => {
    window.location.href = "/#/product";
    window.location.reload();
  };
  const backtocontact = () => {
    window.location.href = "/#/contact";
    window.location.reload();
  };
  return (
    <>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <div style={{ color: "white" }} className="logoDroplist">
            .
          </div>

          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div style={{ width: "100%" }}>
            <ul class="nav flex-column nav-pills" role="tablist">
              <li
                onClick={backtodowload}
                style={{ textAlign: "left" }}
                class="nav-item cssoffcanvasItem"
              >
                Sử dụng app
              </li>
              <li
                onClick={backtoproduct}
                style={{ textAlign: "left" }}
                class="nav-item cssoffcanvasItem"
              >
                Sản phẩm
              </li>
              <li
                onClick={backtocontact}
                style={{ textAlign: "left" }}
                class="nav-item cssoffcanvasItem"
              >
                Liên lạc
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvs;
