import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";
import Imgp1 from "../../imgProduct/p1.jpg";
import Imgp2 from "../../imgProduct/p6.jpg";

import Imgp3 from "../../imgProduct/p4 (1).jpg";
function UncontrolledExample() {
  return (
    <Carousel style={{ margin: "auto", width: "50%" }} fade>
      <Carousel.Item interval={700} touch={true}>
        <img className="responeIMG" src={Imgp1} style={{ width: "100%" }} height={1600}></img>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700} touch={true}>
        <img className="responeIMG" src={Imgp2} style={{ width: "100%" }} height={1600}></img>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700} touch={true}>
        <img className="responeIMG" src={Imgp3} style={{ width: "100%" }} height={1600}></img>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
