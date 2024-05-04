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
import { Label } from "@mui/icons-material";
export function InviteForm(props) {
  let nav = useNavigate();
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Typography variant="inherit" fontSize={12} fontWeight="300" mb={3}>
          <Label htmlColor="#34a853"></Label> Vui lòng nhập số điện thoại hoặc
          tài khoản người giới thiệu
        </Typography>
        <Input type="text" placeholder="Tên đăng nhập hoặc số điện thoại" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      {/* <MutedLink href="#">Forget your password?</MutedLink> */}

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton
        onClick={() => {
          nav("/homepage");
        }}
      >
        Kiểm tra
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
