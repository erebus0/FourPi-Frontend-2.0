import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
        </div>
      </div>
      <div className="max-width flex header">
        <img
          src="/media/erebus/New Volume/FourPi-Frontend-2.0/fourpi-frontend-2.0/assets/photo_6206081374985761241_y.jpg"
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
