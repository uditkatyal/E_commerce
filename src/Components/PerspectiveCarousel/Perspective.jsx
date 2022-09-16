import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Perspective.css";

export default function SimpleSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    vertical: true,
  };
  return (
    <>
      <h2 className="season-heading">Season Trends</h2>
      <div>
        <Slider className="slider-control" {...settings}>
          <div>
            {/* <h2 className="season-text">Spring Collection</h2> */}
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <h2 className="season-text">Spring Collection</h2> */}
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <h2 className="season-text">Spring Collection</h2> */}
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <h2 className="season-text">Spring Collection</h2> */}
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt=""
            />
          </div>
          {/* <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
        </Slider>
      </div>
    </>
  );
}
