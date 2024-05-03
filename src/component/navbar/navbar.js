import React from "react";
import { useNavigate } from "react-router-dom";

import Offcanvs from "./offcanvas";

const Navbar = () => {
  const Nav = useNavigate();

  const handleclickbackhome = () => {
    window.location.href = "/";
  };
  const moveToposition = () => {
    window.location.href = "/#/poisition";
  };

  const moveToIntro = () => {
    window.location.href = "/#/Intro";
  };

  const moveToDowload = () => {
    window.location.href = "/#/dowload";
  };
  return (
    <>
      <div className="navbarStiky">
        <div className="row navbarTop">
          <button
            style={{ display: "none" }}
            class="dropdownList"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i style={{ fontSize: "1em" }} class="fa-solid fa-bars"></i>
          </button>

          <div
            style={{ color: "white", cursor: "pointer" }}
            onClick={handleclickbackhome}
            className="navbarTop-Logo"
          ></div>
        </div>
        <div className="row navbarBottom">
          <ul className="navbarBottom-ListItem">
            <div className="cssforNavbar-Bottom-Left">
              <li className="">
                {" "}
                <button
                  class="btn "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i style={{ fontSize: "1.3em" }} class="fa-solid fa-bars"></i>
                </button>
              </li>
            </div>

            <Offcanvs></Offcanvs>
            <div
              className="cssforNavbar-Bottom-Center"
              style={{ display: "flex" }}
            >
              <li onClick={moveToDowload} className="navbarBottom-Item cssItem">
                TẢI APP
              </li>
              <li
                onClick={moveToposition}
                className="navbarBottom-Item cssItem"
              >
                VỊ TRÍ
              </li>
              <li
                onClick={() => {
                  Nav("/product");
                }}
                className="navbarBottom-Item cssItem"
              >
                SẢN PHẨM
              </li>
            </div>
            <div className="cssforNavbar-Bottom-Right">
              <li style={{ color: "white" }} className="">
                {" "}
                .....
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
