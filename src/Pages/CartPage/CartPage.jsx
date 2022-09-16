import Cart from "../../Components/Cart/Cart";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import AccessoriesComp from "../../Components/AccessoriesComp/AccessoriesComp";
import Footer from "../../Components/Footer/Footer";
const CartPage = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <>
      <Header />
      <Cart cartItems={cartItems} />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default CartPage;
