import * as React from "react";
import { DataGrid } from "@mui/x-data-grid/";
import { GridToolbar } from "@mui/x-data-grid";
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
import { styled } from "@mui/system";
import { mockdataProduct } from "../../data/data";
const OrderPC = ({ stateCustomer }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
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
  return (
    <>
      <Box className="hide-in-mobile" pl={2} pr={2}>
        <Box>
          <Typography mt={3} mb={3} variant="h5" fontWeight={600}>
            Quản lý giỏ hàng
          </Typography>
        </Box>
        <Box mb={3}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <th>Số lượng mặt hàng : 3</th>
                <th>Tổng số tiền thanh toán : 2,000,000 đ</th>
                <th
                  style={{
                    backgroundColor: "green",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Button
                    size="large"
                    sx={{ color: "white", fontWeight: "700" }}
                  >
                    Mua hàng
                  </Button>
                </th>
              </tr>
            </thead>
          </table>
        </Box>
        <Box
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          flexWrap="wrap"
          display="flex"
          minHeight={"200px"}
          justifyContent="space-between"
          bgcolor={"#eeedee"}
          gap="20px"
          p={5}
          mb={3}
          borderRadius={"10px"}
        >
          <Box gridColumn="span 5" gridRow="span 2">
            <Box>
              <Typography variant="inherit" fontWeight="600">
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
          <Box gridColumn="span 5" gridRow="span 2">
            <Box borderLeft={"1px solid"} width={"10px"}></Box>
            <FormControl>
              <FormLabel
                variant="inherit"
                fontWeight="700"
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
          <Box gridColumn="span 5" gridRow="span 2">
            <FormControl>
              <FormLabel
                variant="inherit"
                fontWeight="700"
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
          {" "}
          <div style={{ height: 800, overflow: "scroll", width: "100%" }}>
            <DataGrid
              rows={mockdataProduct}
              columns={isMobile ? mobileColumns : columns}
              components={{
                Toolbar: GridToolbar,
              }}
              rowHeight={isMobile ? 100 : 150} // Giảm chiều cao hàng trên mobile
              checkboxSelection
              autoHeight={isMobile} // Tự động chiều cao trên mobile
              hideFooter={isMobile} // Ẩn footer trên mobile
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default OrderPC;
