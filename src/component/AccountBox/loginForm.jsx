import React, { useContext } from "react";
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
export function LoginForm(props) {
  let nav = useNavigate();
  const { switchToSignup, switchToInvite } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Tên đăng nhập" />
        <Input type="password" placeholder="Mật khẩu" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
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
        onClick={() => {
          nav("/homepage");
        }}
      >
        Sign in
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
}
