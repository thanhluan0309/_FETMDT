import { Drawer, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "./Icons/CloseIcon";
import { useNavigate } from "react-router-dom";
const MobileLinksDrawer = ({ onOpen, onHandleOpen }) => {
  let nav = useNavigate();
  return (
    <Drawer
      className="mobile-drawer hide-in-desktop"
      anchor="left"
      transitionDuration={400}
      open={onOpen}
      onClose={() => {
        onHandleOpen(false);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        height: "100vh",
      }}
    >
      <div className="draw" style={{ width: "65vw" }}>
        <section className="closing">
          <IconButton
            disableRipple
            onClick={() => {
              onHandleOpen(false);
            }}
          >
            <CloseIcon fillColor={"#68707d"} />
          </IconButton>
        </section>
        <section className="mobile-links">
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
              <button>Thành viên</button>
            </li>
          </ul>
        </section>
      </div>
    </Drawer>
  );
};

export default MobileLinksDrawer;
