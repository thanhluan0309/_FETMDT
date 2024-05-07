import "./App.css";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Product from "./component/_product/Product";
import Homepage2 from "./component/Homepage2/Homepage2";
import Auth from "./component/Auth/Auth";
import ProductDetails from "./component/_productDetails/ProductDetails";
import Customer from "./component/_customers/Customers";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth></Auth>}></Route>
      <Route path="/login" element={<Auth check="login"></Auth>}></Route>
      <Route path="/register" element={<Auth check="register"></Auth>}></Route>
      <Route path="/homepage" element={<Homepage2></Homepage2>}></Route>
      <Route path="/product" element={<Product></Product>}></Route>
      <Route
        path="/pDetails/:productid"
        element={<ProductDetails></ProductDetails>}
      ></Route>

      <Route path="/customer" element={<Customer></Customer>}></Route>
    </Routes>
  );
}

export default App;
