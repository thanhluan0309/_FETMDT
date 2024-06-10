import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import React, { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormBase } from "../component";
import styled from "styled-components";
import FooterNav from "../FooterNav/FooterNav";
const AppContainer = styled.div`
  width: 100%;
  height: 100%; /* Đảm bảo chiếm toàn bộ chiều cao màn hình */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Base = ({ children }) => {
  let Nav = useNavigate();
  const [dataFromProduct, setDataFromProduct] = useState(null);
  const [loadingRedirect, setloadingRedirect] = useState(false);
  const handleDataFromProduct = (data) => {
    setDataFromProduct(data);
  };
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { sendDataToBase: handleDataFromProduct })
  );
  const isTokenExpired = (token) => {
    if (!token) {
      // Nếu không có token, coi như đã hết hạn
      return true;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Giải mã phần thân của token
      const expirationTime = decodedToken.exp * 1000; // Đổi giây sang mili giây
      const currentTime = new Date().getTime();

      return currentTime > expirationTime;
    } catch (error) {
      console.error("Lỗi khi giải mã token:", error);

      return true; // Nếu có lỗi giải mã, coi như đã hết hạn
    }
  };

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     return Nav("/login");
  //   } else {
  //     const intervalId = setInterval(() => {
  //       // Gọi hàm bạn muốn thực hiện sau mỗi 5 giây ở đây
  //       // Sử dụng

  //       const storedToken = localStorage.getItem("token");
  //       const isExpired = isTokenExpired(storedToken);

  //       if (isExpired) {
  //         localStorage.clear();
  //         Nav("/login");
  //       }
  //     }, 5000);

  //     // Cleanup function để clear interval khi component unmount
  //     return () => clearInterval(intervalId);
  //   }
  // }, []);
  return (
    <>
      <AppContainer>
        <Box
          sx={{
            width: "480px",
            maxWidth: "1320px",
            height: "110%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Navbar
            onOrderedQuant={dataFromProduct?.onOrderedQuant || 0}
            onReset={dataFromProduct?.onReset || null}
          ></Navbar>
          <Box sx={{ backgroundColor: "white" }}>{childrenWithProps}</Box>

          <FooterNav></FooterNav>
        </Box>
      </AppContainer>
    </>
  );
};

export default Base;
