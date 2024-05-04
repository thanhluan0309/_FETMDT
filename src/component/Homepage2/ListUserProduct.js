import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { FormControl, Input, FormHelperText, InputLabel } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const ListUserProduct = () => {
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
        >
          <Typography p="15px" variant="inherit" fontWeight="600">
            Danh sách người tham gia
            <Button onClick={handleOpen}>
              <PersonAddAltIcon></PersonAddAltIcon>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 460,
              height: 500,

              bgcolor: "background.paper",
            }}
          >
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
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyxA6n0DfRfkMJlPW_wxmeXvb9CwnkDOa4gxpWyvjZA&s"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyxA6n0DfRfkMJlPW_wxmeXvb9CwnkDOa4gxpWyvjZA&s"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyxA6n0DfRfkMJlPW_wxmeXvb9CwnkDOa4gxpWyvjZA&s"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyxA6n0DfRfkMJlPW_wxmeXvb9CwnkDOa4gxpWyvjZA&s"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box
          gridColumn="span 5"
          data-aos-duration="2000"
          data-aos="slide-left"
          gridRow="span 2"
        >
          <Typography p="15px" variant="inherit" fontWeight="600">
            Tạo người dùng
          </Typography>
          <Box>
            <FormContainer>
              <FormWrapper onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <FormInput type="email" id="username" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="username">Tài khoản:</FormLabel>
                  <FormInput
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="password">Mật khẩu:</FormLabel>
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
                  <FormLabel htmlFor="phone">Phone:</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </FormGroup>
                <SubmitButton type="submit">Submit</SubmitButton>
              </FormWrapper>
            </FormContainer>
          </Box>
        </Box>
      </Box>
      <Box mt={15} gridColumn="span 7">
        <Typography p="15px" variant="inherit" fontWeight="600">
          Hoạt động thành viên
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            mt="5px"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 9, md: 12 }}
          >
            {Array.from(Array(9)).map((_, index) => (
              <Grid display={"flex"} xs={2} sm={4} md={4} key={index}>
                <Card style={{ margin: "auto" }} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaU53EKL2Lsco4UnmiuPpQh4vqVvdgho9HoVFAw--mw&s"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <Box display="flex">
                        <Avatar></Avatar>
                        <Box display="flex" alignItems="center" ml="12px">
                          {" "}
                          <Typography>Lizard</Typography>
                        </Box>
                      </Box>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions justifyContent="space-between" display="flex">
                    <Box display="flex">
                      <Button size="small">
                        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                      </Button>
                      <Typography ml="-12px" display="flex" alignItems="center">
                        0
                      </Typography>
                    </Box>

                    <Box display="flex">
                      <Button size="small">
                        <ChatIcon></ChatIcon>
                      </Button>
                      <Typography ml="-12px" display="flex" alignItems="center">
                        0
                      </Typography>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default ListUserProduct;
