import React from "react";
import Slider from "react-slick/lib/slider";
import { useState } from "react";
import '../Carousel/Carousel.css'

import img1 from "../Carousel/Assets/pic1.png";
import img2 from "../Carousel/Assets/pic2.png";
import img3 from "../Carousel/Assets/pic3.png";
import img4 from "../Carousel/Assets/pic4.png";
import img5 from "../Carousel/Assets/pic5.png";
import img6 from "../Carousel/Assets/pic6.png";
import img7 from "../Carousel/Assets/pic7.png";
import img8 from "../Carousel/Assets/pic8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
  
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,

    beforeChange: (current, next) => setImgIndex(next),
    centerMode: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" my-5" >
    
    <h2 className="text-center">YOU MIGHT ALSO BE INTERESTED IN</h2>
      <div className="row col-10 shadow-lg mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => {
            return (
              <div
                className={index === imgIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} className="carousel_img" alt={index} />
              </div>
            );
          })}
        </Slider>
      </div>
      </div>
           
  );
}
