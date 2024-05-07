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

import { HandleLogin as hdlgin } from "./handle";

export function LoginForm(props) {
  let nav = useNavigate();
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const { switchToSignup, switchToInvite } = useContext(AccountContext);

  const onChangeLogin = (event) => {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  };
  const handlelogin = async () => {
    try {
      // let check = await hdlgin(formLogin);
      // if (check) {
      //   nav("/homepage");
      // }
      nav("/product");
    } catch (error) {
      alert("Loi");
    }
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="username"
          onChange={onChangeLogin}
          name="username"
          value={formLogin.username}
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
        onClick={handlelogin}
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
