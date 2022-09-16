import React from "react";
import img1 from "./wishlist.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div>
      <Wish>
        <h2>WishList</h2>
        <img src={img1} alt="" />
        <h3>It feels so Light!</h3>
        <p>There is nothing in your wishlist! Let's add some products.</p>
        <Link to="/women">
          <button>SHOP NOW</button>
        </Link>
      </Wish>
    </div>
  );
};

export default WishList;

const Wish = styled.div`
  margin: 80px 0;
  h2 {
    letter-spacing: 5px;
    font-size: 2.5rem;
    font-weight: bold;
  }
  h3 {
    letter-spacing: 3px;
  }
  p {
    letter-spacing: 2px;
    text-align: center;
  }
  img {
    min-width: 50px;
    width: 8%;
  }
  button {
    padding: 10px 40px;
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    background-color: white;
    color: black;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;
