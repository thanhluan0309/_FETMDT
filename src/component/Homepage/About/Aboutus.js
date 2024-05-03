import Navbar from "../../navbar/navbar"
import Footer from "../../footer/footer";
const pageAboutUs = () => {
    return (
        <>
          <Navbar></Navbar>
          <section>
            <div style={{maxWidth:"100%"}} className="cssbgImgcontact col-xs-12 col-sm-12 col-md-6 "> 
                  
            </div>
          </section>
         <section style={{padding:'1em'}} className="cssSection" >
        <div style={{marginRight:"0%",height: "100%",backgroundImage:"none"}} class="row backgroundRowBody"  >
          <div style={{ display: "flex" }} class="col-xs-12 col-sm-12 col-md-6">
            <div style={{width:"100%"}} className="Bodyleft-content">
              <div style={{textAlign:"justify"}} className="Bodyleft-content-title"  >About us</div>
              <p className="Bodyleft-content-content"  >
              Một trong những studio tự chụp ảnh được yêu thích nhất TP.HCM chính là PHOTO TIME Vietnam. PHOTO TIME Vietnam có color room và vip room với đa dạng mức giá, nơi bạn chụp ảnh với phông nền màu sắc giá từ 70.000/2 ảnh. Ngoài không gian đậm chất Hàn Quốc cùng các Photozone check-in xịn xò, khi chọn VIP room tại PHOTO TIME bạn còn được trải nghiệm: máy chụp ảnh vô cùng hiện đại, phông nền màn hình led đa dạng thay đổi tuỳ thích, có thể sử dụng trang phục hanbook, đồ thú, đồ học sinh...
                Bên cạnh đó, PHOTO TIME sẽ luôn trang bị đầy đủ phụ kiện, trang phục và có cả nhân viên siêu nhiệt tình để giúp bạn thoải mái nhất khi trải nghiệm. Khi in ảnh ngoài frame họa tiết, thì PHOTO TIME có tận 8 màu đơn sắc trên Frame hình để bạn thoải mái lựa chọn: xanh lá, xanh, hồng, đen, trắng, tím, cam, xám,... Hiện tại, PHOTO TIME Vietnam có ba chi nhánh tại TP.HCM để phục vụ tốt nhất cho tinh thần "sống ảo" của tất cả mọi người.
              </p>
              
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 cssResponesiveImg bodyRightAbout-Img" ></div>
        </div>
      </section>
   

    


      <section style={{padding:'1em', marginTop:"1%"}} className="cssSection" >
        <div style={{marginRight:"0%",height: "100%",backgroundImage:"none"}} class="row backgroundRowBody"  >
        <div class="col-xs-12 col-sm-12 col-md-6 bodyRightAbout-Img" ></div>
       
          <div style={{ display: "flex" }} class="col-xs-12 col-sm-12 col-md-6">
            <div style={{width:"100%"}} className="Bodyleft-content">
              <div style={{textAlign:"justify"}} className="Bodyleft-content-title"  >ABOUT SUNG GA VINA CO., LTD.</div>
              <p className="Bodyleft-content-content"  >
                <ul style={{listStyle:"none"}}>
                    <li>Industry : Giải trí/ Game
                    </li>
                    <li>Company size : 25-99
                    </li>
                    <li>Nationality : South-Korea
                    </li>
                </ul>
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
        </>
    )
}
export default pageAboutUs;
