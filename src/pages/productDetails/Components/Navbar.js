import React, { useState, useEffect } from "react";
import menu from "../Pictures/icon-menu.svg";

import { Badge, IconButton } from "@mui/material";
import Cart from "./Cart";
import MobileLinksDrawer from "./MobileLinksDrawer";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onOrderedQuant, onReset }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0 || window.pageYOffset <= 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let nav = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };

  return (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
      <nav style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <section className="left">
          {/* <div className="imgs"> */}
          {/* <img
              // className="hide-in-desktop"
              src={menu}
              alt="icon-menu"
              onClick={() => {
                handleOpen(true);
              }}
            />
            <MobileLinksDrawer onHandleOpen={handleOpen} onOpen={open} />

            <img
              src={
                "https://res.cloudinary.com/dhscgjuis/image/upload/v1717129388/Music/lofqe7nyt4vzsbugdfi3.jpg"
              }
              alt="logo"
              width={"100"}
              onClick={() => {
                nav("/product");
              }}
            />
          </div>
          {/* <div className="links hide-in-mobile">
            <ul>
              <li>
                <button
                  onClick={() => {
                    nav("/product");
                  }}
                >
                  Sản phẩm
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    nav("/customer");
                  }}
                >
                  Khách hàng
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    nav("/cart");
                  }}
                >
                  Giỏ hàng
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    nav("/order");
                  }}
                >
                  Đơn hàng
                </button>
              </li>
            </ul>
          </div> */}
        </section>
        <div className="right">
          <IconButton
            disableRipple
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <Badge
              invisible={onOrderedQuant === 0}
              badgeContent={onOrderedQuant}
              variant="standard"
              sx={{
                color: "#fff",
                fontFamily: "Kumbh sans",
                fontWeight: 700,
                "& .css-fvc8ir-MuiBadge-badge ": {
                  fontFamily: "kumbh sans",
                  fontWeight: 700,
                },
              }}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
            </Badge>
          </IconButton>

          <div class="btn-group">
            <img
              src={
                "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LnBuZw.png"
              }
              alt="img-avatar"
              className="avatar"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div
              class="dropdown-menu dropdown-menu-start"
              aria-labelledby="triggerId"
            >
              <a class="dropdown-item" href="#">
                Nâng cấp tài khoản
              </a>
              <a class="dropdown-item disabled" href="#">
                Tài khoản seller A
              </a>

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Đăng xuất
              </a>
            </div>
          </div>
          {showCart && (
            <Cart
              onOrderedQuant={onOrderedQuant}
              onReset={onReset}
              onShow={setShowCart}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
