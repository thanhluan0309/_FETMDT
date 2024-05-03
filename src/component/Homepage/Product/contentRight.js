import React, { useEffect, useState } from "react";
import Img from "../../../imgProduct/p1.jpg";
import Img1 from "../../../imgProduct/p2.jpg";
import Img2 from "../../../imgProduct/p3.jpg";
import Img3 from "../../../imgProduct/p4.jpg";
import Img4 from "../../../imgProduct/p5.jpg";
import Img5 from "../../../imgProduct/p6.jpg";
import Img6 from "../../../imgProduct/p4 (1).jpg";
import Img7 from "../../../imgProduct/p4 (2).jpg";
import Img8 from "../../../imgProduct/p9.jpg";
import Img9 from "../../../imgProduct/p5 (5).jpg";
import Img10 from "../../../imgProduct/p5 (6).jpg";
import Img11 from "../../../imgProduct/p5 (7).jpg";
import Img12 from "../../../imgProduct/p5 (8).jpg";

import Img13 from "../../../imgProduct/p4 (3).jpg";
import Img14 from "../../../imgProduct/p5 (1).jpg";
import Img15 from "../../../imgProduct/p5 (2).jpg";
import Img16 from "../../../imgProduct/p5 (3).jpg";
import Img17 from "../../../imgProduct/p5 (10).jpg";
import Img18 from "../../../imgProduct/p5 (5).jpg";
import Img19 from "../../../imgProduct/p5 (6).jpg";
import Img20 from "../../../imgProduct/p5 (7).jpg";
import Img21 from "../../../imgProduct/p5 (8).jpg";
import Img22 from "../../../imgProduct/p5 (9).jpg";

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
    Img21,
    Img22,
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
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
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
