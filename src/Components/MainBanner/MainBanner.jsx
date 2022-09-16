import gif1 from "./banner.gif";
import img1 from "./discount.png";
import img2 from "./newuserZone.webp";
import "./MainBanner.css";
const Banner = () => {
  return (
    <>
      <div className="banner-head">
        <img className="banner-gif" src={gif1} alt="" />
      </div>
      <div>
        <img className="banner-img" src={img1} alt="" />
      </div>
      <div className="banner-base">
        <img className="banner-img" src={img2} alt="" />
      </div>
    </>
  );
};
export default Banner;
