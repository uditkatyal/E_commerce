import React from "react";
// import DailyDrops from "../../Components/DailyDrops/DailyDrops";
import FooterGallery from "../../Components/FooterGallery/FooterGallery";
import ShopByCategory from "../../Components/ShopByCategory/ShopByCategory";
// import SmallBanner from "../../Components/SmallBanner/SmallBanner";
// import Carousel from "../../Components/Carousel/CarouselBanner";
// import Perspective from "../../Components/PerspectiveCarousel/Perspective";
// import Swiper from "../../Components/Swiper/Swiper";
import Header from "../../Components/Header/Header";
// import Banner from "../../Components/MainBanner/MainBanner";
import ControlledCarousel from "../../Components/ControlledCarousel/ControlledCarousel";
import Instagram from "../../Components/Instagram/Instagram";
import Footer from "../../Components/Footer/Footer";
import Metropolis from "../../Components/Metropolis/Metropolis";
import Trend from "../../Components/TrendNow/Trend";

function LandingPage({ totalItems }) {
  return (
    <div>
      {/* <Carousel /> */}
      <Header totalItems={totalItems} />
      {/* <Banner /> */}
      {/* <Perspective /> */}
      {/* <Swiper /> */}
      <ControlledCarousel />
      <ShopByCategory />
      <Trend />
      {/* <DailyDrops /> */}
      {/* <SmallBanner /> */}
      <Metropolis />
      <Instagram />
      <FooterGallery />
      <Footer />
    </div>
  );
}

export default LandingPage;
