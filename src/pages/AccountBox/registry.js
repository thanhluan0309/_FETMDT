import { React, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import BACKGROUNDLOGO from "../../assets/image/logo1.png";
import {
  FormBase,
  FooterBase,
  ButtonSignIn,
  Container,
  AppContainer,
  ErrorMessage,
} from "./Component/Component";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  HandleLogin,
  Handle_Check_User,
} from "../../services/handleAccount/handleAccount";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { HandleRegister_By_ref } from "../../services/handleAccount/handleAccount";
const Registry = (props) => {
  let nav = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ref = searchParams.get("ref");
  const [errors, setErrors] = useState({});
  const [FormCheckUser, setFormCheckUser] = useState({
    identifier: "",
  });

  const [DataError, setDataError] = useState({});
  const [isLoading, setIsloading] = useState(false);
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
  const Mutation_createUserRef = useMutation({
    mutationFn: (body) => {
      return HandleRegister_By_ref(body);
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
      let formCreate = {
        ...FormRegister,
        userid: ref,
      };
      Mutation_createUserRef.mutate(formCreate, {
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
  const onChangeRegis = (e) => {
    setErrorRequired("");
    setStateError({});
    setFormRegister({
      ...FormRegister,
      [e.target.name]: e.target.value,
    });
  };
  const Mutation_Check_User = useMutation({
    mutationFn: (body) => {
      return Handle_Check_User(body);
    },
  });

  const onChange = (e) => {
    setErrors({});
    setFormCheckUser({
      ...FormCheckUser,
      [e.target.name]: e.target.value,
    });
  };

  const sCheck = () => {
    setIsloading(true);
    Mutation_Check_User.mutate(FormCheckUser, {
      onSuccess: (data) => {
        if (data?.errorInfo) {
          const error = {};
          error.identifier = data?.errorInfo?.message;
          setErrors(error);
        } else {
          nav(`${data?.data?.data?.redirectUrl}` || "/registry");
        }
        setIsloading(false);
      },
      onError: (error) => {
        console.log("error " + JSON.stringify(error));
        setIsloading(false);
      },
    });
  };

  return (
    <>
      <AppContainer>
        <FormBase>
          <Box
            // className="AddpadingLeft"
            mt={4}
            sx={{
              width: "100%",
              height: "98vh",
              paddingLeft: "2rem",
              paddingBottom: "10px",
              paddingRight: "2rem",
              backgroundColor: "white",
            }}
          >
            <Box mb={3}>
              <ArrowBackIcon
                onClick={() => {
                  nav("/login");
                }}
                sx={{ marginBottom: "10px", cursor: "pointer" }}
              ></ArrowBackIcon>

              <hr style={{ width: "100%" }}></hr>
            </Box>
            {ref ? (
              <>
                {" "}
                <Box
                  mt={2}
                  sx={{
                    height: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      fontSize={"26px"}
                      fontWeight={700}
                      variant="subtitle1"
                    >
                      Trở thành đối tác kinh doanh Với Tikpii
                    </Typography>

                    <Typography fontSize={"16px"} variant="subtitle2">
                      Vui lòng để lại thông tin đăng ký để Droppii có thể liên
                      hệ và hướng dẫn với bạn.
                    </Typography>
                  </Box>
                  <form
                    style={{
                      height: "68%",
                      maxHeight: "68%",
                      overflowY: "scroll",
                    }}
                  >
                    <Box className="form-group">
                      <label htmlFor="name" className="form-label">
                        Họ và Tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={FormRegister.name}
                        onChange={onChangeRegis}
                        style={{ height: "48px", fontSize: ".9rem" }}
                        className="form-control"
                        placeholder="Họ và Tên"
                      />
                      {errorRequired.name && (
                        <ErrorMessage>* {errorRequired.name}</ErrorMessage>
                      )}
                    </Box>
                    <Box className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Số điện thoại
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={FormRegister.phone}
                        onChange={onChangeRegis}
                        style={{ height: "48px", fontSize: ".9rem" }}
                        className="form-control"
                        placeholder="Số điện thoại"
                      />
                      {errorRequired.phone && (
                        <ErrorMessage>* {errorRequired.phone}</ErrorMessage>
                      )}
                      {stateError?.phone && (
                        <ErrorMessage>* {stateError?.phone?.msg}</ErrorMessage>
                      )}
                    </Box>
                    <Box className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={FormRegister.email}
                        onChange={onChangeRegis}
                        style={{ height: "48px", fontSize: ".9rem" }}
                        className="form-control"
                        placeholder="Địa chỉ Email"
                      />
                      {errorRequired.email && (
                        <ErrorMessage>* {errorRequired.email}</ErrorMessage>
                      )}
                      {stateError?.email && (
                        <ErrorMessage>* {stateError?.email?.msg}</ErrorMessage>
                      )}
                    </Box>
                    <Box className="form-group">
                      <label htmlFor="password" className="form-label">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={FormRegister.password}
                        onChange={onChangeRegis}
                        style={{ height: "48px", fontSize: ".9rem" }}
                        className="form-control"
                        placeholder="Mật khẩu"
                      />
                      {errorRequired.password && (
                        <ErrorMessage>* {errorRequired.password}</ErrorMessage>
                      )}
                      {stateError?.password && (
                        <ErrorMessage>
                          * {stateError?.password?.msg}
                        </ErrorMessage>
                      )}
                    </Box>
                    <Box className="form-group">
                      <label htmlFor="password" className="form-label">
                        Xác nhận lại mật khẩu
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="confirm_password"
                        value={FormRegister.confirm_password}
                        onChange={onChangeRegis}
                        style={{ height: "48px", fontSize: ".9rem" }}
                        className="form-control"
                        placeholder="Xác nhận lại mật khẩu"
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
                  {ref ? (
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
                  ) : (
                    ""
                  )}
                </Box>
              </>
            ) : (
              <>
                {" "}
                <Box mb={2}>
                  <Typography
                    color={"#393E40"}
                    fontWeight={"700"}
                    fontSize={"25px"}
                    margin={"auto"}
                    style={{ cursor: "pointer" }}
                  >
                    Người giới thiệu
                  </Typography>
                  <Typography fontSize={"16px"} color={"#5C6366"}>
                    Vui lòng nhập số điện thoại hoặc tài khoản người giới thiệu
                  </Typography>
                </Box>
                <form style={{ marginTop: "3.5rem" }}>
                  <Box class="form-group">
                    <input
                      type="identifier"
                      name="identifier"
                      value={FormCheckUser.identifier}
                      onChange={onChange}
                      style={{ height: "48px", fontSize: ".9rem" }}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Nhập tài khoản hoặc số điện thoại"
                    />
                  </Box>
                  {errors?.identifier ? (
                    <Typography color={"red"}>* {errors.identifier}</Typography>
                  ) : (
                    ""
                  )}
                </form>
                {isLoading ? (
                  <Box mt={9} display={"flex"} justifyContent={"end"}>
                    <ButtonSignIn>
                      {" "}
                      <CircularProgress></CircularProgress>
                    </ButtonSignIn>
                  </Box>
                ) : (
                  <Box mt={9} display={"flex"} justifyContent={"end"}>
                    <ButtonSignIn onClick={sCheck}>Kiểm tra</ButtonSignIn>
                  </Box>
                )}
                <Box
                  mt={3}
                  p={4}
                  display={"flex"}
                  width={"100%"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Typography variant={"subtitle1"} textAlign={"center"}>
                    Bạn chưa có link giới thiệu?
                  </Typography>

                  <Typography
                    onClick={() => {
                      nav("/sign-up");
                    }}
                    sx={{ cursor: "pointer" }}
                    fontSize={"16px"}
                    color={"#1B3FE4"}
                  >
                    Đăng ký tại đây
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </FormBase>
      </AppContainer>
    </>
  );
};

export default Registry;
