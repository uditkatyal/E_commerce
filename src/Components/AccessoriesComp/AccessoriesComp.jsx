import "./AccessoriesComp.css";
import { useState } from "react";
import CartPage from "../../Pages/CartPage/CartPage";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
const AccessoriesComp = ({ products, onAddToCart }) => {
  // const handleCart = (product) => {
  //   onAddToCart(product);
  // };

  return (
    <div>
      <div className="accessories-container-main">
        <div className="accessories-container">
          {products.map((item, i) => {
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
                <IconButton className="favourite-icon">
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
        {/* <CartPage cartItems={cartItems} /> */}
      </div>
    </div>
  );
};
export default AccessoriesComp;
