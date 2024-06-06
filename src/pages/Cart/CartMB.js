import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useMediaQuery } from "@mui/material";
import { Columns as columns, Rows as rows } from "./components/components";
import { SimpleDialog } from "./components/components";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { PickList } from "primereact/picklist";
import { mockdataProduct } from "../../data/data";
import { InputNumber } from "primereact/inputnumber";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Transition } from "react-transition-group";
import { styled } from "@mui/system";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseIcon from "@mui/icons-material/Close";
import { Snackbar } from "@mui/base/Snackbar";
const CartMB = ({ stateCustomer }) => {
  const [openFail, setOpenFail] = React.useState(false);
  const [exited, setExited] = React.useState(true);
  const nodeRef = React.useRef(null);

  const handleCloseFail = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenFail(false);
  };

  const handleClickFail = () => {
    setOpenFail(true);
  };

  const handleOnEnterFail = () => {
    setExited(false);
  };

  const handleOnExited = () => {
    setExited(true);
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

  const blue = {
    200: "#99CCF3",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  };

  const TriggerButton = styled("button")(
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

  const StyledSnackbar = styled(Snackbar)`
    position: fixed;
    z-index: 5500;
    display: flex;
    bottom: 16px;
    right: 16px;
    max-width: 560px;
    min-width: 300px;
  `;

  const SnackbarContent = styled("div")(
    ({ theme }) => `
    display: flex;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: ${
      theme.palette.mode === "dark"
        ? `0 2px 16px rgba(0,0,0, 0.5)`
        : `0 2px 16px ${grey[200]}`
    };
    padding: 0.75rem;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
  
    & .snackbar-message {
      flex: 1 1 0%;
      max-width: 100%;
    }
  
    & .snackbar-title {
      margin: 0;
      line-height: 1.5rem;
      margin-right: 0.5rem;
    }
  
    & .snackbar-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
    }
  
    & .snackbar-close-icon {
      cursor: pointer;
      flex-shrink: 0;
      padding: 2px;
      border-radius: 4px;
  
      &:hover {
        background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      }
    }
    `
  );

  const positioningStyles = {
    entering: "translateX(0)",
    entered: "translateX(0)",
    exiting: "translateX(500px)",
    exited: "translateX(500px)",
    unmounted: "translateX(500px)",
  };
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  // Điều chỉnh các cột cho thiết bị di động
  const mobileColumns = columns.map((column) => ({
    ...column,
    flex: column.flex || 1, // Sử dụng flex cho cột nếu không có
    minWidth: column.minWidth || 100, // Đảm bảo độ rộng tối thiểu cho cột
  }));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const ComponentIteam = ({ stateProduct }) => {
    return (
      <ListItem>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems="center">
            <ListItemAvatar>
              <img src={stateProduct.image[0]} width={50} height={50}></img>
            </ListItemAvatar>
            <ListItemText
              sx={{
                minWidth: "150px",
                maxWidth: "150px",
              }}
              primary={stateProduct.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Số tiền : {stateProduct.price}
                  </Typography>
                  <div className="flex-auto">
                    <label
                      htmlFor="horizontal-buttons"
                      className="font-bold block mb-2"
                    >
                      Số lượng : 12
                    </label>
                  </div>
                </React.Fragment>
              }
            />
            <ListItemText display={"flex"} alignItems="center">
              <Button
                variant="outlined"
                color="error"
                style={{ margin: "auto" }}
              >
                <DeleteForeverIcon></DeleteForeverIcon>
              </Button>
            </ListItemText>
          </Box>
        </Box>
      </ListItem>
    );
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {mockdataProduct &&
        mockdataProduct.map((item, index) => (
          <FormControlLabel
            style={{ marginBottom: "20px" }}
            label={<ComponentIteam stateProduct={item}></ComponentIteam>}
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
        ))}
    </Box>
  );
  const SpanLable = ({ content, fontSize, fontWeight }) => {
    return (
      <Typography fontWeight={fontWeight || 500} fontSize={fontSize || ".9rem"}>
        {content}
      </Typography>
    );
  };
  return (
    <>
      <Box className="hide-in-desktop">
        <Box mt={3} mb={3}>
          <Typography fontWeight={700}>Quản lý giỏ hàng</Typography>
        </Box>
        <Box
          display={"flex"}
          mb={3}
          border={"2px solid #f7f7f7"}
          paddingTop={2}
          paddingBottom={2}
          zIndex={10}
          sx={{ backgroundColor: "white" }}
          alignItems={"center"}
          position={"sticky"}
          top={0}
          borderRadius={"5px"}
          justifyContent={"space-around"}
        >
          <Typography>Thanh toán: 0đ</Typography>
          <Typography>
            <React.Fragment>
              <TriggerButton
                sx={{ backgroundColor: "orangered", color: "white" }}
                type="button"
                onClick={handleClickFail}
              >
                Mua hàng (9)
              </TriggerButton>
              <StyledSnackbar
                autoHideDuration={2000}
                open={openFail}
                onClose={handleCloseFail}
                exited={exited}
              >
                <Transition
                  timeout={{ enter: 400, exit: 400 }}
                  in={openFail}
                  appear
                  unmountOnExit
                  onEnter={handleOnEnterFail}
                  onExited={handleOnExited}
                  nodeRef={nodeRef}
                >
                  {(status) => (
                    <SnackbarContent
                      style={{
                        transform: positioningStyles[status],
                        transition: "transform 300ms ease",
                      }}
                      ref={nodeRef}
                    >
                      <WarningAmberIcon color="warning"></WarningAmberIcon>
                      <div className="snackbar-message">
                        <p className="snackbar-title">Thông báo</p>
                        <p className="snackbar-description">
                          Bạn vẫn chưa chọn sản phẩm nào
                        </p>
                      </div>
                      <CloseIcon
                        onClick={handleCloseFail}
                        className="snackbar-close-icon"
                      />
                    </SnackbarContent>
                  )}
                </Transition>
              </StyledSnackbar>
            </React.Fragment>
          </Typography>
        </Box>
        <Box
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          flexWrap="wrap"
          display="flex"
          minHeight={"200px"}
          justifyContent="space-between"
          bgcolor={"#f7f8fc"}
          gap="20px"
          p={5}
          mb={3}
          borderRadius={"10px"}
        >
          <Box gridColumn="span 5" gridRow="span 2">
            <Box>
              <Typography
                sx={{ color: "black", fontWeight: "600", fontSize: "1rem" }}
              >
                Danh sách khách hàng
              </Typography>

              <Button
                sx={{ fontSize: ".9rem" }}
                variant="outlined"
                onClick={handleClickOpen}
              >
                Chọn khách hàng
              </Button>

              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: ".9rem",
                  color: `${selectedValue ? "green" : "grey"}`,
                }}
                component="div"
              >
                {selectedValue
                  ? `   Đã chọn : ${selectedValue}`
                  : "* Vui lòng chọn mục khách hàng"}
              </Typography>

              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                Emails={stateCustomer}
              />
            </Box>
          </Box>
          <hr></hr>
          <Box gridColumn="span 5" gridRow="span 2">
            <FormControl>
              <FormLabel
                fontWeight="500"
                id="demo-radio-buttons-group-label"
                sx={{ color: "black", fontWeight: "600" }}
              >
                {" "}
                Phương thức thanh toán
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Thanh toán khi nhận hàng"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="NH"
                  control={<Radio />}
                  label={
                    <SpanLable content={"Thanh toán khi nhận hàng"}></SpanLable>
                  }
                />
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label={
                    <SpanLable
                      content={"Thanh toán bằng chuyển khoản"}
                    ></SpanLable>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <hr></hr>
          <Box gridColumn="span 5" gridRow="span 2">
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ color: "black", fontWeight: "600" }}
              >
                {" "}
                Người chịu chi phí vận chuyển
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Thanh toán khi nhận hàng"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="KH"
                  control={<Radio />}
                  label={
                    <SpanLable content={"Khách hàng chịu phí"}></SpanLable>
                  }
                />
                <FormControlLabel
                  value="DL"
                  control={<Radio />}
                  label={<SpanLable content={"Người bán chịu phí"}></SpanLable>}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box minHeight={"1000px"} width={"100%"}>
          <div>
            <FormControlLabel
              label={
                <SpanLable
                  content={"Chọn tất cả sản phẩm"}
                  fontSize={"1rem"}
                  fontWeight={700}
                ></SpanLable>
              }
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
            {children}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CartMB;
