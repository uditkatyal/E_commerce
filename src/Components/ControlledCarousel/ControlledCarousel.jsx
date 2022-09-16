import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ControlledCarousel.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [Width, setWidth] = useState(window.innerWidth);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  if (Width < 800) {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/original/carousel/14/slideshow_1__17171.jpg?c=2"
            alt="First slide"
          />
          <Carousel.Caption>
            <Slide up duration={2000}>
              <h3 className="carousel-head-data">First slide label</h3>
            </Slide>
          </Carousel.Caption>
          <div className="carousel-caption-responsive-data-div">
            <div className="carousel-caption-responsive-data">
              <p style={{ fontWeight: "bold", textAlign: "center" }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <a href="/women">
                <button
                  style={{
                    padding: "10px 40px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    border: "1px solid black",
                    backgroundColor: "white",
                  }}
                  className="carousel-button"
                >
                  SHOP NOW
                </button>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/original/carousel/15/slideshow_2__67033.jpg?c=2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Slide up duration={2000}>
              <h3 className="carousel-head-data">Second slide label</h3>
            </Slide>
          </Carousel.Caption>
          <div className="carousel-caption-responsive-data-div">
            <div className="carousel-caption-responsive-data">
              <p style={{ fontWeight: "bold", textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="/women">
                <button
                  style={{
                    padding: "10px 40px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    border: "1px solid black",
                    backgroundColor: "white",
                  }}
                  className="carousel-button"
                >
                  SHOP NOW
                </button>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/original/carousel/16/slideshow_3.jpg?c=2"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Slide up duration={2000}>
              <h3 className="carousel-head-data">Third slide label</h3>
            </Slide>
          </Carousel.Caption>
          <div className="carousel-caption-responsive-data-div">
            <div className="carousel-caption-responsive-data">
              <p
                style={{
                  padding: "0 10px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <a href="/women">
                <button
                  style={{
                    padding: "10px 40px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    border: "1px solid black",
                    backgroundColor: "white",
                  }}
                  className="carousel-button"
                >
                  SHOP NOW
                </button>
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/original/carousel/14/slideshow_1__17171.jpg?c=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <Slide up duration={2000}>
            <h3 className="carousel-head-data">First slide label</h3>
          </Slide>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a href="/women">
            <button class="carousel-button">SHOP NOW</button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/original/carousel/15/slideshow_2__67033.jpg?c=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Slide up duration={2000}>
            <h3 className="carousel-head-data">Second slide label</h3>
          </Slide>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/women">
            <button class="carousel-button">SHOP NOW</button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/original/carousel/16/slideshow_3.jpg?c=2"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Slide up duration={2000}>
            <h3 className="carousel-head-data">Third slide label</h3>
          </Slide>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <a href="/women">
            <button class="carousel-button">SHOP NOW</button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default ControlledCarousel;
// render(<ControlledCarousel />);
