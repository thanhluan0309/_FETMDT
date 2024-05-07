import "./style.css";
const Socicalcontact = () => {
  return (
    <>
      <div class="social-icons">
        <a
          onclick="openFace()"
          style={{
            backgroundColor: "#0866ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="tel:0369357270"
          style={{
            backgroundColor: "#337333",
            color: "white",
            cursor: "pointer",
          }}
        >
          <i class="fa-solid fa-phone-volume"></i>
        </a>
        <a
          style={{
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
          class="tiktok"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
};
export default Socicalcontact;
