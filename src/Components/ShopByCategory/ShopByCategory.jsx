import "./ShopByCategory.css";
import img1 from "./tshirt.png";
import img2 from "./blouse.png";
import img3 from "./dress.png";
import img4 from "./leggins.png";
import img5 from "./shorts.png";
import img6 from "./skirt.png";
import img7 from "./jumpsuit.png";

import { button } from "react-router-dom";
const ShopByCategory = ({ filterWomenData, CategoryWise }) => {
  const filteredData = filterWomenData;
  return (
    <>
      <div className="shop-main-head">
        <div className="shop-container">
          {/* ::before */}
          <div className="div-text-white">
            <h2 className="shopbycategory-text">
              <span>THE SHOP</span>
            </h2>
          </div>
          <div className="dark-line"></div>
        </div>

        {/* ::after */}
        <div className="category-grid">
          <div onClick={() => filteredData("topsandshirts")}>
            {/* <i class="fa-solid fa-person-dress"></i> */}
            <img src={img1} alt="" />
            <button>Tops & T-shirts</button>
          </div>
          <div
            onClick={() => {
              filteredData("shirtsandblouse");
            }}
          >
            <img src={img2} alt="" />
            <button>Shirts & Blouses</button>
          </div>
          <div
            onClick={() => {
              filteredData("dresses");
            }}
          >
            <img src={img3} alt="" />
            <button>Dresses</button>
          </div>
          <div
            onClick={() => {
              filteredData("trousers");
            }}
          >
            <img src={img4} alt="" />
            <button>Trousers</button>
          </div>
          <div
            onClick={() => {
              filteredData("shorts");
            }}
          >
            <img src={img5} alt="" />
            <button>Shorts</button>
          </div>
          <div
            onClick={() => {
              filteredData("skirts");
            }}
          >
            <img src={img6} alt="" />
            <button>Skirts</button>
          </div>
          <div
            onClick={() => {
              filteredData("jumpsuits");
            }}
          >
            <img src={img7} alt="" />
            <button>Jumpsuits</button>
          </div>
          <div
            onClick={() => {
              filteredData("knitwear");
            }}
          >
            <img src={img2} alt="" />
            <button>Knitwear</button>
          </div>
          {/* <div>
            <img src={img3} alt="" />
            <a href="">DRESSES</a>
          </div>
          <div>
            <img src={img2} alt="" />
            <a href="">DRESSES</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
