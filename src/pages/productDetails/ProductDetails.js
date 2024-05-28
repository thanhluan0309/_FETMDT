import Navbar from "../../component/Navbar/navbar";

import Footer from "../../component/Footer/footer";
import * as React from "react";
import { useParams, useLocation } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Images as images } from "./mockdata";
import "./App.css";
import { Container } from "@mui/material";
import { useEffect } from "react";
import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";
import { mockdataProduct } from "../../data/data";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductDetails = ({ sendDataToBase }) => {
  const [stateProduct, setStateproduct] = React.useState({});
  const { productid } = useParams();
  const [quant, setQuant] = React.useState(0);
  const [orderedQuant, setOrderedQuant] = React.useState(0);
  let { id } = useParams();
  let query = useQuery();
  let utmSource = query.get("utm_source");
  let utmCampaign = query.get("utm_campaign");
  let utmContent = query.get("utm_content");
  useEffect(() => {
    // Giả sử chúng ta có một số dữ liệu cần gửi lên Base
    let getonOrderedQuant = orderedQuant || 0;
    let getFonReset = resetQuant || null;
    const data = {
      onOrderedQuant: getonOrderedQuant,
      onReset: getFonReset,
    };
    sendDataToBase(data);
    if (mockdataProduct) {
      let product = mockdataProduct.filter((item) => item.id === productid);
      setStateproduct(product[0]);
      console.log("product get " + JSON.stringify(product));
    }
    window.scrollTo(0, 0);
  }, [orderedQuant]);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <main className="App">
        {/* <div>
          <h1>Item Page</h1>
          <p>ID: {id}</p>
          <p>UTM Source: {utmSource}</p>
          <p>UTM Campaign: {utmCampaign}</p>
          <p>UTM Content: {utmContent}</p>
        </div> */}
        <Container
          style={{ backgroundColor: "white", padding: "0px" }}
          component="section"
          maxWidth={"lg"}
        >
          {/* <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} /> */}
          <section style={{ backgroundColor: "white" }} className="core">
            <Gallery IMAGES={stateProduct.image} THUMBS={stateProduct.image} />
            <MobileGallery
              IMAGES={stateProduct.image}
              THUMBS={stateProduct.image}
            />
            <Description
              onQuant={quant}
              onAdd={addQuant}
              onRemove={removeQuant}
              onSetOrderedQuant={setOrderedQuant}
              stateProduct={stateProduct}
            />
          </section>
        </Container>
      </main>
    </>
  );
};
export default ProductDetails;
