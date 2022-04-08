import React from "react";
import "./Products.css";
import pic1 from "../../static/row1/gaming/game1.jpg";
import pic2 from "../../static/row1/gaming/game2.jpg";
import pic3 from "../../static/row1/gaming/game3.jpg";
import pic4 from "../../static/row1/gaming/game4.jpg";

import shop1 from "../../static/row1/shopbycategories/cat1.jpg";
import shop2 from "../../static/row1/shopbycategories/cat2.jpg";
import shop3 from "../../static/row1/shopbycategories/cat3.jpg";
import shop4 from "../../static/row1/shopbycategories/cat4.jpg";

import health1 from "../../static/row1/health& Personal Care/health1.jpg";

const Productsrow1 = () => {
  return (
    <div className="products">
      <div className="product_info">
        <p>Gaming accessories</p>
        <div className="product_infofourpic">
          <div className="product_image">
            <img src={pic1} alt="product-image" />
            <small>Headsets</small>
          </div>
          <div className="product_image">
            <img src={pic2} alt="product-image" />
            <small>Keyboard</small>
          </div>
          <div className="product_image">
            <img src={pic3} alt="product-image" />
            <small>Computer mouse</small>
          </div>
          <div className="product_image">
            <img src={pic4} alt="product-image" />
            <small>Chair</small>
          </div>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>

      <div className="product_info">
        <p>Shop by Category</p>
        <div className="product_infofourpics">
          <div className="product_image">
            <img src={shop1} alt="product-image" />
            <br></br>
            <small>Computers & Accessories</small>
          </div>
          <div className="product_image">
            <img src={shop2} alt="product-image" />
            <br></br>
            <small>Video games</small>
          </div>
          <div className="product_image">
            <img src={shop3} alt="product-image" />
            <br></br>
            <small>Baby</small>
          </div>
          <div className="product_image">
            <img src={shop4} alt="product-image" />
            <br></br>
            <small>Toys & Games</small>
          </div>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>

      <div className="product_info">
        <p>Health & Personal care</p>
        <div className="product_infotwopic">
          <img src={health1} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>
    </div>
  );
};

export default Productsrow1;
