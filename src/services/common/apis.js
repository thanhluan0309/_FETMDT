import axios from "axios";
import { URL_BACKEND } from "../../contanst/contanst";
import Cookies from "js-cookie";
// Tạo instance Axios

const getCookie = (name) => {
  let cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");

    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
};

const api = axios.create({
  baseURL: `${URL_BACKEND}`, // Đặt base URL cho tất cả các yêu cầu
  withCredentials: true,
});

// Interceptor để thêm authorization header
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token"); // Lấy access token từ localStorage
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
    const rfToken = getCookie("refresh_token");

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Gọi API làm mới token
      const refreshToken = rfToken;
      console.log("get into ");
      if (refreshToken) {
        try {
          const response = await axios.post(
            `${URL_BACKEND}/auth/refresh-token`,
            {
              refresh_token: refreshToken,
            }
          );

          const newAccessToken = response.data; // Lấy token mới
          localStorage.setItem("token", newAccessToken.data.access_token); // Lưu lại token mới
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
