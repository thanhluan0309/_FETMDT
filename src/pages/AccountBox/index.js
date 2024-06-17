import { React, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";

import BACKGROUNDLOGO from "../../assets/image/logo1.png";
import {
  FormBase,
  FooterBase,
  ButtonSignIn,
  Container,
  AppContainer,
} from "./Component/Component";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { HandleLogin } from "../../services/handleAccount/handleAccount";
import CircularProgress from "@mui/material/CircularProgress";
const AccountBox = (props) => {
  let nav = useNavigate();
  const [FormLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsloading] = useState(false);
  const [DataError, setDataError] = useState({});
  const MutationLogin = useMutation({
    mutationFn: (body) => {
      return HandleLogin(body);
    },
  });
  const onChange = (e) => {
    setFormLogin({
      ...FormLogin,
      [e.target.name]: e.target.value,
    });
  };

  const sLogin = () => {
    setIsloading(true);
    MutationLogin.mutate(FormLogin, {
      onSuccess: (data) => {
        if (data?.errors) {
          setDataError(data);
          setIsloading(false);
        } else {
          localStorage.setItem("token", data.data.data.access_token);
          nav("/product");
        }
      },
      onError: (err) => {
        console.log("lỗi " + err);
        setIsloading(false);
      },
    });
  };

  return (
    <>
      <AppContainer>
        <FormBase>
          <Box sx={{ backgroundColor: "white" }}>
            <Container style={{ display: "grid", justifyContent: "center" }}>
              <Box>
                {" "}
                <img
                  style={{
                    margin: "auto",
                    paddingTop: "1.5rem",
                    paddingBottom: ".5rem",
                  }}
                  src={BACKGROUNDLOGO}
                ></img>
                <Typography color={"white"} textAlign={"center"}>
                  TIKPII Business
                </Typography>
                <Typography color={"white"} textAlign={"center"}>
                  Nền tảng hỗ trợ Kinh Doanh Online
                </Typography>
              </Box>
            </Container>
            <Box
              // className="AddpadingLeft"
              mt={4}
              sx={{
                paddingLeft: "2rem",
                paddingRight: "2rem",
                width: "100%",
                height: "62%",
              }}
            >
              <Box mb={2} display={"flex"}>
                <Typography
                  color={"#393E40"}
                  fontWeight={"700"}
                  fontSize={"25px"}
                  margin={"auto"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    nav("/sign-up");
                  }}
                >
                  Đăng nhập tài khoản
                </Typography>
              </Box>
              <form>
                <Box class="form-group">
                  <input
                    type="email"
                    name="email"
                    value={FormLogin.email}
                    onChange={onChange}
                    style={{ height: "48px", fontSize: ".9rem" }}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tên đăng nhập"
                  />
                </Box>
                <Box class="form-group">
                  <input
                    type="password"
                    name="password"
                    value={FormLogin.password}
                    onChange={onChange}
                    style={{
                      height: "48px",
                      marginTop: "1rem",
                      fontSize: ".9rem",
                    }}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Mật khẩu"
                  />
                </Box>
              </form>
              {DataError && DataError.errors?.email?.msg ? (
                <Alert style={{ marginTop: "1rem" }} severity="error">
                  {DataError.errors?.email?.msg}
                </Alert>
              ) : (
                ""
              )}
              {DataError && DataError.errors?.password?.msg ? (
                <Alert style={{ marginTop: "1rem" }} severity="error">
                  {DataError.errors?.password?.msg}
                </Alert>
              ) : (
                ""
              )}

              <Box mt={2} display={"flex"} justifyContent={"end"}>
                <Typography fontWeight={"500"} color={"#393E40"}>
                  Quên mật khẩu ?
                </Typography>
              </Box>
              <Box mt={2} display={"flex"} justifyContent={"end"}>
                {isLoading ? (
                  <ButtonSignIn disabled={isLoading}>
                    {" "}
                    <CircularProgress
                      sx={{ fontSize: "10px" }}
                    ></CircularProgress>
                  </ButtonSignIn>
                ) : (
                  <ButtonSignIn onClick={sLogin}>Đăng nhập</ButtonSignIn>
                )}
              </Box>
              <Box mt={2} display={"grid"} justifyContent={"center"}>
                <Typography
                  variant={"subtitle2"}
                  color={"#5C6366"}
                  textAlign={"center"}
                >
                  hoặc
                </Typography>

                <Typography
                  mt={1}
                  fontSize={"14px"}
                  fontWeight={"600"}
                  color={"#1B3FE4"}
                >
                  Đăng nhập bằng số điện thoại
                </Typography>
              </Box>
            </Box>
          </Box>
          <FooterBase></FooterBase>
        </FormBase>
      </AppContainer>
    </>
  );
};

export default AccountBox;
