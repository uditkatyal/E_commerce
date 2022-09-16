import React, { useState } from "react";

const Women = () => {
  const WomenData = [
    {
      id: 1,
      name: "XYZ",
      img: "https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg",
      category: "topsandshirts",
    },
    {
      id: 2,
      name: "XYZ",
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
  const filterWomenData = (category) => {
    const filteredData = WomenData.filter((item) => item.category === category);
    setSortedWomenData(filteredData);
  };
  return (
    <div>
      {SortedWomanData.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <img src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Women;
