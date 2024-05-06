import Navbar from "../_productDetails.js/Components/Navbar";
import Footer from "../Homepage2/footer";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useNavigate } from "react-router-dom";
import "./style.css"
const Product = () => {
  let nav = useNavigate();
  return (
    <>
      <div
        style={{ backgroundColor: "white", padding: "0px" }}
        className="container"
      >
        <Navbar></Navbar>
      </div>
      <div style={{ backgroundColor: "white" }} className="container">
        <div className="col-12 ">
          <img
            className="bgtitle"
            src="https://img.pikbest.com/png-images/20211011/startup-managers-presenting-and-analyzing-sales-growth-chart_6143677.png!bw700"
          ></img>
        </div>
        <div class="  col-12">
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5" fontWeight={600}>
              Các nhãn hàng
            </Typography>
          </Box>
        </div>
        <div style={{ overflowX: "scroll", display: "flex" }} class="  col-12">
          {[...Array(10)].map((_, index) => (
            <Box p={2}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                textAlign={"center"}
                alignItems={"center"}
              >
                Nội dung 1
              </Typography>
            </Box>
          ))}
        </div>

        <Box display={"flex"} p={4}>
          <Typography
            fontStyle={"italic"}
            color={"blue"}
            style={{ textDecoration: "underline", margin: "auto" }}
          >
            Xem tất cả
          </Typography>
        </Box>
        <div class=" pt-1 pb-1  col-12">
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5" fontWeight={600}>
              Dành cho bạn
            </Typography>
            <FormControlLabel
              sx={{
                display: "block",
              }}
              control={<Switch name="loading" color="primary" />}
              label="Thông báo"
            />
          </Box>
        </div>
        <div style={{ overflowX: "scroll" }} class="  col-12">
          <div
            style={{ margin: "auto", marginLeft: "0%" }}
            className=" d-flex col-10 pt-3 pb-3"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
          </div>
        </div>
        <div style={{ overflowX: "scroll" }} class="d-flex  pb-3  col-12">
          <div
            style={{ margin: "auto", marginLeft: "0%", marginLeft: "0%" }}
            className=" d-flex col-10 pt-3 pb-3"
          >
            <Stack direction="row" spacing={1}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </div>
        </div>
        <Box mt={15} gridColumn="span 7">
          <Typography p="15px" variant="inherit" fontWeight="600">
            Hoạt động thành viên
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              mt="5px"
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 9, md: 12 }}
            >
              {Array.from(Array(9)).map((_, index) => (
                <Grid display={"flex"} xs={2} sm={4} md={4} key={index}>
                  <Card
                    style={{ margin: "auto", cursor: "pointer" }}
                    sx={{ maxWidth: 345 }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaU53EKL2Lsco4UnmiuPpQh4vqVvdgho9HoVFAw--mw&s"
                      onClick={() => {
                        nav(`/pDetails/${index}`);
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Box display="flex">
                          <Avatar></Avatar>
                          <Box display="flex" alignItems="center" ml="12px">
                            {" "}
                            <Typography>Lizard</Typography>
                          </Box>
                        </Box>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions justifyContent="space-between" display="flex">
                      <Box display="flex">
                        <Button size="small">
                          <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                        </Button>
                        <Typography
                          ml="-12px"
                          display="flex"
                          alignItems="center"
                        >
                          0
                        </Typography>
                      </Box>

                      <Box display="flex">
                        <Button size="small">
                          <ChatIcon></ChatIcon>
                        </Button>
                        <Typography
                          ml="-12px"
                          display="flex"
                          alignItems="center"
                        >
                          0
                        </Typography>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <div style={{ padding: 0 }} className="container">
          <Box mt={15}>
            {" "}
            <Footer></Footer>
          </Box>
        </div>
      </div>
    </>
  );
};
export default Product;
