import "./App.css";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import PageContact from "./component/Homepage/Contact/Contact";
import PageAboutUs from "./component/Homepage/About/Aboutus";
import PageProduct from "./component/Homepage/Product/product";
import Homepage from "./component/Homepage/Homepage";
import Intro from "./component/Introduce/Introduce";
import Poisiton from "./component/poisition/poisition";
import Media from "./component/media/media";
import Homepage2 from "./component/Homepage2/Homepage2";

import Auth from "./component/Auth/Auth";
import Dowload from "./component/Homepage/DowloadApp/Dowload";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth></Auth>}></Route>
      <Route path="/login" element={<Auth check="login"></Auth>}></Route>
      <Route path="/register" element={<Auth check="register"></Auth>}></Route>
      <Route path="/homepage" element={<Homepage2></Homepage2>}></Route>

      <Route path="/aboutus" element={<PageAboutUs></PageAboutUs>}></Route>
      <Route path="/dowload" element={<Dowload></Dowload>}></Route>
      <Route path="/contact" element={<PageContact></PageContact>}></Route>
      <Route path="/product" element={<PageProduct></PageProduct>}></Route>
      <Route path="/Poisition" element={<Poisiton></Poisiton>}></Route>
      <Route path="/Intro" element={<Intro></Intro>}></Route>

      <Route path="/sukien" element={<Media></Media>}></Route>
    </Routes>
  );
}

export default App;
