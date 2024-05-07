import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Avatar } from "@mui/material";
// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const chartRef = useRef(null);

  // Dữ liệu cho biểu đồ cột
  const data = {
    labels: [
      "Nguyễn Văn A",
      "Nguyễn Văn C",
      "Nguyễn Văn B",
      "Nguyễn Văn D",
      "Nguyễn Văn E",
    ],
    datasets: [
      {
        label: `Top 5 khách hàng tiềm năng`,
        data: [12, 19, 3, 5, 7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Các tùy chọn cho biểu đồ cột
  const options = {
    responsive: true, // Biểu đồ sẽ thay đổi kích thước theo kích thước container
    maintainAspectRatio: false, // Để biểu đồ có thể điều chỉnh tỷ lệ tự do
    plugins: {
      title: {
        display: true,
        text: "Các bậc sếp hạng thành viên",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        top: 50, // Tăng khoảng cách trên cùng để chứa avatar
      },
    },
    animation: {
      onComplete: () => {
        const chart = chartRef.current;

        if (chart) {
          const ctx = chart.ctx;
          const meta = chart.getDatasetMeta(0); // Lấy meta của dataset đầu tiên
          const dataPoints = meta.data;

          const avatars = [
            "https://via.placeholder.com/30",
            "https://via.placeholder.com/30",
            "https://via.placeholder.com/30",
            "https://via.placeholder.com/30",
            "https://via.placeholder.com/30",
            "https://via.placeholder.com/30",
          ];

          dataPoints.forEach((point, index) => {
            const { x, y } = point.tooltipPosition(); // Lấy vị trí để vẽ avatar
            const image = new Image(); // Tạo đối tượng hình ảnh mới
            image.src = avatars[index];

            image.onload = () => {
              ctx.drawImage(image, x - 15, y - 40, 30, 30); // Vẽ avatar lên canvas
            };
          });
        }
      },
    },
  };

  return (
    <>
      <div style={{ width: "100%", height: "300px" }}>
        {" "}
        {/* Đảm bảo container có kích thước cố định */}
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </>
  );
};

export default BarChart;
