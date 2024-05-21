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

const OrderMB = ({ stateCustomer }) => {
  const [value1, setValue1] = React.useState(20);
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
          </Box>
          <ListItemText>
            <Button>Xoá</Button>
          </ListItemText>
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
  return (
    <>
      <Box className="hide-in-desktop">
        <Box mt={3} mb={3}>
          <Typography variant="h7" fontWeight={700}>
            Quản lý giỏ hàng
          </Typography>
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
            <Button sx={{ backgroundColor: "orangered", color: "white" }}>
              Mua hàng (9)
            </Button>
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
                variant="inherit"
                sx={{ color: "black", fontWeight: "600" }}
              >
                Danh sách khách hàng
              </Typography>

              <Button variant="outlined" onClick={handleClickOpen}>
                Chọn khách hàng
              </Button>

              <Typography
                variant="subtitle1"
                sx={{ color: `${selectedValue ? "green" : "grey"}` }}
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
                  label="Thanh toán khi nhận hàng"
                />
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label="Thanh toán bằng chuyển khoản"
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
                  label="Khách hàng chịu phí"
                />
                <FormControlLabel
                  value="DL"
                  control={<Radio />}
                  label="Người bán chịu phí"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box minHeight={"1000px"} width={"100%"}>
          <div>
            <FormControlLabel
              label="Chọn tất cả sản phẩm"
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

export default OrderMB;
