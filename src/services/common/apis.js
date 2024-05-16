import axios from "axios";
import { URL_BACKEND } from "../environment/environment";
// Tạo instance Axios
const api = axios.create({
  baseURL: `${URL_BACKEND}`, // Đặt base URL cho tất cả các yêu cầu
});

// Interceptor để thêm authorization header
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken"); // Lấy access token từ localStorage
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`; // Gán token vào header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để xử lý các phản hồi có lỗi
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("BÈ");
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("AF");
      // Gọi API làm mới token
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await axios.post(
            `${URL_BACKEND}/auth/refresh-token`,
            {
              refreshToken,
            }
          );

          const newAccessToken = response.data.accessToken; // Lấy token mới
          localStorage.setItem("accessToken", newAccessToken); // Lưu lại token mới
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`; // Cập nhật lại headers

          // Thực hiện lại yêu cầu ban đầu
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (err) {
          console.error("Không thể làm mới token:", err.message);
          return Promise.reject(err);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
