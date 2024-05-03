import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
const HeadTitle = () => {
  return (
    <>
      <div class="d-flex pt-4 pb-4 mt-5 mb-5 col-12">
        <div style={{ margin: "auto" }} className=" d-flex col-10">
          <button
            type="button"
            class="flex-fill  btn btn-outline-secondary mt-1 ms-1  "
          >
            <LocalFireDepartmentIcon></LocalFireDepartmentIcon> Bão đơn
          </button>
          <button
            type="button"
            class="flex-fill btn btn-outline-secondary  mt-1 ms-1  "
          >
            <AirlineStopsIcon></AirlineStopsIcon> Xếp hạng
          </button>
          <button
            type="button"
            class="flex-fill  btn btn-outline-secondary mt-1 ms-1 "
          >
            <CrisisAlertIcon></CrisisAlertIcon> Khuyễn mãi
          </button>
          
        </div>
      </div>
    </>
  );
};
export default HeadTitle;
