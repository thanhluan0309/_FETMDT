import Axios from "axios";

export const HandleLogin = async (req) => {
  const respod = await Axios.post(
    "https://tmdt3.vercel.app/Auth/Login",
    {
      username: req.username,
      password: req.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần
        // 'Authorization': `Bearer ${yourAccessToken}`,
      },
    }
  );

  return respod.data;
};
export const HandleRegister = async (req) => {
  console.log("req " + JSON.stringify(req));
  const respod = await Axios.post(
    "https://tmdt3.vercel.app/register/",
    {
      name: req.name,
      phone: req.phone,
      mail: req.mail,
      pdate: req.pdate,
      career: req.career,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần
        // 'Authorization': `Bearer ${yourAccessToken}`,
      },
    }
  );

  return respod.data;
};
