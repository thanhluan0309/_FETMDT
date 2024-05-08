import Navbar from "./Components/Navbar";
import Footer from "../Homepage2/footer";
import * as React from "react";
import { useParams } from "react-router-dom";
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




const ProductDetails = () => {

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
