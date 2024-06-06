import { Avatar, Box, Button, Typography } from "@mui/material";
import {
  FormBase,
  FooterBase,
  AppContainer,
  HeaderAuth,
  ButtonSignIn,
  ErrorMessage,
} from "./Component/Component";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { HandleRegister } from "../../services/handleAccount/handleAccount";
import { useNavigate } from "react-router-dom";
const SignupForm = (props) => {
  let nav = useNavigate();
  const [errorRequired, setErrorRequired] = useState("");
  const [stateError, setStateError] = useState({});
  const [FormRegister, setFormRegister] = useState({
    name: "",
    phone: "",
    email: "",
    date_of_birth: "2024-05-07T08:06:45.082Z",
    address: "...",
    password: "",
    confirm_password: "",
  });
  const initStateRegister = () => {
    setFormRegister({
      name: "",
      phone: "",
      email: "",
      date_of_birth: "2024-05-07T08:06:45.082Z",
      address: "...",
      password: "",
      confirm_password: "",
    });
  };

  const onChange = (e) => {
    setErrorRequired("");
    setStateError({});
    setFormRegister({
      ...FormRegister,
      [e.target.name]: e.target.value,
    });
  };
  const useMutation_Register = useMutation({
    mutationFn: (body) => {
      return HandleRegister(body);
    },
  });
  const validate = () => {
    const newErrors = {};

    if (!FormRegister.name) {
      newErrors.name = "Vui lòng không bỏ trống họ và tên !!";
    }

    if (!FormRegister.email) {
      newErrors.email = "Vui lòng không bỏ trống email !!";
    }
    if (!FormRegister.phone) {
      newErrors.phone = "Vui lòng không bỏ trống số điện thoại !!";
    }
    if (!FormRegister.password) {
      newErrors.password = "Vui lòng không bỏ trống !";
    }

    if (!FormRegister.confirm_password) {
      newErrors.confirm_password = "Vui lòng không bỏ trống !";
    }
    setErrorRequired(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const sRegister = () => {
    if (validate()) {
      useMutation_Register.mutate(FormRegister, {
        onSuccess: (data) => {
          if (data?.errors) {
            setStateError(data?.errors);
          } else {
            alert("Đăng ký tài khoản thành công");
            initStateRegister();
            nav("/login");
          }
        },
      });
    }
  };
  return (
    <>
      <AppContainer>
        <FormBase>
          <Box>
            <HeaderAuth></HeaderAuth>
            <Box
              mt={2}
              sx={{
                paddingLeft: "2rem",
                paddingRight: "2rem",
                maxHeight: "77vh",
                overflowY: "scroll",
              }}
            >
              <Typography
                fontSize={"26px"}
                fontWeight={700}
                variant="subtitle1"
              >
                Trở thành đối tác kinh doanh Với Tikpii
              </Typography>

              <Typography fontSize={"16px"} variant="subtitle2">
                Vui lòng để lại thông tin đăng ký để Droppii có thể liên hệ và
                hướng dẫn với bạn.
              </Typography>

              <form style={{ marginTop: "1rem" }}>
                <Box className="form-group">
                  <label htmlFor="name" className="form-label">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={FormRegister.name}
                    onChange={onChange}
                    style={{ height: "48px", fontSize: ".9rem" }}
                    className="form-control"
                    placeholder="Tên đăng nhập"
                  />
                  {errorRequired.name && (
                    <ErrorMessage>* {errorRequired.name}</ErrorMessage>
                  )}
                </Box>
                <Box style={{ marginTop: "1.5rem" }} className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={FormRegister.phone}
                    onChange={onChange}
                    style={{ height: "48px", fontSize: ".9rem" }}
                    className="form-control"
                    placeholder="Tên đăng nhập"
                  />
                  {errorRequired.phone && (
                    <ErrorMessage>* {errorRequired.phone}</ErrorMessage>
                  )}
                  {stateError?.phone && (
                    <ErrorMessage>* {stateError?.phone?.msg}</ErrorMessage>
                  )}
                </Box>
                <Box style={{ marginTop: "1.5rem" }} className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={FormRegister.email}
                    onChange={onChange}
                    style={{ height: "48px", fontSize: ".9rem" }}
                    className="form-control"
                    placeholder="Tên đăng nhập"
                  />
                  {errorRequired.email && (
                    <ErrorMessage>* {errorRequired.email}</ErrorMessage>
                  )}
                  {stateError?.email && (
                    <ErrorMessage>* {stateError?.email?.msg}</ErrorMessage>
                  )}
                </Box>
                <Box style={{ marginTop: "1.5rem" }} className="form-group">
                  <label htmlFor="password" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={FormRegister.password}
                    onChange={onChange}
                    style={{ height: "48px", fontSize: ".9rem" }}
                    className="form-control"
                    placeholder="Tên đăng nhập"
                  />
                  {errorRequired.password && (
                    <ErrorMessage>* {errorRequired.password}</ErrorMessage>
                  )}
                  {stateError?.password && (
                    <ErrorMessage>* {stateError?.password?.msg}</ErrorMessage>
                  )}
                </Box>
                <Box style={{ marginTop: "1.5rem" }} className="form-group">
                  <label htmlFor="password" className="form-label">
                    Xác nhận lại mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="confirm_password"
                    value={FormRegister.confirm_password}
                    onChange={onChange}
                    style={{ height: "48px", fontSize: ".9rem" }}
                    className="form-control"
                    placeholder="Tên đăng nhập"
                  />
                  {errorRequired.confirm_password && (
                    <ErrorMessage>
                      {" "}
                      *{errorRequired.confirm_password}
                    </ErrorMessage>
                  )}
                  {stateError?.confirm_password && (
                    <ErrorMessage>
                      * {stateError?.confirm_password?.msg}
                    </ErrorMessage>
                  )}
                </Box>
              </form>
            </Box>
          </Box>
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
            <ButtonSignIn onClick={sRegister}>Đăng Ký</ButtonSignIn>
          </Box>
        </FormBase>
      </AppContainer>
    </>
  );
};
export default SignupForm;
