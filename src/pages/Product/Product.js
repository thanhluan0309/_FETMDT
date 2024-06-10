import ProductPC from "./ProductPC";
import ProductMB from "./ProductMB";
import "./App.css";
import { GET_ALL_PRODUCT } from "../../services/handleProduct/handleProduct";
import { useQuery } from "@tanstack/react-query";
const Product = () => {
  const DataAllProduct = useQuery({
    queryKey: ["GetAllProduct", 1],
    queryFn: async () => {
      const result = await GET_ALL_PRODUCT({
        page: 1,
        limit: 30,
      });
      return result; // Ensure the result is returned
    },
  });
  let newArrayFillterDetroy = DataAllProduct.data?.data?.data?.products
    .map((item, index) => {
      return {
        ...item,
        id: item._id,
      };
    })
    .filter((item) => item.destroy === 0);
  return (
    <>
      {/* <ProductPC
        stateProduct={newArrayFillterDetroy || []}
        Isloading={DataAllProduct.isLoading}
      ></ProductPC> */}
      <ProductMB
        stateProduct={newArrayFillterDetroy || []}
        Isloading={DataAllProduct.isLoading}
      ></ProductMB>
    </>
  );
};
export default Product;
