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
import Base from "./component/Base/Base";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth></Auth>}></Route>
      <Route path="/login" element={<Auth check="login"></Auth>}></Route>
      <Route path="/register" element={<Auth check="register"></Auth>}></Route>
      <Route
        path="/cart"
        element={
          <Base>
            <Cart></Cart>
          </Base>
        }
      ></Route>
      <Route
        path="/order"
        element={
          <Base>
            <Order></Order>
          </Base>
        }
      ></Route>
      <Route
        path="/product"
        element={
          <Base>
            <Product></Product>
          </Base>
        }
      ></Route>

      <Route
        path="/pDetails/:productid"
        element={
          <Base>
            <ProductDetails></ProductDetails>
          </Base>
        }
      ></Route>

      <Route
        path="/customer"
        element={
          <Base>
            <Customer></Customer>
          </Base>
        }
      ></Route>
    </Routes>
  );
}

export default App;
