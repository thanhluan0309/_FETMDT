import { IconButton } from "@mui/material";
import React, { useState } from "react";

import prod1 from "../Pictures/image-product-1.jpg";
import prod2 from "../Pictures/image-product-2.jpg";
import prod3 from "../Pictures/image-product-3.jpg";
import prod4 from "../Pictures/image-product-4.jpg";
import NextIcon from "./Icons/NextIcon";
import PreviousIcon from "./Icons/PreviousIcon";

const MobileGallery = ({ IMAGES = [], THUMBS = [], stateProduct }) => {
  const initialImage = IMAGES[0]?.path;

  const [currentMobileImage, setCurrentMobileImage] = useState(initialImage);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);

  const handleIncrement = () => {
    if (mobileImageIndex === IMAGES.length - 1) {
      setCurrentMobileImage(initialImage || IMAGES[0]?.path);
      setMobileImageIndex(0);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex + 1]?.path);
      setMobileImageIndex(mobileImageIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (mobileImageIndex === 0) {
      setCurrentMobileImage(IMAGES[IMAGES.length - 1]?.path);
      setMobileImageIndex(IMAGES.length - 1);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex - 1]?.path);
      setMobileImageIndex(mobileImageIndex - 1);
    }
  };

  return (
    <section className="mobile-gallery hide-in-desktop">
      <IconButton
        className="icon-button-prev"
        disableRipple
        onClick={handleDecrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        <PreviousIcon />
      </IconButton>
      <img src={currentMobileImage} alt="featured-product" />
      <IconButton
        className="icon-button-next"
        disableRipple
        onClick={handleIncrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        <NextIcon />
      </IconButton>
    </section>
  );
};

export default MobileGallery;
