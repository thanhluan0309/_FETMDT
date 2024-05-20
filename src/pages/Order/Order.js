import * as React from "react";
import { DataGrid } from "@mui/x-data-grid/";
import { GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Input } from "@mui/material";
const columns = [
  //   { flex: 1, field: "id", headerName: "ID", width: 70 },
  {
    flex: 2,
    field: "firstName",

    headerName: "Sản Phẩm",
    renderCell: ProductCell,
  },
  {
    flex: 1,
    field: "age",
    headerName: "Đơn giá",
  },
  {
    flex: 1,
    field: "lastName",
    headerName: "Số Lượng",
    renderCell: ProductQuantCell,
  },

  {
    flex: 1,
    field: "fullName",
    headerName: "Thao Tác",
    renderCell: ProductTTCell,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
function ProductQuantCell(params) {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button color="secondary"> - </Button>
        <Input style={{ width: "50px" }}></Input>
        <Button color="secondary"> + </Button>
      </ButtonGroup>
    </>
  );
}
function ProductCell(params) {
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
      >
        <img
          height={"200"}
          width={"100"}
          src="https://static.vecteezy.com/system/resources/previews/018/742/214/non_2x/3d-minimal-product-delivery-parcels-transportation-goods-distribution-cargos-preparation-for-sending-cardbox-with-a-wing-3d-rendering-illustration-free-png.png"
        ></img>
        <Typography fontSize={".8rem"} fontWeight={"200"}>
          Tên sản phẩm
        </Typography>
        <Typography ml={2} fontSize={".8rem"} fontWeight={"200"}>
          Loại hàng
        </Typography>
      </Box>
    </>
  );
}
function ProductTTCell(params) {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button color="error">Xoá</Button>
        <Button color="warning">Điều Chỉnh</Button>
      </ButtonGroup>
    </>
  );
}
const Order = () => {
  return (
    <>
      <Box pl={2} pr={2}>
        <Box>
          <Typography mt={3} mb={3} variant="h5" fontWeight={600}>
            Quản lý đơn hàng
          </Typography>
        </Box>
        <Box mb={3}>
          <table style={{ width: "70%" }}>
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
                <th>
                  <Button color="success">Mua hàng</Button>
                </th>
              </tr>
            </thead>
          </table>
        </Box>
        <Box minHeight={"1000px"} width={"100%"}>
          {" "}
          <div style={{ height: 800, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              components={{
                Toolbar: GridToolbar,
              }}
              rowHeight={150}
              checkboxSelection
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Order;
