import Video from '../../../img/headerVideo.mp4'
const ContentLeft = () => {
    return (
        <>
        <div class="col-2 cssResforContentLeft"  >
        <div style={{color:"white"}} className="logoDroplist">.</div>
           
          <ul class="nav flex-column nav-pills" role="tablist">
            <hr></hr>
            <li   class="nav-item csseventL">
              <a
                id="tab11"
                class="nav-link cssevent "
                data-toggle="tab"
                role="tab"
                style={{color:"black"}}
                aria-selected="true"
              >
               <i class="fa-regular fa-calendar-days"></i>&ensp; NGOÀI RA PHOTO TIME CÒN CÓ VÔ VÀN SỰ KIỆN KHÁC CÁC BẠN HẢY THỬ ĐẾN VÀ TRÃI NGHIỆM THỬ MỘT LẦN NHÉ
              </a>
            </li>
            <li class="nav-item csseventL">
              <a
                id="tab11"
                class="nav-link cssevent "
                data-toggle="tab"
                role="tab"
                href="#pane-tab-11"
                aria-selected="true"
              >
                <i class="fa-solid fa-arrow-right"></i> SỰ KIỆN GIÁNG SINH ĐƯỢC TỔ CHỨC TẠI PHOTO TIME
              </a>
            </li>
       
         
            <li class="nav-item csseventL">
            <div class="video-container">
                <video controls>
                  <source src={Video} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
            </li>
            <hr></hr>
            
          </ul>
        </div>
        </>
    )
}
export default ContentLeft;