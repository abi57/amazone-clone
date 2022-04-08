import React from "react";
import "./Products.css";
import newarrival1 from "../../static/row3/newarrival/newarrival1.jpg";

import comfy1 from "../../static/row3/comfystyles/comfy1.jpg";
import comfy2 from "../../static/row3/comfystyles/comfy2.jpg";
import comfy3 from "../../static/row3/comfystyles/comfy3.jpg";
import comfy4 from "../../static/row3/comfystyles/comfy4.jpg";

import kindle1 from "../../static/row3/kindle/kindle1.jpg";

const Productsrow3 = () => {
  return (
    <div className="products">
      <div className="product_info">
        <p>New arrivals in Toys</p>
        <div className="product_infotwopic">
          <img src={newarrival1} className="newarrival" alt="product-image" />
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>

      <div className="product_info">
        <p>Comfy styles</p>
        <div className="product_infofourpics">
          <div className="product_image">
            <img src={comfy1} className="comfy" alt="product-image" />
            <br></br>
            <small>Sweatshirts</small>
          </div>
          <div className="product_image">
            <img src={comfy2} className="comfy" alt="product-image" />
            <br></br>
            <small>Joggers</small>
          </div>
          <div className="product_image">
            <img src={comfy3} className="comfy" alt="product-image" />
            <br></br>
            <small>Cardigans</small>
          </div>
          <div className="product_image">
            <img src={comfy4} className="comfy" alt="product-image" />
            <br></br>
            <small>Easy tees</small>
          </div>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>

      <div className="product_info">
        <p>Kindle E readers</p>
        <div className="product_infotwopic">
          <img src={kindle1} alt="product-image"></img>
        </div>

        <a href="#" className="seemore">
          See more!
        </a>
      </div>
    </div>
  );
};

export default Productsrow3;
