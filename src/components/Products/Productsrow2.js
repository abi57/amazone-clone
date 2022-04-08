import React from "react";
import "./Products.css";
import beauty1 from "../../static/row2/Beautypics/beauty1.jpg";
import Dress1 from "../../static/row2/Dresses/dress1.jpg";
import fitness1 from "../../static/row2/Fitness needs/fitness1.jpg";

const Productsrow2 = () => {
  return (
    <div className="products">
      <div className="product_info">
        <p>Beauty pics</p>
        <div className="product_infotwopic">
          <img src={beauty1} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>
      <div className="product_info">
        <p>Dresses</p>
        <div className="product_infotwopic">
          <img src={Dress1} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>

      <div className="product_info">
        <p>Fitness needs</p>
        <div className="product_infotwopic">
          <img src={fitness1} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>
    </div>
  );
};

export default Productsrow2;
