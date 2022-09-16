import styled from "styled-components";

const Instagram = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <InstagramMain className="insta-section">
      <div className="insta-header">
        <div>
          <i class="fa-brands fa-instagram"></i>
          <h3> #URBAN FASHION</h3>
        </div>
        <h6>ON INSTAGRAM</h6>
      </div>
      <InstaBio className="insta-bio">
        <p>
          Phasellus lorem malesuada ligula pulvinar cosmopolis.
          <br />
          Praesent urna tellus laoreet an tellus ullamcorper fermentum de
          cosmopolis facilisis eratum.
        </p>
      </InstaBio>
      <InstaCarousel className="insta-carousel"></InstaCarousel>
      <InstaButton>
        <a href="#">
          <button>VIEW GALLERY</button>
        </a>
      </InstaButton>
    </InstagramMain>
  );
};
export default Instagram;
const InstagramMain = styled.div`
  margin-top: 50px;
  padding: 50px 0;
  background-color: #fff6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    display: inline;
    font-weight: bold;
    letter-spacing: 3px;
  }
  h6 {
    text-align: center;
    letter-spacing: 3px;
    font-weight: bold;
  }
  .fa-instagram {
    font-size: 1.7rem;
  }
`;
const InstaBio = styled.div`
  text-align: center;
  p {
    margin: 30px 0;
  }
`;
const InstaCarousel = styled.div``;
const InstaButton = styled.div`
  button {
    box-sizeing: border-box;
    color: ghostwhite;
    background-color: black;
    border: none;
    border: 2px solid black;
    font-weight: bold;
    padding: 8px 40px;
    font-size: 0.7rem;
    transition: all 0.2s;
    letter-spacing: 2px;
  }
  button:hover {
    color: black;
    background-color: ghostwhite;
    // border: 2px solid black;
  }
`;
