import { IconButton } from "@mui/material";
import React from "react";
import thumb1 from "../Pictures/image-product-1-thumbnail.jpg";
import deleteIcon from "../Pictures/icon-delete.svg";

const PRICE = 12000;

const Product = ({ onOrderedQuant, onReset }) => {
  return (
    <div className="product">
      <img src={thumb1} alt="product-thumbnail" />
      <div className="info">
        <p>fall limited edition sneakers</p>
        <div className="price">
          <span>
            {" "}
            {`${PRICE.toLocaleString("en-US")} x ${onOrderedQuant} VND`}{" "}
          </span>
          <span>
            {" "}
            {`${(PRICE * onOrderedQuant).toLocaleString("en-US")} VND`}{" "}
          </span>
        </div>
      </div>
      <IconButton
        className="delete-button"
        size="small"
        disableRipple
        onClick={onReset}
      >
        <img src={deleteIcon} alt="delete-item" />
      </IconButton>
    </div>
  );
};

export default Product;
