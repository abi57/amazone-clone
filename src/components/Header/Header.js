import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazonelogo"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <BsSearch className="header_searchicon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">Hello Guest</span>
          <span className="header_option2"> Sign in</span>
        </div>

        <div className="header_option">
          <span className="header_option1">Return</span>
          <span className="header_option2"> & Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2"> Prime</span>
        </div>
        <div className="header_optionbasket">
          <AiOutlineShoppingCart className="shoppingcart" />
          <span className="header_option2 header_basketcount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
