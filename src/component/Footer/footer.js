const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ flexBasis: "20%" }} class="footer-column">
          <h2>TIKPII Q2</h2>
        </div>
        <div class="footer-column">
          <h2>CONTACT</h2>
          <ul>
            <li>Email: xxxxx@gmail.com</li>
            <li>Phone: xxxxxx</li>
            <hr></hr>
            <li>xxxxxxxxxxxxxxx</li>
            <hr></hr>
            <li style={{ fontSize: "1.3rem" }} className="cssforIconFooter">
              <i
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/phototimevn?locale=vi_VN"
                  );
                }}
                class="fa-brands fa-facebook"
              ></i>
              <i
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/phototimeofficial/?fbclid=IwAR08kQKiTbQrt5Yx3UtqUE6V9WtW8U6goh959150_dBEdZjCmHHZGtL5KWM"
                  );
                }}
                class="fa-brands fa-instagram"
              ></i>
              <i
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://www.tiktok.com/@phototimevietnam?fbclid=IwAR2BcmN36mg9o1kgMDgykDKZ3ESZp9ZSMwddeoTWzAt_9VujnoURe0mIq7s"
                  );
                }}
                class="fa-brands fa-tiktok"
              ></i>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h2>INFORMATION</h2>
          <ul>
            <li style={{ cursor: "pointer" }}>Location</li>
            <li style={{ cursor: "pointer" }}>Event</li>
            <li style={{ cursor: "pointer" }}>Home</li>
            <li style={{ cursor: "pointer" }}>About</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
