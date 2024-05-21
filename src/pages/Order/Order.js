import OrderPC from "./OrderPC";
import { Box } from "@mui/material";
import OrderMB from "./OrderMB";
const Order = () => {
  const Emails = ["username@gmail.com", "user02@gmail.com"];
  return (
    <>
      <Box pl={2} pr={2}>
        <OrderPC stateCustomer={Emails}></OrderPC>
        <OrderMB stateCustomer={Emails}></OrderMB>
      </Box>
    </>
  );
};

export default Order;
