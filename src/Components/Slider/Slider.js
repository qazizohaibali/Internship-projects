import React from "react";
import '../Slider/Slider.css'

import {BsArrowRightCircle} from 'react-icons/bs'

import pic1 from "../Slider/Assets/my1.jpg";
import pic2 from "../Slider/Assets/my2.jpg";
import pic3 from "../Slider/Assets/my3.jpg";
import pic4 from "../Slider/Assets/my4.jpg";
import pic5 from "../Slider/Assets/my5.jpg";

import { useState } from "react";

export default function Slider() {
 
  
    const [div1, setDiv1] = useState("col-md-1 col_1 col-2 ")
    const [div2, setDiv2] = useState("col-md-10 col_10 col-10")

    return (
    // <div
    //   className="row col-lg-8 col-sm-12 col-md-10 mx-auto mt-4"
    //   height={500}
    // >

    <div className=" slider_container">
    <div className="row col-md-12 d-flex flex-columns mt-5" style={{backgroundColor:"black"}}  >
      <div 
      // className="col-md-4 col-4" 
      className={div1}  > 
      
      <button
          type="button"
          class="btn btn"
          onClick={() => {
            if (div1 === "col-md-1 col_1 col-2") {
              setDiv1("col-md-4 col-4 col_4 my-3 ");
              setDiv2("col-md-8 col-8 col_8 my-5");
            } else {
              setDiv1("col-md-1 col_1 col-2");
              setDiv2("col-md-10 col_10 col-10");
            }

            
          }}
        >
            <BsArrowRightCircle className="my_icon my-1" size={"1.5rem"}/>
        </button>
      

      <h1 className="my-lg-5 text-center my_h1">PERFUME PERFORMEANCE</h1>
      <p className="text-center my_p">" Backed by sixteen years of innovation and iteration, Zero Motorcycles possess an unprecedented combination of industry-leading power, traction and revolutionary “smart bike” technology. "</p>
      </div>
      <div 
      // className="col-md-8 col-8" 
      className={div2}  > <div
      id="carouselExampleCaptions"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-bs-interval="2000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner">
          {/* <div class="carousel-item active ">
          <img
            src={pic1}
            class="d-block w-100"
            // className="img-fluid"
            alt={pic1}
         
          />
          <div class="carousel-caption d-none d-md-block">
            <h4>RANGE ON</h4>
            <p>Go farther on the Zero DSR &SR, upto 233 miles</p>
          </div>
        </div> */}
        <div class="carousel-item active">
          <img src={pic1} class="d-block slides_pics w-100" alt={pic2} />
          <div class="carousel-caption d-none d-md-block">
            <h4>RAPID RECHARGE</h4>
            <p>100+ miles of range in as fast as an hour</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={pic2} class="d-block slides_pics w-100" alt={pic2} />
          <div class="carousel-caption d-none d-md-block">
            <h4>RAPID RECHARGE</h4>
            <p>100+ miles of range in as fast as an hour</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={pic3} class="d-block slides_pics w-100" alt={pic3} />
          <div class="carousel-caption d-none d-md-block">
            <h4>FAST FORWARD</h4>
            <p>Smooth acceleration and off-the-line performance </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={pic4} class="d-block w-100" alt={pic4} />
          <div class="carousel-caption d-none d-md-block">
            <h4>EASE OF OWNERSHIP</h4>
            <p>Zero routine maintenance with a direct drive powertrain</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={pic5} class="d-block w-100" alt={pic5} />
          <div class="carousel-caption d-none d-md-block">
            <h4>FEWER EMISSIONS</h4>
            <p>
              EVs significantly reduce CO2 and noxious fumes while saving oil
              reserves
            </p>
          </div>
        </div>
      </div>
    </div></div>
    </div>
  </div>

   
    // </div>
  );
}
