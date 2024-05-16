import "./App.css";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Product from "./pages/Product/Product";
import Homepage from "./pages/Homepage/Homepage";
import Auth from "./pages/Auth/Auth";
import ProductDetails from "./pages/productDetails/ProductDetails";

import Customer from "./pages/Customers/Customers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth></Auth>}></Route>
      <Route path="/login" element={<Auth check="login"></Auth>}></Route>
      <Route path="/register" element={<Auth check="register"></Auth>}></Route>
      <Route path="/homepage" element={<Homepage></Homepage>}></Route>
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
