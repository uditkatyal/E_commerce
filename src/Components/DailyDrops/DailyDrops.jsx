import "./DailyDrops.css";
import img2 from "./img2.jpg";
const DailyDrops = () => {
  return (
    <>
      <div>
        <h1 className="dailydrop-head">#dailydrops</h1>
      </div>

      <div className="dailydrop-image">
        <div className="image-div">
          <img className="dailydrop-img1 " src={img2} alt="" />
        </div>
        <div className="image-div">
          <img className="dailydrop-img1 " src={img2} alt="" />
        </div>
      </div>
    </>
  );
};
export default DailyDrops;
