import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Bodyhomepage from "./BodyHomepage";
import Footer from "../footer/footer";
import { useEffect } from "react";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <Bodyhomepage></Bodyhomepage>
      <Footer></Footer>
    </>
  );
};
export default Homepage;
