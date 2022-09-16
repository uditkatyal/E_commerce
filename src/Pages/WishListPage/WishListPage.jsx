import React from "react";
import WishList from "../../Components/WishList/WishList";
import Header from "../../Components/Header/Header";
import FooterGallery from "../../Components/FooterGallery/FooterGallery";
import Footer from "../../Components/Footer/Footer";

const WishListPage = () => {
  return (
    <div>
      <Header />
      <WishList />
      <FooterGallery />
      <Footer />
    </div>
  );
};

export default WishListPage;
