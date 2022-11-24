import React from "react";
import AppRating from "../components/AppRating";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import FourpiExperience from "../components/FourpiExperience";
import FourpiSecurity from "../components/FourpiSecurity";
import FourpiStory from "../components/FourpiStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <FourpiExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <FourpiSecurity />
      <FourpiStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;