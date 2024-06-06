import api from "../common/apis";
export const GET_ALL_PRODUCT = async (req) => {
  try {
    const res = await api.get(`/admin/products`, {
      params: {
        page: req.page,
        limit: req.limit,
      },
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error(
        "Server error:",
        error.response.status,
        error.response.data
      );
      return error.response.data;
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};

export const GET_PRODUCT = async (req) => {
  try {
    const res = await api.get(`/admin/products/${req.productID}`);
    return res;
  } catch (error) {
    if (error.response) {
      console.error(
        "Server error:",
        error.response.status,
        error.response.data
      );
      return error.response.data;
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};
