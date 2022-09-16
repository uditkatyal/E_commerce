import bannerImg from "./smallbannerimg.webp";
import "./SmallBanner.css";
const SmallBanner = () => {
  return (
    <>
      <div className="smallbanner-class">
        <img src={bannerImg} alt="" />
        <div className="smallbanner-text">
          <p>Buy better. Buy less.</p>
          <p>WEAR MORE.</p>
          <a href="#">@website link</a>
        </div>
      </div>
    </>
  );
};
export default SmallBanner;
