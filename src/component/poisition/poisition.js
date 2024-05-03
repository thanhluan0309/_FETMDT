import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import PLeftcontent from "./pLeftcontent";
import { useState, useEffect } from "react";
import Arry from "./data";
import { useRef } from "react";
const Poisiton = () => {
  const targetRef = useRef(null);

  const [position, setposition] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1126483903968!2d106.71300847583848!3d10.80268355870719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b3720eb2c7%3A0xfcc4656f9f00a510!2sPHOTO%20TIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704443668606!5m2!1sen!2s"
  );
  const [Stateposition, setstatePosition] = useState();

  const [StateShow, setstateShow] = useState(Arry);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handlechangemap = (name) => {
    setposition(name);
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const finLocationSelect = (array, name) => {
    return array.find(
      (locate) => locate.id.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSearch = (event) => {
    const filteredData = Stateposition.filter((user) =>
      user.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setstateShow(filteredData);
  };
  const handleSelectChange = (event) => {
    // Lấy giá trị được chọn và cập nhật state
    if (event.target.value !== "ALL") {
      const t = finLocationSelect(Stateposition, event.target.value);
      const arryget = [
        {
          id: t.id,
          title: t.title,
          img: t.img,
          name: t.name,
          p: t.p,
        },
      ];

      setstateShow(arryget);
    } else {
      setstateShow(Arry);
    }
  };
  useEffect(
    () => {
      setstatePosition(Arry);
    },
    [position],
    [Stateposition]
  );

  return (
    <>
      <Navbar></Navbar>
      <div style={{ color: "#d2a264" }} className="titlep cssresponetitle">
        <span className="animate-text cssresponeanimate-text">
          <span>CÁC&nbsp;</span>
          <span>CHI&nbsp;</span>
          <span>NHÁNH&nbsp;</span>
          <span>CỦA&nbsp;</span>
          <span>CỬA&nbsp;</span>
          <span>HÀNG&nbsp;</span>
        </span>
      </div>
      <div class="search-container">
        <input
          type="text"
          id="searchInput"
          onChange={handleSearch}
          class="search-input"
          placeholder="Nhập từ khóa..."
        />
        <select
          id="location"
          onChange={handleSelectChange}
          class="select-input"
        >
          <option value="CHINH">PHOTO TIME - Selft studio</option>
          <option value="Q7">PHOTO TIME CRESCENT MALL</option>
          <option value="VHM">PHOTO TIME VẠN HẠNH MALL</option>
          <option value="Cinestar">Cinestar Cinema QUỐC THANH</option>
          <option value="THISO">Thiso Mall Sala</option>
          <option value="GIGAMALL">GIGAMALL THỦ ĐỨC</option>
          <option value="VINCOMTD">VINCOM PLAZA THỦ ĐỨC</option>
          <option value="LOTTE">Lotte Mall Tây Hồ</option>
          <option value="HUNGVUONG">HÙNG VƯƠNG PLAZA</option>
          <option value="MANGO">Mango Vincom Megamall Royal City</option>
          <option value="THELOOP">TRUNG TÂM THƯƠNG MẠI THE LOOP</option>
          <option value="ALL">-------------SHOW ALL-------------</option>
        </select>
      </div>
      <div class="row" style={{ marginLeft: "0%" }}>
        <div style={{ marginBottom: "3%" }} class="col-6 pLeftcontent">
          <ul class="nav flex-column nav-pills" role="tablist">
            {StateShow &&
              StateShow.map((value) => (
                <li
                  style={{ marginBottom: "10%", marginRight: "2%" }}
                  id={value.id}
                  class="nav-item"
                >
                  <div class="card-deck" style={{ width: "375px" }}>
                    <div class="card">
                      <img
                        height={166}
                        class="card-img-top"
                        src={value.img}
                        style={{ height: "166px" }}
                        alt=""
                      />
                      {/* <div class="card-body" >
                        <h5 class="card-title"> {value.title}</h5>

                        <p class="card-text">{value.name}</p>
                        <a
                          onClick={() => handlechangemap(value.p)}
                          class="btn btn-primary"
                        >
                          <i class="fa-solid fa-diamond-turn-right"></i> Chỉ
                          đường
                        </a>
                      </div> */}

                      <div class="card-body" style={{ height: "160px" }}>
                        <h5 class="card-title cssContentTitleMap">
                          {value.title}6{" "}
                        </h5>

                        <p class="card-text cssContentMap">{value.name}</p>
                      </div>
                      <div class="card-footer text-muted">
                        {" "}
                        <a
                          onClick={() => handlechangemap(value.p)}
                          class="btn btn-primary"
                        >
                          <i class="fa-solid fa-diamond-turn-right"></i> Chỉ
                          đường
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div ref={targetRef} class="col-12 responeMobieMap">
          <div class="tab-content">
            <iframe
              src={position}
              width="100%"
              height="100%"
              className="responeMobieMap-iframe"
              style={{
                backgroundSize: "contain",
                height: "700px",
                width: "99%",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Poisiton;
