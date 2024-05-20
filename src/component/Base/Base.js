import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import React from "react";
import { useState } from "react";
import { Container } from "@mui/material";
const Base = ({ children }) => {
  const [dataFromProduct, setDataFromProduct] = useState(null);

  const handleDataFromProduct = (data) => {
    setDataFromProduct(data);
  };
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { sendDataToBase: handleDataFromProduct })
  );
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          paddingBottom: "50px",
          padding: "0px",
        }}
        className="container"
      >
        <Navbar
          onOrderedQuant={dataFromProduct?.onOrderedQuant || 0}
          onReset={dataFromProduct?.onReset || null}
        ></Navbar>

        {childrenWithProps}

        <Footer></Footer>
      </div>
    </>
  );
};

export default Base;
