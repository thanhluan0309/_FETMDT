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
import { Label } from "@mui/icons-material";

import { HandleRegister } from "./handle";
export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const handlesingup = async () => {
    let dt = {
      name: "tesst level 4",
      phone: "tesst level 4",
      mail: "tesst level 4",
      pdate: "tesst level 4",
      career: "tesst level 4",
    };
    try {
      let check = await HandleRegister(dt);
      console.log("check " + JSON.stringify(check));
      if (check.success) {
        alert("success");
      } else {
        alert(check.message);
      }
    } catch (error) {}
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Typography variant="inherit" fontSize={12} fontWeight="300" mb={3}>
          <Label htmlColor="#34a853"></Label> Vui lòng để lại thông tin đăng ký
          để Droppii có thể liên hệ và hướng dẫn với bạn.
        </Typography>
        <Input id="fullname" type="text" placeholder="Nhập họ và tên" />

        <Input id="phone" type="number" placeholder="Nhập số điện thoại" />
        <Input id="email" type="email" placeholder="Địa chỉ email" />
        <Input
          id="password"
          type="text"
          placeholder="Nhập khung giờ bạn muốn nhận cuộc gọi tư vấn"
        />
        <Input id="repassword" type="password" placeholder="Nhập nghề nghiệp" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handlesingup} type="submit">
        Sign Up
      </SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Sign In
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
