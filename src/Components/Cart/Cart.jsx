import useStyles from "./styles";
import "./Cart.css";
import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";
// import { IconButton } from "@material-ui/core";

const Cart = ({ cartItems }) => {
  const classes = useStyles();
  console.log(cartItems);
  const cartItemsLength = cartItems.length;
  return (
    <>
      <div className="cart-items">
        {cartItems.length === 0 && (
          <div className={classes.emptyCart}>Your cart is empty</div>
        )}
      </div>
      <div>
        {cartItems.length > 0 && (
          <table className={classes.mainTable}>
            <thead>
              <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <hr
              style={{
                height: "3px",
                margin: "10px 0",
              }}
              className={classes.horizontalLine}
            />
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className={classes.itemHandle}>
                      <div>
                        <img
                          className={classes.itemImage}
                          src={item.img}
                          alt=""
                        />
                      </div>
                      <div className={classes.itemData}>
                        <h6>{item.category}</h6>
                        <p>{item.content}</p>
                      </div>
                    </td>
                    <td className={classes.itemPrice}>${item.newPrice}</td>
                    <td>
                      <div className={classes.itemQuantityButton}>
                        <button className={classes.quantityButton}>-</button>
                        <p className={classes.quantityCount}>{item.quantity}</p>

                        <button className={classes.quantityButton}>+</button>
                      </div>
                    </td>
                    <td>
                      ${parseInt(item.newPrice) * parseInt(item.quantity)}
                    </td>
                    {/* <IconButton className="favourite-icon"> */}
                    {/* <FavoriteIcon /> */}
                    {/* </IconButton> */}
                    <IconButton>
                      <HighlightOffIcon className={classes.removeIcon} />
                    </IconButton>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <hr />
        {cartItems.length > 0 && (
          <div className="payContainer">
            <div className="grandTotal">
              <h4>
                GRAND TOTAL : $
                {cartItems.reduce((acc, item) => {
                  return (
                    acc + parseInt(item.newPrice) * parseInt(item.quantity)
                  );
                }, 0)}
              </h4>
            </div>

            <Link className="proceedLink" to="/checkout">
              <button className="proceedToCheckout">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
