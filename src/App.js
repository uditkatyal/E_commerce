import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accessories from "./Pages/Accessories/Accessories";
import CartPage from "./Pages/CartPage/CartPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import WomenPage from "./Pages/WomenPage/WomenPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import AboutPage from "./Pages/Aboutpage/AboutPage";
import WishListPage from "./Pages/WishListPage/WishListPage";

function App() {
  const ProductData = [
    {
      id: 1,
      img: "https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/1280x1280/products/124/521/bfb56c35-1919-4407-ac3d-b7868789da08__63393.1514177785.jpg?c=2",
      category: "DRESS",
      content: "Naminos selementum an metropolis",
      olderPrice: "320.00",
      newPrice: "280.00",
      quantity: "45",
    },
    {
      id: 2,
      img: "https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/1280x1280/products/124/521/bfb56c35-1919-4407-ac3d-b7868789da08__63393.1514177785.jpg?c=2",
      category: "DRESS",
      content: "Naminos selementum an metropolis",
      olderPrice: "320.00",
      newPrice: "280.00",
      quantity: "24",
    },
    {
      id: 3,
      img: "https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/1280x1280/products/124/521/bfb56c35-1919-4407-ac3d-b7868789da08__63393.1514177785.jpg?c=2",
      category: "DRESS",
      content: "Naminos selementum an metropolis",
      olderPrice: "320.00",
      newPrice: "280.00",
      quantity: "14",
    },
    {
      id: 4,
      img: "https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/1280x1280/products/124/521/bfb56c35-1919-4407-ac3d-b7868789da08__63393.1514177785.jpg?c=2",
      category: "DRESS",
      content: "Naminos selementum an metropolis",
      olderPrice: "320.00",
      newPrice: "280.00",
      quantity: "12",
    },
    {
      id: 5,
      img: "https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/1280x1280/products/124/521/bfb56c35-1919-4407-ac3d-b7868789da08__63393.1514177785.jpg?c=2",
      category: "DRESS",
      content: "Naminos selementum an metropolis",
      olderPrice: "320.00",
      newPrice: "280.00",
      quantity: "34",
    },
    {
      id: 6,
      img: "https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/1280x1280/products/124/521/bfb56c35-1919-4407-ac3d-b7868789da08__63393.1514177785.jpg?c=2",
      category: "DRESS",
      content: "Naminos selementum an metropolis",
      olderPrice: "320.00",
      newPrice: "280.00",
      quantity: "35",
    },
  ];
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (item) => {
    setCartItems([...cartItems, item]);
    console.log(item);
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage totalItems={cartItems.total_items} />}
          />
          <Route
            path="/accessories"
            element={
              <Accessories
                products={ProductData}
                onAddToCart={handleAddProduct}
              />
            }
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/women"
            element={<WomenPage onAddToCart={handleAddProduct} />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
