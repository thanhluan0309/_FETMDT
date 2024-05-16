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
import { HandleRegister } from "../../services/handleAccount/handleAccount";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [validationError, setValidationError] = useState({});
  const [FormRegister, SetformRegister] = useState({
    name: "",
    phone: "",
    email: "",
    date_of_birth: "",
    address: "",
    password: "",
    confirm_password: "",
  });

  const onchangeForm = (e) => {
    setValidationError({});
    SetformRegister({
      ...FormRegister,
      [e.target.name]: e.target.value,
    });
  };
  const { mutate, error } = useMutation({
    mutationFn: (body) => {
      return HandleRegister(body);
    },
  });

  const handlesingup = () => {
    mutate(FormRegister, {
      onSuccess: (data) => {
        console.log("check data " + JSON.stringify(data, null, 2));
        setValidationError(data);
      },
      onError: (error) => {
        console.log(">>> error " + error);
      },
    });
  };
  console.log(">>error " + error);
  return (
    <BoxContainer>
      <FormContainer>
        <Typography variant="inherit" fontSize={12} fontWeight="300" mb={3}>
          <Label htmlColor="#34a853"></Label> Vui lòng để lại thông tin đăng ký
          để XXX có thể liên hệ và hướng dẫn với bạn.
        </Typography>
        <Input
          id="fullname"
          name="name"
          type="text"
          value={FormRegister.name}
          onChange={onchangeForm}
          placeholder="Nhập họ và tên"
        />
        <Input
          id="phone"
          name="phone"
          type="text"
          value={FormRegister.phone}
          onChange={onchangeForm}
          placeholder="Nhập số điện thoại"
        />

        <Input
          id="email"
          name="email"
          type="email"
          value={FormRegister.email}
          onChange={onchangeForm}
          placeholder="Địa chỉ email"
        />
        <Input
          id="address"
          name="address"
          type="text"
          value={FormRegister.address}
          onChange={onchangeForm}
          placeholder="Địa chỉ"
        />
        <Input
          id="date_of_birth"
          name="date_of_birth"
          type="date"
          placeholder="YYYY-MM-DD"
          value={FormRegister.date_of_birth}
          onChange={onchangeForm}
        />
        <Input
          id="password"
          name="password"
          type="text"
          placeholder="Nhập mật khẩu"
          value={FormRegister.password}
          onChange={onchangeForm}
        />
        <Input
          id="repassword"
          type="password"
          name="confirm_password"
          value={FormRegister.confirm_password}
          onChange={onchangeForm}
          placeholder="Nhập xác nhận mật khẩu"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handlesingup}>Sign Up</SubmitButton>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {validationError?.errors &&
          Object.entries(validationError?.errors).map(([key, error], index) => (
            <Alert key={index} severity="error">
              {" "}
              {error?.msg}
            </Alert>
          ))}
      </Stack>
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
