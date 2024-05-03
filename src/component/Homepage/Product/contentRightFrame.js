import React, { useEffect, useState } from "react";
import Img from "../../../imgframe/event4C1.png";
import Img1 from "../../../imgframe/event4C2.png";
import Img2 from "../../../imgframe/event4C3.png";
import Img3 from "../../../imgframe/event4C4.png";
import Img4 from "../../../imgframe/event4C5.png";
import Img5 from "../../../imgframe/event4C6.png";
import Img6 from "../../../imgframe/event4C7.png";
import Img7 from "../../../imgframe/event4C8.png";
import Img8 from "../../../imgframe/event4C9.png";
import Img9 from "../../../imgframe/event4C10.png";
import Img10 from "../../../imgframe/event4C11.png";
import Img11 from "../../../imgframe/event4C12.png";
import Img12 from "../../../imgframe/event4C13.png";

import Img13 from "../../../imgframe/event4C14.png";
import Img14 from "../../../imgframe/event4C15.png";

const ContentRight = () => {
  // Danh sách hình ảnh
  useEffect(() => {
    // Thêm class "animate" vào tất cả các hình ảnh khi trang được load
    const images = document.querySelectorAll(".image-list img");
    images.forEach((image) => {
      image.classList.add("animate");
    });
  }, []);

  const imageArray = [
    Img,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img8,
    Img7,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    // Thêm các đường dẫn hình ảnh khác nếu cần
  ];

  // Số hình ảnh mỗi trang
  const imagesPerPage = 6;

  // State cho trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán chỉ mục bắt đầu và kết thúc của danh sách hiện tại
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Danh sách hình ảnh hiện tại
  const currentImages = imageArray.slice(startIndex, endIndex);

  // Tăng trang
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Giảm trang
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <>
      <div class="col-12" style={{ width: "82.666667%", margin: "auto" }}>
        <section className="cssbgProduct">
          <div
            className="flex"
            style={{
              width: "100%",
              position: "sticky",
              backgroundColor: "white",
              top: "0",
              zIndex: "2",
            }}
          >
            <div style={{ margin: "auto" }}>
              <button
                style={{ fontSize: "11.5px" }}
                onClick={prevPage}
                className="btn"
                disabled={currentPage === 1}
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              &emsp;
              <span style={{ fontSize: "11.5px", alignSelf: "center" }}>
                {" "}
                Trang {currentPage}{" "}
              </span>
              &emsp;
              <button
                style={{ fontSize: "11.5px" }}
                className="btn"
                onClick={nextPage}
                disabled={endIndex >= imageArray.length}
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
              <br></br>
            </div>
          </div>

          <div
            className="cssforResListproduct"
            style={{
              display: "flex",
              marginTop: "2%",

              width: "100%",
            }}
          >
            <div className="image-list" style={{ width: "100%" }}>
              {/* Hiển thị danh sách hình ảnh hiện tại */}
              {currentImages.map((path, index) => (
                <img
                  style={{ padding: "1%" }}
                  key={index}
                  src={path}
                  width={375}
                  height={562}
                  alt={`Image ${index + 1}`}
                />
              ))}

              {/* Nút phân trang */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContentRight;
