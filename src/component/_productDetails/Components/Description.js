import CartIcon from "./Icons/CartIcon";
import QuantityButton from "./QuantityButton";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
 
  return (
    <section className="description">
      <p className="pre">sneaker company</p>
      <h1>fall limited edition sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <div className="main-tag">
          <p>12000</p>
          <p>50%</p>
        </div>
        <s>$250.00</s>
        <Typography className="text-secondary">Đã bán 236,453</Typography>
      </div>
      <Box className="text-primary cssforloi">Số tiền lợi nhuận: 12.000đ</Box>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
      <Box width={"100%"}>
        <React.Fragment>
          <Button onClick={handleOpen}>Tạo Đơn</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 200 }}>
              <h2 id="child-modal-title">Text in a child modal</h2>
              <p id="child-modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Button onClick={handleClose}>Thoát</Button>
            </Box>
          </Modal>
        </React.Fragment>
      </Box>
    </section>
  );
};

export default Description;
