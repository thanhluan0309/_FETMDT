import Navbar from "./Components/Navbar";
import NavbarO from "../_navbar/navbar";
import Footer from "../Homepage2/footer";
import { Box } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { Images as images } from "./mockdata";

import "./App.css";
import { Container } from "@mui/material";

import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";

const ProductDetails = () => {
  const [quant, setQuant] = React.useState(0);
  const [orderedQuant, setOrderedQuant] = React.useState(0);

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
  const { productid } = useParams();
  return (
    <>
      <main className="App">
        <Container
          style={{ backgroundColor: "white", padding: "0px" }}
          component="section"
          maxWidth={"lg"}
        >
          <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} />
          <section style={{ backgroundColor: "white" }} className="core">
            <Gallery />
            <MobileGallery />
            <Description
              onQuant={quant}
              onAdd={addQuant}
              onRemove={removeQuant}
              onSetOrderedQuant={setOrderedQuant}
            />
          </section>
          <Footer></Footer>
        </Container>
      </main>
    </>
  );
};
export default ProductDetails;
