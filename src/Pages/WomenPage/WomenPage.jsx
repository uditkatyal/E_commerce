import React, { useState } from "react";
import Women from "../../Components/Women/Women";
import Header from "../../Components/Header/Header";
import ShopByCategory from "../../Components/ShopByCategory/ShopByCategory";
import Footer from "../../Components/Footer/Footer";
import FooterGallery from "../../Components/FooterGallery/FooterGallery";
import Instagram from "../../Components/Instagram/Instagram";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./WomenPage.css";

const WomenPage = ({ onAddToCart }) => {
  const WomenData = [
    {
      id: 1,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "topsandshirts",
    },
    {
      id: 100,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "topsandshirts",
    },
    {
      id: 99,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "topsandshirts",
    },
    {
      id: 2,
      name: "ABC",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "shirtsandblouse",
    },
    {
      id: 3,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "dresses",
    },
    {
      id: 4,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "trousers",
    },
    {
      id: 5,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "shorts",
    },
    {
      id: 6,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "skirts",
    },
    {
      id: 7,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "jumpsuits",
    },
    {
      id: 8,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "knitwear",
    },
  ];
  const [SortedWomanData, setSortedWomenData] = useState(WomenData);
  const [categoryWise, setCategoryWise] = useState(true);
  const filterWomenData = (category) => {
    const filteredData = WomenData.filter((item) => item.category === category);
    setSortedWomenData(filteredData);
  };
  const handleCategoryWise = () => {
    setCategoryWise(!categoryWise);
  };
  return (
    <div>
      <Header />
      <ShopByCategory
        filterWomenData={filterWomenData}
        CategoryWise={handleCategoryWise}
      />
      {categoryWise && (
        <div className="look-category">Look category Specific</div>
      )}
      <div className="accessories-container-main women-main-container">
        <div className="accessories-container">
          {SortedWomanData.map((item, i) => {
            return (
              <div className="accessories-item" key={item.id}>
                <img src={item.img} />
                <p className="accessories-category-1">{item.category}</p>
                <p>{item.content}</p>
                <a
                  href="#"
                  style={{
                    textDecoration: "line-through",
                    marginRight: "5px",
                    color: "#8d8d8d",
                  }}
                >
                  ${item.olderPrice}
                </a>
                <span className="newPrice">${item.newPrice}</span>

                <button className="new-button new-sale-nutton">NEW</button>
                <button className="sale-button new-sale-nutton">SALE</button>
                <IconButton className="favourite-icon favourite-icon-women">
                  <FavoriteIcon />
                </IconButton>
                {/* <a href=""> */}
                <button
                  className="add-to-cart-hover"
                  onClick={() => onAddToCart(item)}
                >
                  + ADD TO CART
                </button>
                {/* </a> */}
              </div>
            );
          })}
        </div>
      </div>
      {/* <Women /> */}
      <Instagram />
      <FooterGallery />
      <Footer />
    </div>
  );
};

export default WomenPage;
