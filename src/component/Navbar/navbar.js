import * as React from "react";

import NavbarTrigger from "../../pages/productDetails/Components/Navbar";

const Navbar = ({ onOrderedQuant, onReset }) => {
  return <NavbarTrigger onOrderedQuant={onOrderedQuant} onReset={onReset} />;
};
export default Navbar;
