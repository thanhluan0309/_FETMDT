import React, { useState, useEffect } from "react";
import BackdropGallery from "./BackdropGallery";

import prod1 from "../Pictures/image-product-1.jpg";
import prod2 from "../Pictures/image-product-2.jpg";
import prod3 from "../Pictures/image-product-3.jpg";
import prod4 from "../Pictures/image-product-4.jpg";

import thumb1 from "../Pictures/image-product-1-thumbnail.jpg";
import thumb2 from "../Pictures/image-product-2-thumbnail.jpg";
import thumb3 from "../Pictures/image-product-3-thumbnail.jpg";
import thumb4 from "../Pictures/image-product-4-thumbnail.jpg";

// const IMAGES = [prod1, prod2, prod3, prod4];
// const THUMBS = [prod1, prod2, prod3, prod4];

const Gallery = ({ IMAGES = [], THUMBS = [], stateProduct }) => {
  const initialImage = IMAGES[0]?.path || "";
  const initialThumbs = THUMBS[0]?.path || "";
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [currentPassedImage, setCurrentPassedImage] = useState(initialThumbs);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    console.log("index " + index);
    console.log("IMAGES[index]?.path " + IMAGES[index]?.path);
    setCurrentImage(IMAGES[index]?.path);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };
  useEffect(() => {
    setCurrentPassedImage(currentImage);
  }, [currentImage]);

  return (
    <section className="gallery-holder hide-in-mobile">
      <section style={{ backgroundColor: "white" }} className="gallery">
        <div className="image">
          <img src={currentImage} alt="product-1" onClick={handleToggle} />
        </div>
        <BackdropGallery
          handleClose={handleClose}
          open={open}
          currentPassedImage={currentPassedImage}
        />
        <div className="thumbnails">
          {THUMBS &&
            THUMBS.map((th, index) => {
              return (
                <div
                  className="img-holder"
                  key={index}
                  onClick={(e) => {
                    handleClick(index);
                    removeActivatedClass(e.currentTarget.parentNode);
                    e.currentTarget.childNodes[0].classList.toggle("activated");
                  }}
                >
                  <div className={`outlay ${index === 0 && "activated"}`}></div>
                  <img src={th.path} alt={`product-${index + 1}`} />
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default Gallery;
