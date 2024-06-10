import api from "../common/apis";
export const Create_Customer = async (req) => {
  try {
    const respod = await api.post(`/sellers/customers`, req, {
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần
        Authorization: `Bearer ${localStorage.getItem("tk")}`,
      },
    });

    return respod.data;
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

export const GET_ALL_CUSTOMER = async (req) => {
  try {
    const res = await api.get(`/sellers/customers`);
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

export const GET_ALL_CUSTOMER_BY_ID = async (req) => {
  try {
    const res = await api.get(`/sellers/customers/${req.id}`);
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
export const Update_Customer = async (req) => {
  try {
    const respod = await api.put(`/sellers/customers/${req._id}`, req, {
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return respod.data;
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
export const Delete_Customer = async (req) => {
  try {
    const respod = await api.delete(`/sellers/customers/${req._id}`, {
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return respod.data;
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
