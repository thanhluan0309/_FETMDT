import Axios from "axios";
import api from "../common/apis";
export const HandleLogin = async (req) => {
  try {
    const res = await api.post(
      `/auth/login`,
      {
        email: req.email,
        password: req.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
export const Handle_Check_User = async (req) => {
  try {
    const res = await api.post(
      `/auth/check-seller`,
      {
        identifier: req.identifier,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

export const HandleRegister = async (req) => {
  try {
    const res = await api.post(
      `/auth/register`,
      {
        name: req.name,
        phone: req.phone,
        email: req.email,
        date_of_birth: req.date_of_birth,
        address: req.address,
        password: req.password,
        confirm_password: req.confirm_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          // Thêm các header khác nếu cần
          // 'Authorization': `Bearer ${yourAccessToken}`,
        },
      }
    );

    return res.data;
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

export const HandleRegister_By_ref = async (req) => {
  try {
    const res = await api.post(
      `/auth/registry?ref=${req.userid}`,
      {
        name: req.name,
        phone: req.phone,
        email: req.email,
        date_of_birth: req.date_of_birth,
        address: req.address,
        password: req.password,
        confirm_password: req.confirm_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          // Thêm các header khác nếu cần
          // 'Authorization': `Bearer ${yourAccessToken}`,
        },
      }
    );

    return res.data;
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
