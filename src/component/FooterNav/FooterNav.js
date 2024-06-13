import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";

import ChatIcon from "@mui/icons-material/Chat";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";

import PeopleIcon from "@mui/icons-material/People";
import { Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const FooterNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  let nav = useNavigate();
  return (
    <Box
      width={"480px"}
      bgcolor={"white"}
      height={"58px"}
      position={"fixed"}
      boxShadow={"24"}
      bottom={"0"}
      className="PaddingLRForForFooterNav"
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <li
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            color: activeIndex === 0 ? "green" : "",
          }}
          onClick={() => handleItemClick(0)}
        >
          <HomeIcon></HomeIcon>{" "}
          <Typography fontWeight={"700"} fontSize={".7rem"}>
            Trang chủ
          </Typography>
        </li>
        <li
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            color: activeIndex === 1 ? "green" : "",
          }}
          onClick={() => {
            handleItemClick(1);
            nav("/product");
          }}
        >
          <InventoryIcon></InventoryIcon>{" "}
          <Typography fontWeight={"700"} fontSize={".7rem"}>
            Sản phẩm
          </Typography>
        </li>
        <li
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            color: activeIndex === 2 ? "green" : "",
          }}
          onClick={() => {
            handleItemClick(2);
          }}
        >
          <ChatIcon></ChatIcon>{" "}
          <Typography fontWeight={"700"} fontSize={".7rem"}>
            Tin nhắn
          </Typography>
        </li>
        <li
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            color: activeIndex === 3 ? "green" : "",
          }}
          onClick={() => {
            handleItemClick(3);
            nav("/customer");
          }}
        >
          <PeopleIcon></PeopleIcon>{" "}
          <Typography fontWeight={"700"} fontSize={".7rem"}>
            Khách hàng
          </Typography>
        </li>

        <li
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            color: activeIndex === 4 ? "green" : "",
          }}
          onClick={() => {
            handleItemClick(4);
          }}
        >
          <Avatar sx={{ width: 30, height: 30 }}></Avatar>{" "}
          <Typography fontWeight={"700"} fontSize={".7rem"}>
            Cá nhân
          </Typography>
        </li>
      </ul>
    </Box>
  );
};
export default FooterNav;
