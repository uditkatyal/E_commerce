import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="new-collection-container">
        <div className="div-text-white">
          <h2 className="collection-text">
            <span>ABOUT US</span>
          </h2>
        </div>
        <div className="dark-line"></div>
      </div>
      <div className="about-container">
        <p>
          Urban Fashion Trend was launched in November 2021 to help and serve
          independent fashion brands and large companies and e-commerce
          retailers with their sourcing and garment production requirements.We
          handle the whole supply chain process with our sister company Tulip
          Creations Pvt. Ltd.- from designing, creating tech packs, sourcing for
          fabrics and trims, create samples, bulk apparel production, packaging,
          quality control assessments to arranging delivery of the products.
        </p>
        <p>
          Above all, we at Urban Fashion Trend look at each project as a
          partnership where quality and the fun of seeing creative ideas come to
          life are the most important.Till date, we have worked with brands from
          all over the world, including USA and Europe to launch and grow their
          fashion businesses and brands.
        </p>
        <p>
          We believe in promoting new and creative ideas and are open to
          collaborate with new fashion labels.
        </p>
      </div>
      <br />
      <div className="contact-us-button-div">
        <a href="#contact-us">
          <button className="contact-us-button">CONTACT US</button>
        </a>
      </div>
      <br />
      <div className="our-presence-image">
        <div className="new-collection-container">
          <div className="div-text-white">
            <h2 className="collection-text">
              <span>OUR PRESNCE</span>
            </h2>
          </div>
          <div className="dark-line"></div>
        </div>
        <img
          className="our-presence-image"
          src="https://urbankarmagb.co.uk/static/media/map.e3bff2a0f402530639ea.jpg"
          alt=""
        />
      </div>
      <div id="contact-us" className="contact-us-start">
        <div className="new-collection-container">
          <div className="div-text-white">
            <h2 className="collection-text">
              <span>CONTACT US</span>
            </h2>
          </div>
          <div className="dark-line"></div>
        </div>
        <div className="contact-us-container">
          <div className="urban-fashion-contact-image">
            <img
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <form className="urban-fashion-contact-details">
            <h3>GET IN TOUCH</h3>
            <p style={{ color: "#333" }}>We will contact soon</p>
            <div className="name-email">
              <label
                style={{
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontSize: "12px",
                }}
                htmlFor="name"
              >
                YOUR NAME
              </label>
              <input type="text" id="name" />
            </div>
            <div className="name-email">
              <label
                style={{
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontSize: "12px",
                }}
                htmlFor="email"
              >
                YOUR EMAIL
              </label>
              <input type="email" id="email" />
            </div>
            <button className="send-contact-button">SEND</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
