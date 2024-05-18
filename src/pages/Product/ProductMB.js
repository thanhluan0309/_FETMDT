import PopupNotice from "../../component/PopupNotice/PopupNotice";
import { Box } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import { DiscountMB } from "../../component/Styles/PriceText";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  mockdataProduct as data,
  MockDataIMG as dataIMG,
} from "../../data/data";
import "./App.css";
import { TitleProduct as TitleComponent } from "../../component/Styles/Title";
import { PriceText, Discount } from "../../component/Styles/PriceText";
import DiscountIcon from "@mui/icons-material/Discount";
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let nav = useNavigate();
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#99CCF3",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E6",
    700: "#0059B3",
    800: "#004C99",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Listbox = styled("ul")(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    z-index: 1;
  
    .closed & {
      opacity: 0;
      transform: scale(0.95, 0.8);
      transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
    
    .open & {
      opacity: 1;
      transform: scale(1, 1);
      transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }
  
    .placement-top & {
      transform-origin: bottom;
    }
  
    .placement-bottom & {
      transform-origin: top;
    }
    `
  );

  const AnimatedListbox = React.forwardRef(function AnimatedListbox(
    props,
    ref
  ) {
    const { ownerState, ...other } = props;
    const popupContext = React.useContext(PopupContext);

    if (popupContext == null) {
      throw new Error(
        "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
      );
    }

    const verticalPlacement = popupContext.placement.split("-")[0];

    return (
      <CssTransition
        className={`placement-${verticalPlacement}`}
        enterClassName="open"
        exitClassName="closed"
      >
        <Listbox {...other} ref={ref} />
      </CssTransition>
    );
  });

  AnimatedListbox.propTypes = {
    ownerState: PropTypes.object.isRequired,
  };

  const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
    `
  );

  const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
      };
      outline: none;
    }
    `
  );
  return (
    <>
      <Box
        className="hide-in-desktop"
        pb={5}
        sx={{ width: "100%", height: "100%" }}
      >
        <div className="col-12 ">
          <img
            className="bgtitle"
            src="https://img.pikbest.com/png-images/20211011/startup-managers-presenting-and-analyzing-sales-growth-chart_6143677.png!bw700"
          ></img>
        </div>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            paddingLeft: "5px",
            paddingRight: "10px",
          }}
        >
          <div class="col-12 mb-2">
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h7" fontWeight={700}>
                Các nhãn hàng
              </Typography>
            </Box>
          </div>
          <div
            style={{
              overflowY: "scroll",
              display: "flex",
              height: "200px",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
            class="  col-12"
          >
            {dataIMG &&
              dataIMG.map((item, index) => (
                <Box p={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item}
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
              ))}
          </div>

          <Box display={"flex"} p={3}>
            <Typography
              fontStyle={"italic"}
              color={"blue"}
              variant="h7"
              style={{ textDecoration: "underline", margin: "auto" }}
            >
              Xem tất cả
            </Typography>
          </Box>
          <div class="col-12">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h7" fontWeight={700}>
                Dành cho bạn
              </Typography>
              <FormControlLabel
                sx={{
                  display: "block",
                  fontSize: "10px",
                }}
                variant="h7"
                control={<Switch name="loading" color="primary" />}
                label="Thông báo"
              />
            </Box>
          </div>
          <div
            style={{ overflowX: "scroll", paddingBottom: "10px" }}
            class="col-12"
          >
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Dropdown>
                <MenuButton className="cssforButtonItem">Khuyến mãi</MenuButton>
                <Menu></Menu>
              </Dropdown>
              <Dropdown>
                <MenuButton className="cssforButtonItem">Top seller</MenuButton>
                <Menu></Menu>
              </Dropdown>
              <Dropdown>
                <MenuButton className="cssforButtonItem">Kho hàng</MenuButton>
                <Menu></Menu>
              </Dropdown>

              <Dropdown>
                <MenuButton className="cssforButtonItem">
                  Thương hiệu
                </MenuButton>
                <Menu slots={{ listbox: AnimatedListbox }}>
                  <MenuItem onClick={createHandleMenuClick("Profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={createHandleMenuClick("Language settings")}
                  >
                    Language settings
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("Log out")}>
                    Log out
                  </MenuItem>
                </Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
          <div
            style={{
              overflowX: "scroll",
              marginTop: "10px",
              paddingBottom: "10px",
            }}
            class="col-12"
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction="row" spacing={1}>
                <Chip label="Liên quan" variant="outlined" />

                <Chip label="Mới nhất" variant="outlined" />

                <Chip label="Bán chạy" variant="outlined" />

                <Chip label="Lợi nhuận cao" variant="outlined" />

                <Chip label="Điểm cao nhất" variant="outlined" />
              </Stack>
            </Box>
          </div>
          <Box mt={2}>
            <Typography variant="h7" fontWeight={700}>
              Mục sản phẩm
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid display={"flex"} justifyContent={"space-between"} container>
                {data &&
                  data.map((item, index) => (
                    <Grid
                      mt={2}
                      sx={{ width: "49%" }}
                      display={"flex"}
                      key={index}
                    >
                      <Card
                        style={{
                          margin: "auto",
                          marginTop: "10px",

                          cursor: "pointer",
                          height: "100%",
                          minWidth: "100%",
                          maxWidth: "100%%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="140"
                          image={item.image[0]}
                          onClick={() => {
                            nav(`/pDetails/${item.id}`);
                          }}
                        />
                        <CardContent sx={{ padding: "8px" }}>
                          <TitleComponent>{item.name}</TitleComponent>

                          <Typography variant="body2" color="text.secondary">
                            Đã bán: {item.sold}
                          </Typography>

                          <Button
                            variant="body2"
                            sx={{ padding: "0px" }}
                            className="text-primary"
                          >
                            Lợi nhuận: {item.Profit} đ
                          </Button>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <PriceText>
                              {item.price.toLocaleString("en-US")} đ
                            </PriceText>
                            <Box display={"flex"}>
                              <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                bgcolor={"darkorange"}
                                borderRadius={"5px"}
                              >
                                <DiscountMB>
                                  {" "}
                                  Giảm {item.discount}
                                  <DiscountIcon fontSize="small"></DiscountIcon>
                                </DiscountMB>
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Product;
