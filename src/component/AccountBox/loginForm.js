import React, { useContext, useEffect, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";

import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HandleLogin } from "../../apis/handleAccount";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useMutation } from "@tanstack/react-query";
export const LoginForm = (props) => {
  let nav = useNavigate();
  const { switchToSignup, switchToInvite } = useContext(AccountContext);
  const [validationError, setValidationError] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const onChangeLogin = (event) => {
    setValidationError({});
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  };

  const mutation = useMutation({
    mutationFn: (body) => {
      return HandleLogin(body);
    },
  });
  const Handlelogin = () => {
    setIsloading(true);
    mutation.mutate(formLogin, {
      onSuccess: (data) => {
        if (data.data) {
          return nav("/product");
        }
        setValidationError(data);
        setIsloading(false);
      },
      onError: (error) => {
        console.log(">>> error " + error);
      },
    });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="username"
          onChange={onChangeLogin}
          name="email"
          value={formLogin.email}
          placeholder="Tên đăng nhập"
        />
        <Input
          type="password"
          onChange={onChangeLogin}
          name="password"
          value={formLogin.password}
          placeholder="Mật khẩu"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Stack sx={{ width: "100%" }} spacing={2}>
        {validationError?.errors &&
          Object.entries(validationError?.errors).map(([key, error], index) => (
            <Alert key={index} severity="error">
              {" "}
              {error?.msg}
            </Alert>
          ))}
      </Stack>
      <MutedLink href="#">Forget your password?</MutedLink>
      <BoldLink
        direction="vertical"
        margin={10}
        onClick={switchToInvite}
        href="#"
      >
        <Typography mt={2} fontSize={12}>
          {" "}
          Đăng ký qua người giới thiệu
        </Typography>
      </BoldLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton
        // onClick={() => {
        //   nav("/homepage");
        // }}
        type="button"
        disabled={isLoading}
        onClick={Handlelogin}
      >
        {isLoading ? "Loading...." : "  Sign in"}
      </SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Sign Up
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
};
