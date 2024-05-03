import CHINH from "../../imgchinhanh/D2.png";
import VANHANH from "../../imgchinhanh/VẠN HẠNH.png";

import CINESTART from "../../imgchinhanh/CINESTAR.png";
import BHD from "../../imgchinhanh/BHD.png";
import GIGAMALL from "../../imgchinhanh/GIGA.png";
import LOTTE from "../../imgchinhanh/LOTTE.png";
import Q7 from "../../imgchinhanh/Q7.png";
import THELOOP from "../../imgchinhanh/THELOOP.png";
import THISO from "../../imgchinhanh/THISO.png";
import VINCOM from "../../imgchinhanh/VINCOM.png";
import HV from "../../imgchinhanh/IMG_3639.jpg";

const arry = [
  {
    id: "CHINH",
    title: "PHOTO TIME - Selft studio",
    img: CHINH,
    name: "39 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1126483903968!2d106.71300847583848!3d10.80268355870719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b3720eb2c7%3A0xfcc4656f9f00a510!2sPHOTO%20TIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704443668606!5m2!1sen!2s",
  },
  {
    id: "Q7",
    title: "PHOTO TIME CRESCENT MALL",
    img: Q7,
    name: "101 Đ Tôn Dật Tiên, Tân Phú, Quận 7, Thành phố Hồ Chí Minh, Vietnam",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31360.560088578153!2d106.68076427431643!3d10.729083600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb52ae587cb%3A0x8c803c0fe9d1ebb7!2sPHOTO%20TIME%20CRESCENT%20MALL!5e0!3m2!1sen!2s!4v1704446386709!5m2!1sen!2s",
  },
  {
    id: "VHM",
    title: "PHOTO TIME VẠN HẠNH MALL",
    img: VANHANH,
    name: "Tầng 4 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10, TP.HCM",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.53638709787!2d106.66745847583833!3d10.770168759307541!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9f34ea0773%3A0xca663bed1ba9f151!2sPHOTOTIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704870241288!5m2!1sen!2s",
  },
  {
    id: "Cinestar",
    title: "Cinestar Cinema QUỐC THANH",
    img: CINESTART,
    name: "Cinestar Quốc Thanh, 271 Nguyễn Trãi, Quận 1, TP.HCM",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6190844980433!2d106.68484212583836!3d10.763811809424702!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f39c480afe5%3A0x17b696473cc006f0!2sPHOTO%20TIME%20-%20Self%20Photo%20Studio!5e0!3m2!1sen!2s!4v1704870350401!5m2!1sen!2s",
  },
  {
    id: "THISO",
    title: "Thiso Mall Sala",
    img: THISO,
    name: "Tầng B1 Thiso Mall Sala, 10 Mai Chí Thọ, TP.Thủ Đức, TP.HCM",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31353.20125952143!2d106.69823125995678!3d10.7998092740959!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa833fd2d73%3A0x4b49e90663b2aab3!2sPHOTO%20TIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704870466731!5m2!1sen!2s",
  },
  {
    id: "GIGAMALL",
    title: "GIGAMALL THỦ ĐỨC",
    img: GIGAMALL,
    name: "Tầng 5, Giga Mall, 240-242 Phạm Văn Đồng, Thủ Đức",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.787005959732!2d106.71863827583891!3d10.827605558246056!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ac58419d9f%3A0x9fcec5e1941e04b!2sPHOTO%20TIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704870530363!5m2!1sen!2s",
  },
  {
    id: "VINCOMTD",
    title: "VINCOM PLAZA THỦ ĐỨC",
    img: BHD,
    name: "Tầng 4 Vincom Plaza, 50 Lê Văn Việt, Quận 9, TPHCM",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.557250504812!2d106.77613027583887!3d10.84515510792065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270dcd3a0395%3A0x515cede00c31f6b9!2zR3JpbGwgJiBDaGVlciBWaW5jb20gTMOqIFbEg24gVmnhu4d0!5e0!3m2!1sen!2s!4v1704509405501!5m2!1sen!2s",
  },
  {
    id: "LOTTE",
    title: "Lotte Mall Tây Hồ",
    img: LOTTE,
    name: "Tầng 3 Lotte Mall, 683 Lạc Long Quân, Q.Tây Hồ, TP.Hà Nội",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.955026506438!2d105.81028327597042!3d21.07445838620601!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5620519a9d%3A0x6508670b6a36dd07!2sPHOTO%20TIME%20-%20Self%20Photo%20Studio!5e0!3m2!1sen!2s!4v1704870718578 !5m2!1sen!2s",
  },
  {
    id: "HUNGVUONG",
    title: "HÙNG VƯƠNG PLAZA",
    img: HV,
    name: "Tầng 6 Hùng Vương Plaza, 126 Hồng Bàng, Quận 5, TP.HCM",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7184813505405!2d106.66041132583827!3d10.756166259565454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef0f45da121%3A0x6ce5d38673084259!2sHung%20Vuong%20Plaza!5e0!3m2!1sen!2s!4v1704509774328!5m2!1sen!2s",
  },
  {
    id: "MANGO",
    title: "Mango Vincom Megamall Royal City",
    img: VINCOM,
    name: "Tầng B2 Vincom Mega Mall Royal City, Q.Thanh Xuân, Hà Nội",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7434256331962!2d105.81320272596926!3d21.002919588664255!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad6ac7addead%3A0x56cb01ac468567dc!2sPHOTO%20TIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704870797964!5m2!1sen !2s",
  },
  {
    id: "THELOOP",
    title: "TRUNG TÂM THƯƠNG MẠI THE LOOP",
    p: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17209.76221929593!2d105.76214936538265!3d21.035900648886194!2m3!1f0!2f0!3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0a4a34effd%3A0x832f3b3ff84bfff9!2sPHOTO%20TIME%20(Self%20Photo%20Studio)!5e0!3m2!1sen!2s!4v1704870848226!5m2! 1sen!2s",
    img: THELOOP,
    name: "241 Xuân Thủy, Cầu Giấy, Hà Nội, Việt Nam",
  },
];
export default arry;
