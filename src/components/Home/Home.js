import React from "react";
import "./Home.css";
import pic1 from "../../static/navpictures/pic1.jpg";
import pic2 from "../../static/navpictures/pic2.jpg";
import pic3 from "../../static/navpictures/pic3.jpg";
import pic4 from "../../static/navpictures/pic4.jpg";

import Productsrow1 from "../Products/Productsrow1";
import Productsrow2 from "../Products/Productsrow2";
import Productsrow3 from "../Products/Productsrow3";
import Productsrow4 from "../Products/Productsrow4";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        {/* <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>
            <img className="home_image" src={pic2} alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        <img className="home_image" src={pic1} alt="" />
        <img className="home_image" src={pic2} alt="" />
        <img className="home_image" src={pic3} alt="" />
        <img className="home_image" src={pic4} alt="" />
      </div>
      <div className="home_row">
        <Productsrow1 />
      </div>
      <div className="home_row">
        <Productsrow2 />
      </div>
      <div className="home_row">
        <Productsrow3 />
      </div>
      <div className="home_row">
        <Productsrow4 />
      </div>
    </div>
  );
};

export default Home;
