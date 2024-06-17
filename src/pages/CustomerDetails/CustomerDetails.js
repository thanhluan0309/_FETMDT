import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import * as React from "react";
import { useParams } from "react-router-dom";
import { Create_Customer } from "../../services/handleCustomer/handleCustomer";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import thư viện
import {
  GET_ALL_CUSTOMER_BY_ID,
  GET_ALL_CUSTOMER,
  Update_Customer,
  Delete_Customer,
} from "../../services/handleCustomer/handleCustomer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CircularProgress from "@mui/material/CircularProgress";
const CustomerDetails = () => {
  const [errors, seterrors] = useState({});
  const [formEditStart, setFormEditStart] = useState({});
  const [formEdit, setFormEdit] = useState({});
  const [isloading, setIsloading] = useState(false);
  const { customerid } = useParams();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let nav = useNavigate();

  const useMutation_Update_Customer = useMutation({
    mutationFn: (body) => {
      return Update_Customer(body);
    },
  });
  const useMutation_Detete = useMutation({
    mutationFn: (body) => {
      return Delete_Customer(body);
    },
  });

  const get_Customer = useQuery({
    queryKey: ["GET_CUSTOMER"],
    queryFn: async () => {
      const result = await GET_ALL_CUSTOMER_BY_ID({
        id: customerid,
      });

      if (result?.data) {
        setFormEdit(result?.data?.data);
        setFormEditStart(result?.data?.data);
      } else {
        nav("/customer");
      }

      return result; // Ensure the result is returned
    },
  });
  function getDifferentProperties(obj1, obj2) {
    const result = {};
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        result[key] = obj1[key];
      }
    }
    return result;
  }
  const validate = () => {
    const newErrors = {};

    if (!formEdit.name) {
      newErrors.name = "Name is required";
    }

    if (!formEdit.phone) {
      newErrors.phone = "phone is required";
    }

    if (!formEdit.address) {
      newErrors.address = "address is required";
    }

    seterrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleUpdate = () => {
    if (validate()) {
      setIsloading(true);
      let differentProperties = getDifferentProperties(formEdit, formEditStart);
      differentProperties = {
        ...differentProperties,
        _id: customerid,
      };
      useMutation_Update_Customer.mutate(differentProperties, {
        onSuccess: (data) => {
          if (data?.errors) {
            const newErrors = {};
            newErrors.phone = data?.errors?.phone?.msg;
            seterrors(newErrors);
          } else {
            alert("Cập nhật thành công");
            get_Customer.refetch();
          }
          setIsloading(false);
        },
        onError: (err) => {
          console.log("error rồi");
          setIsloading(false);
        },
      });
    }
  };
  const handleDelete = () => {
    confirmAlert({
      title: "Xác nhận xoá",
      message: "Bạn có chắc là xoá dử liệu này chứ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            useMutation_Detete.mutate(formEditStart, {
              onSuccess: (data) => {
                alert("Đã xoá dử liệu khách hàng này");
                nav("/customer");
              },
            });
          },
        },
        {
          label: "No",
          onClick: () => alert("Canceled"),
        },
      ],
    });
  };
  const onChange = (e) => {
    console.log("on change ?");
    seterrors({});
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box className="PaddingLRForCustomerDetails" minHeight={"100vh"}>
        {get_Customer.isLoading ? (
          <h5>Đang tải dử liệu....</h5>
        ) : (
          <>
            {" "}
            <Box
              display={"flex"}
              width={"100%"}
              alignItems={"center"}
              height={"80px"}
              p={1}
              borderBottom={"solid 10px #eeedee"}
            >
              <ArrowBackIcon
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  nav("/customer");
                }}
              ></ArrowBackIcon>
              <Typography ml={1} fontWeight={700}>
                Thông tin khách hàng
              </Typography>{" "}
            </Box>
            <Box style={{ backgroundColor: "white" }}>
              <Box
                display={"flex"}
                padding={"12px 12px 0px 12px"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <form className="formCss" style={{ width: "100%" }}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Họ và Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="name"
                      onChange={onChange}
                      value={formEdit?.name || ""}
                      placeholder="Nhập họ và tên của bạn"
                    />
                    <Typography fontSize={".8rem"} color={"red"}>
                      {errors.name}
                    </Typography>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">
                      Số điện thoại
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput2"
                      name="phone"
                      onChange={onChange}
                      value={formEdit?.phone || ""}
                      placeholder="Nhập số điện thoại của bạn"
                    />
                    <Typography fontSize={".8rem"} color={"red"}>
                      {errors.phone}
                    </Typography>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Địa chỉ</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="address"
                      onChange={onChange}
                      value={formEdit?.address || ""}
                      placeholder="Nhập địa chỉ của bạn"
                    ></textarea>
                    <Typography fontSize={".8rem"} color={"red"}>
                      {errors.address}
                    </Typography>
                  </div>
                </form>
              </Box>

              <Box
                display={"flex"}
                borderBottom={"solid 5px #eeedee"}
                mt={3}
                p={"12px"}
              >
                <ShoppingCartCheckoutIcon
                  color={"#5C6366"}
                ></ShoppingCartCheckoutIcon>
                <Typography
                  variant="subtitle2"
                  ml={1}
                  fontWeight={600}
                  fontSize={"1rem"}
                  color={"#5C6366"}
                >
                  Chưa phát sinh đơn nào
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} height={"100px"}>
              <Stack
                margin={"auto"}
                justifyContent={"space-evenly"}
                width={"100%"}
                spacing={2}
                direction="row"
              >
                {isloading ? (
                  <Button
                    variant="outlined"
                    sx={{ display: "flex" }}
                    color="warning"
                  >
                    <CircularProgress />
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={handleUpdate}
                    color="warning"
                  >
                    Xác nhận điều chỉnh
                  </Button>
                )}

                <Button variant="outlined" onClick={handleDelete} color="error">
                  Xoá
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
export default CustomerDetails;
