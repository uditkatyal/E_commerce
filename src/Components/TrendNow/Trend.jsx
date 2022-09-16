import React from "react";
import "./Trend.css";

const Trend = () => {
  const TrendNow = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "DRESSES",
      tagLine: "Maecedas + Arcos",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "DRESSES",
      tagLine: "Maecedas + Arcos",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "DRESSES",
      tagLine: "Maecedas + Arcos",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "DRESSES",
      tagLine: "Maecedas + Arcos",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "DRESSES",
      tagLine: "Maecedas + Arcos",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "DRESSES",
      tagLine: "Maecedas + Arcos",
    },
  ];
  return (
    <div style={{ padding: "30px 0" }} id="trends">
      <div className="new-collection-container">
        <div className="div-text-white">
          <h2 className="collection-text">
            <span># TREND NOW</span>
          </h2>
        </div>
        <div className="dark-line"></div>
      </div>
      <div className="trend-container">
        {TrendNow.map((item) => {
          return (
            <div className="trend-item" key={item.id}>
              <div className="trend-image">
                <img src={item.img} alt="" />
                <p className="trend-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, laborum? Iure dignissimos architecto quos.
                </p>
              </div>
              <div className="trend-category">
                <p>{item.category}</p>
              </div>
              <div className="trend-tagline">
                <p>{item.tagLine}</p>
              </div>
              <a href="">
                <button className="trend-now-button">SHOP NOW</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Trend;
