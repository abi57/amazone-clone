import React from "react";
import "./Products.css";
import shopwatch from "../../static/row4/shopwatch/shopwatch.jpg";

import shoplaptop from "../../static/row4/shoplaptop/shoplaptop.jpg";

import striplight from "../../static/row4/striplight/striplight.jpg";

const Productsrow4 = () => {
  return (
    <div className="products">
      <div className="product_info">
        <p>Shop activity trackers and smartwatches</p>
        <div className="product_infotwopic">
          <img src={shopwatch} className="shopwatch" alt="product-image" />
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>

      <div className="product_info">
        <p>Shop Laptops & Tablets</p>
        <div className="product_infotwopic">
          <img src={shoplaptop} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>
      <div className="product_info">
        <p>Create with strip lights</p>
        <div className="product_infotwopic">
          <img src={striplight} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>
    </div>
  );
};

export default Productsrow4;
