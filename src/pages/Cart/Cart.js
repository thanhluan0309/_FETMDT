import CartPC from "./CartPC";
import { Box } from "@mui/material";
import CartMB from "./CartMB";
const Cart = () => {
  const Emails = ["username@gmail.com", "user02@gmail.com"];
  return (
    <>
      <Box pl={2} pr={2}>
        <CartPC stateCustomer={Emails}></CartPC>
        <CartMB stateCustomer={Emails}></CartMB>
      </Box>
    </>
  );
};

export default Cart;
