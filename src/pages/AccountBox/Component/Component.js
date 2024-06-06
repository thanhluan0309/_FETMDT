import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import BACKGROUNDLOGO from "../../../assets/image/auth-backdrop.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LOGO from "../../../assets/image/LOGI_TIKPII.png.jpg";
import BACKGROUNDTOP from "../../../assets/image/bg-login.png";
export const ButtonSignIn = styled.button`
  width: 100%;
  background-color: rgb(27, 63, 228);
  padding: 0px 12px;
  height: 2.5rem;
  line-height: 1;
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
`;

export const Container = styled.div`
  background-image: url(${BACKGROUNDTOP});

  background-repeat: no-repeat;

  background-size: cover;
  background-position: bottom;

  height: 204px;
  width: 100%;
`;

const ButtonSignUP = styled.button`
  width: 100%;

  background-color: #f7f7fa;
  border: solid 1px rgb(27, 63, 228);

  padding: 0px 12px;
  height: 2.5rem;
  line-height: 1;
  font-size: 14px;
  border-radius: 0.5rem;
  color: rgb(27, 63, 228);
  font-weight: 500;
`;
export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const FormBase = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          width: "480px",
          maxWidth: "1320px",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // backgroundColor: "blueviolet",
        }}
      >
        {children}
      </Box>
    </>
  );
};
export const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;
export const FooterBase = ({ children }) => {
  let nav = useNavigate();
  return (
    <>
      <Box
        sx={{
          paddingLeft: "2rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          paddingRight: "2rem",
          textAlign: "center",
          backgroundColor: "#f7f7fa",
        }}
      >
        <Typography color={"#5C6366"} fontSize={"13px"} mb={"1rem"}>
          Trở thành đối tác của Tikpii?
        </Typography>
        <ButtonSignUP
          onClick={() => {
            nav("/sign-up");
          }}
        >
          Đăng Ký Ngay
        </ButtonSignUP>
      </Box>
    </>
  );
};
const ContainerAuth = styled.div`
  background-image: url(${BACKGROUNDLOGO});
  background-repeat: no-repeat;
  background-size: 15%;
  background-position: right;
  height: 107px;
  width: 100%;
`;
const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;
`;
export const HeaderAuth = ({ children }) => {
  let nav = useNavigate();

  return (
    <>
      <Box>
        <ContainerAuth>
          <ContainerHeader>
            <Avatar
              onClick={() => {
                nav("/login");
              }}
              sx={{
                position: "absolute",
                left: "47rem",
                cursor: "pointer",
                width: 48,
                backgroundColor: "#efefef",
                height: 48,
              }}
            >
              <ArrowBackIosNewIcon
                fontSize=".5rem"
                sx={{ color: "black" }}
              ></ArrowBackIosNewIcon>{" "}
            </Avatar>

            <img src={LOGO} width={200} height={200}></img>
          </ContainerHeader>
        </ContainerAuth>
      </Box>
    </>
  );
};
