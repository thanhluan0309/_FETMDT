import BarChart from "./Barchart";
import { Box } from "@mui/material";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CallIcon from "@mui/icons-material/Call";

import Button from "@mui/material/Button";

import { useState } from "react";
import styled from "styled-components";
const Customer = () => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState("");
  const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const FormWrapper = styled.form`
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 400px;

    @media (max-width: 768px) {
      width: 90%;
    }
  `;

  const FormGroup = styled.div`
    margin-bottom: 20px;
  `;

  const FormLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #555;
    display: block;
    margin-bottom: 5px;
  `;

  const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #4d90fe;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px;
    }
  `;

  const FileInput = styled(FormInput).attrs({ type: "file" })`
    padding: 5px;
  `;

  const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #4d90fe;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #307fe2;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px;
    }
  `;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu form ở đây
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("File:", file);
    console.log("Phone:", phone);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="container">
        <Box>
          <BarChart></BarChart>
        </Box>

        <Box
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          flexWrap="wrap"
          display="flex"
          justifyContent="space-evenly"
          mt={15}
          gap="20px"
        >
          <Box
            gridColumn="span 5"
            data-aos="fade-up"
            data-aos-duration="2000"
            gridRow="span 2"
            style={{ overflowY: "scroll", height: "580px" }}
          >
            <Typography p="15px" variant="inherit" fontWeight="600">
              Danh sách khách hàng
            </Typography>
            <List
              sx={{
                width: "100%",
                maxWidth: 460,
                height: 500,

                bgcolor: "background.paper",
              }}
            >
              {[...Array(5)].map((_, index) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyxA6n0DfRfkMJlPW_wxmeXvb9CwnkDOa4gxpWyvjZA&s"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                    <Box
                      width={"200px"}
                      justifyContent={"space-between"}
                      display={"flex"}
                    >
                      <Box p={1}>
                        <Button variant="outlined">
                          <ShoppingBasketIcon></ShoppingBasketIcon>
                        </Button>
                      </Box>
                      <Box p={1}>
                        <Button variant="outlined">
                          <CallIcon></CallIcon>
                        </Button>
                      </Box>
                    </Box>
                  </ListItem>

                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </Box>
          <Box
            gridColumn="span 5"
            data-aos-duration="2000"
            data-aos="slide-left"
            gridRow="span 2"
          >
            <Typography p="15px" variant="inherit" fontWeight="600">
              Tạo khách hàng
            </Typography>
            <Box>
              <FormContainer>
                <FormWrapper onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput type="email" id="username" required />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="username">Họ và tên:</FormLabel>
                    <FormInput
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="password">Địa chỉ:</FormLabel>
                    <FormInput
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="file">Hình ảnh:</FormLabel>
                    <FileInput
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="phone">Số điện thoại:</FormLabel>
                    <FormInput
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <SubmitButton type="submit">TẠO</SubmitButton>
                </FormWrapper>
              </FormContainer>
            </Box>
          </Box>
        </Box>
      </div>{" "}
      <div
        className="container"
        style={{
          backgroundColor: "white",
          padding: "0px",
          paddingTop: "100px",
        }}
      ></div>
    </>
  );
};
export default Customer;
