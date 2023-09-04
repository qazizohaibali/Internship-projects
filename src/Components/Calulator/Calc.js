import React from "react";
import '../Calulator/Calc.css'

import { useState } from "react";
// import { useEffect } from "react";

import { GiPathDistance } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";

import CountUp from "react-countup";

function Calc() {
  // To get and update input vules

  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [val3, setVal3] = useState(null);

  const [res1, setRes1] = useState(null);
  const [res2, setRes2] = useState(null);
  const [res3, setRes3] = useState(null);

  const change1 = (event) => {
    setVal1(event.target.value);
  };

  const change2 = (event) => {
    setVal2(event.target.value);
  };

  const change3 = (event) => {
    setVal3(event.target.value);
  };

  // For Calculation

  const calc = () => {
    let sum1 = parseInt(val2) * 30 * 12 + 12 * parseInt(val3);
    setRes1(sum1);
    let sum2 = (sum1 * 85) / 100;
    setRes2(sum2);
    let sum3 = sum1 - sum2;
    setRes3(sum3);
  };

  return (
    // <div className="container-fluid ">
      <div className="col-11  mx-auto text-center mt-5">
        <h1>ELECTRIC MOTORBIKE SAVING CLACULATOR</h1>
        <div className="row content my_row py-3">
          {/* FIRST CARD */}
          <div className="col-lg-3 shadow bg-light mt-5 mx-2  col-sm-3 py-3">
            <GiPathDistance className="my_icon" size={50} />
            <h6 className="mt-3">MILEAGE</h6>
            <p>What distance do you travel on daily basis?</p>
            Km. <input type="text" onChange={change1} />
          </div>
          {/* SECOND CARD */}
          <div className="col-lg-3 shadow bg-light mt-5 mx-2 col-sm-3 py-3">
            <FaGasPump className="my_icon" size={50} />
            <h6 className="mt-3">GASOLINE</h6>
            <p>What is the current price of gasoline?</p>
            Rs. <input onChange={change2} />
          </div>
          {/* THIRD CARD */}
          <div className="col-lg-3 shadow bg-light mt-5 mx-2 col-sm-3 py-3">
            <BsTools className="my_icon " size={50} />
            <h6 className="mt-3">MAINTAINENCE</h6>
            <p>Monthly maintenance expenses</p>
            Rs. <input onChange={change3} />
          </div>
          {/* RESULT CARD */}
          <div className="col-lg-6 shadow-lg  mt-5 col-sm-11 text-center py-3">
            <p className="mb-1">Cost of running petrol motorcycle per year</p>

            <h3>Rs.{res1}</h3>
            <p className="mb-1">Cost of running VLEKTRA motorcycle per year </p>
            <h3>Rs.{res3}</h3>
            <p className="mb-1">Total saving per year </p>
            <h3 className="savings ">
              Rs.
              <CountUp start={0} end={res2} duration={1} delay={0}></CountUp>
            </h3>
            <button type="button" class="btn btn-outline-light " onClick={calc}>
              Check Saving
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Calc;
