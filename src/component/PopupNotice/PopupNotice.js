import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../assets/css/styles.css";
const PopupNotice = () => {
  return (
    <div id="popup" class="popup">
      <div class="popup-content">
        <button
          onClick={() => {
            document.getElementById("popup").style.display = "none";
          }}
          class="close-button"
        >
          &times;
        </button>
        <Box>
          <Typography variant="h3" fontWeight={600} color={"green"}>
            Droppi
          </Typography>
          <Typography mt={2} variant="h5">
            Chào mừng đến với Sàn giao dịch
          </Typography>
          <Typography>Nền thảng hổ trợ Kinh Doanh Online</Typography>
          <Typography mt={2}>
            Tải khoản của bạn đang là<bold> tài khoảng dùng thử</bold>, một số
            tính năng sẽ bị hạn chế và sẽ sớm hết hạn. Hãy nâng cấp tài khoản
            ngay để cùng kinh doanh nhé!
          </Typography>
        </Box>

        <Box
          flexWrap="wrap"
          display="flex"
          justifyContent="space-evenly"
          gap="20px"
          mt={2}
        >
          <Box width={"100%"} display={"flex"} gridRow="span 1">
            <button
              className="btn btn-light "
              style={{ width: "100%", margin: "auto" }}
              onClick={() => {
                document.getElementById("popup").style.display = "none";
              }}
            >
              Để sau
            </button>
          </Box>

          <Box width={"100%"} display={"flex"} gridRow="span 1">
            <button
              className="btn btn-success "
              style={{ width: "100%", margin: "auto" }}
            >
              Nâng cấp ngay
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PopupNotice;
