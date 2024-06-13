import BarChart from "./Barchart";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import * as React from "react";

import { styled } from "@mui/material/styles";

import { useParams } from "react-router-dom";
import { Create_Customer } from "../../services/handleCustomer/handleCustomer";
import { useMutation } from "@tanstack/react-query";
import LinkIcon from "@mui/icons-material/Link";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "@mui/material/Modal";
import {
  GET_ALL_CUSTOMER_BY_ID,
  GET_ALL_CUSTOMER,
} from "../../services/handleCustomer/handleCustomer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 2,
  pt: 2,
  px: 4,
  pb: 3,
};
const Customer = () => {
  const [open, setOpen] = useState(false);
  const [tinh, setTinh] = useState([]);
  const [quan, setQuan] = useState([]);
  const [phuong, setPhuong] = useState([]);
  const [selectedTinh, setSelectedTinh] = useState("");
  const [selectedQuan, setSelectedQuan] = useState("");
  const [selectedPhuong, setSelectedPhuong] = useState("");
  const [errors, seterrors] = useState({});
  const [formCreateCustomer, setFromCreateCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  let nav = useNavigate();
  const Initall = () => {
    setFromCreateCustomer({
      name: "",
      phone: "",
      address: "",
    });
    setTinh([]);
    setQuan([]);
    setPhuong([]);
    setSelectedTinh("");
    setSelectedQuan("");
    setSelectedPhuong("");
    seterrors({});
  };
  const useMutation_CreateCustomer = useMutation({
    mutationFn: (body) => {
      return Create_Customer(body);
    },
  });
  const getAll_Customer = useQuery({
    queryKey: ["get_all_customer"],
    queryFn: async () => {
      const result = await GET_ALL_CUSTOMER();
      return result; // Ensure the result is returned
    },
  });
  const onChange = (e) => {
    console.log("on change ?");
    seterrors({});
    setFromCreateCustomer({
      ...formCreateCustomer,
      [e.target.name]: e.target.value,
    });
  };
  React.useEffect(() => {
    // Lấy danh sách tỉnh thành
    fetch("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((response) => response.json())
      .then((data_tinh) => {
        if (data_tinh.error === 0) {
          setTinh(data_tinh.data);
        }
      });
  }, []);

  React.useEffect(() => {
    if (selectedTinh) {
      // Lấy danh sách quận huyện
      fetch(`https://esgoo.net/api-tinhthanh/2/${selectedTinh}.htm`)
        .then((response) => response.json())
        .then((data_quan) => {
          if (data_quan.error === 0) {
            setQuan(data_quan.data);
            setPhuong([]); // Reset phường/xã khi thay đổi quận/huyện
          }
        });
    }
  }, [selectedTinh]);

  React.useEffect(() => {
    if (selectedQuan) {
      // Lấy danh sách phường xã
      fetch(`https://esgoo.net/api-tinhthanh/3/${selectedQuan}.htm`)
        .then((response) => response.json())
        .then((data_phuong) => {
          if (data_phuong.error === 0) {
            setPhuong(data_phuong.data);
          }
        });
    }
  }, [selectedQuan]);
  const validate = () => {
    const newErrors = {};

    if (!formCreateCustomer.name) {
      newErrors.name = "Name is required";
    }

    if (!formCreateCustomer.phone) {
      newErrors.phone = "phone is required";
    }

    seterrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateCustomer = () => {
    if (validate()) {
      let objectTinh = tinh.filter((item, index) => {
        return item.id === selectedTinh;
      });
      let objectQuan = quan.filter((item, index) => {
        return item.id === selectedQuan;
      });
      let objectPhuong = phuong.filter((item, index) => {
        return item.id === selectedPhuong;
      });

      let FormCreate = {
        name: formCreateCustomer.name,
        address:
          objectTinh[0]?.full_name +
          ", " +
          objectQuan[0]?.full_name +
          ", " +
          objectPhuong[0]?.full_name +
          ", " +
          formCreateCustomer.address,
        phone: formCreateCustomer.phone,
      };
      useMutation_CreateCustomer.mutate(FormCreate, {
        onSuccess: (data) => {
          console.log("data " + JSON.stringify(data));
          if (data?.errors) {
            const newErrors = {};
            newErrors.phone = data?.errors?.phone?.msg;
            console.log(" newErrors.phone " + newErrors.phone);

            console.log("newErrors " + JSON.stringify(newErrors));
            seterrors(newErrors);
          } else {
            alert("Khởi tạo khách hàng thành công");
            Initall();
            setOpen(false);
            getAll_Customer.refetch();
          }
        },
      });
      return;
    }
  };
  return (
    <>
      <Box className="PaddingLRForCustomer" minHeight={"100vh"}>
        {getAll_Customer.isLoading ? (
          <Typography>Đang tải dử liệu....</Typography>
        ) : (
          getAll_Customer.data?.data?.data.map((item, index) => (
            <Box style={{ backgroundColor: "white" }}>
              {/* <Box>
          <BarChart></BarChart>
        </Box> */}

              <Box
                display={"flex"}
                padding={"12px 12px 0px 12px"}
                justifyContent={"space-between"}
                width={"100%"}
                borderBottom={"solid 1px gainsboro"}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  nav(`/cDetails/${item._id}`);
                }}
              >
                <ul style={{ padding: "0px", width: "80%" }}>
                  <li>
                    <Typography
                      fontWeight={700}
                      color={"#607CFB"}
                      fontSize={".7rem"}
                    >
                      <LinkIcon color={"#607CFB"} fontSize="small">
                        {" "}
                      </LinkIcon>{" "}
                      CHƯA LIÊN KẾT
                    </Typography>
                  </li>
                  <li style={{ paddingBottom: "2%" }}>
                    <Typography variant="subtitle1" fontWeight={700}>
                      {item.name}
                    </Typography>
                  </li>
                  <li>
                    <Typography> {item.phone}</Typography>
                  </li>
                  <li>
                    <Typography color={"#607CFB"}> {item.address}</Typography>
                  </li>
                </ul>
                <Box
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                >
                  <Button>
                    <CallIcon fontSize="small"></CallIcon>
                  </Button>

                  <Button>
                    <ShoppingCartIcon fontSize="small"></ShoppingCartIcon>
                  </Button>
                </Box>
              </Box>

              <Box borderBottom={"solid 5px #eeedee"} p={"12px"}>
                <Typography fontSize={".7rem"}>
                  Chưa phát sinh đơn nào
                </Typography>
              </Box>
            </Box>
          ))
        )}

        <Box></Box>
        <Box
          // bgcolor={"white"}
          position={"fixed"}
          bottom={"50px"}
          left={"0%"}
          height={"100px"}
          width={"100%"}
          display={"flex"}
        >
          <Box
            width={"48px"}
            height={"48px"}
            bgcolor={"blue"}
            borderRadius={"100%"}
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
            margin={"auto"}
            boxShadow={5}
            sx={{ cursor: "pointer" }}
            onClick={handleOpen}
          >
            <Typography fontSize={"2rem"} alignSelf={"center"} color={"white"}>
              +
            </Typography>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <Box>
              <Typography mb={3} variant="h5" fontWeight={700}>
                Điền thông tin khách hàng
              </Typography>
              <div class="form-group">
                <TextField
                  fullWidth
                  error={errors.phone ? true : false}
                  sx={{ marginBottom: "2rem" }}
                  id="standard-basic"
                  name="phone"
                  value={formCreateCustomer.phone}
                  onChange={onChange}
                  type="number"
                  label="Số điện thoại khách hàng"
                  variant="standard"
                  helperText={errors.phone}
                />
                <TextField
                  fullWidth
                  error={errors.name ? true : false}
                  sx={{ marginBottom: "2rem" }}
                  id="standard-basic"
                  name="name"
                  value={formCreateCustomer.name}
                  onChange={onChange}
                  label="Họ tên khách hàng"
                  variant="standard"
                  helperText={errors.name}
                />
                <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
                  <InputLabel id="lableTinh">Tĩnh</InputLabel>
                  <Select
                    labelId="lableTinh"
                    label="Tỉnh"
                    id="tinh"
                    name="tinh"
                    value={selectedTinh}
                    onChange={(e) => setSelectedTinh(e.target.value)}
                  >
                    {tinh.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {" "}
                        {item.full_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
                  <InputLabel id="lableQuan">Quận</InputLabel>
                  <Select
                    labelId="lableQuan"
                    label="Quận"
                    id="quan"
                    name="quan"
                    value={selectedQuan}
                    disabled={!selectedTinh}
                    onChange={(e) => setSelectedQuan(e.target.value)}
                  >
                    {quan.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {" "}
                        {item.full_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
                  <InputLabel id="lablePhuong">Phường</InputLabel>
                  <Select
                    labelId="lablePhuong"
                    label="Phường"
                    id="phuong"
                    name="phuong"
                    title="Chọn Phường Xã"
                    value={selectedPhuong}
                    disabled={!selectedQuan}
                    onChange={(e) => setSelectedPhuong(e.target.value)}
                  >
                    {phuong.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {" "}
                        {item.full_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  sx={{ marginBottom: "2rem" }}
                  id="standard-basic"
                  name="address"
                  label="Số nhà tên đường"
                  variant="standard"
                  onChange={onChange}
                />
              </div>
              <Box width={"100%"}>
                <button
                  style={{ width: "100%" }}
                  class="btn btn-primary"
                  onClick={handleCreateCustomer}
                >
                  Khởi tạo
                </button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};
export default Customer;
