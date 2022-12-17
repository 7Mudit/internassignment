import React from "react";
import "../CSS/Test.css";
import picture from "../Pictures/BackIcon.png";
import picture1 from "../Pictures/Search.png";
const Tests = () => {
  return (
    <div>
      {/* white box */}
      <div className="rectangle496"></div>

      <h1 className="Test">Select Tests</h1>

      {/* After line between delhi and timing */}
      <div className="line7"></div>
      <h4 className="delhi">Delhi</h4>
      <h4 className="timings">Lab timing: 8 AM to 12 AM</h4>

      {/* back icon */}
      <button>
        <img src={picture} alt="Not Found" className="backicon" />
      </button>

      {/* Search test input type */}
      <input
        type="text"
        name="text"
        id="text"
        className="searchTests"
        placeholder="   Search Tests"
      />
      {/* Picture of search tool */}
      <img src={picture1} alt="Not Found" className="searchImg" />

      <h2 className="booked">Frequently Booked Tests</h2>

      {/* First Male Fertitlity Test */}
      <div className="rectangle497">
        <h3 className="male1">Male Fertility Test</h3>
        <h4 className="panel">Panel type : Advance</h4>
        <h4 className="report">Report within : 48 hours/ 2 days</h4>
        <h4 className="parameters">Name & no. of parameters: 12 Parameters</h4>
        <ol className="names">
          <li>Semen Volume</li>
          <li>Total Sperm Number</li>
          <li>Sperm Concentration</li>
          <li>Vitality</li>
        </ol>
        <a href="/" className="view">
          View All Parameters
        </a>

        <h4 className="prize">Rs. 650</h4>

        <button className="book1">Book Now</button>

        {/* tick checkbox */}
        <input type="checkbox" name="check1" id="check1" className="check1" />
      </div>

      {/* test number 2 */}
      <div className="rectangle498">
        <h2 className="menstrual">Heavy Bleeding- Menstrual</h2>

        <h4 className="panel2">Panel type : Basic</h4>
        <h4 className="report2">Report within : 72 hours/ 3 days</h4>

        <h4 className="parameter2">Name & no. of parameters: 12 Parameters</h4>
        <div className="frame3">10-12 Hours Fasting Required</div>
        <ol className="names2">
          <li>Urine HCG</li>
          <li>CBC</li>
          <li>TSH</li>
          <li>Ferretin Test</li>
        </ol>

        <a href="/" className="views1">
          View All Parameters
        </a>

        <h3 className="prize2">Rs. 1249</h3>
        <button className="book2">Book Now</button>
        <input type="checkbox" name="check2" id="check2" className="check2" />
      </div>

      {/* test number 3 */}
      <div className="rectangle500">
        <h2 className="pcos">PCOS - Basic 1</h2>
        <h4 className="panel3">Panel type : Basic</h4>
        <h4 className="report3">Report within : 24 hours/ 1 days</h4>
        <h4 className="parameter3">Name & no. of parameters: 11 Parameters</h4>
        <ol className="name3">
          <li>Total Testosterone</li>
          <li>Free Testosterone</li>
          <li>TSH</li>
          <li>Prolactin</li>
        </ol>

        <input type="checkbox" name="check3" id="check3" className="check3" />
        <a href="\" className="view3">View All Parameters</a>

        <h2 className="prize3">Rs. 899</h2>
        <button className="book2">Book Now</button>
      </div>

      {/* last test */}
      <div className="rectangle501">
            <h2 className="last">Menstrual Irregularities</h2>
            <h4 className="panel4">Panel type : Basic</h4>
            <h4 className="report4">Report within : 24 hours/ 1 days</h4>
            <div className="frame3">Drink 3-4 glasses of water before test</div>
            <h4 className="parameter4">Name & no. of parameters: 6 Parameters</h4>
            <ol className="names4">
                <li>LH</li>
                <li>FSH</li>
                <li>TSH</li>
                <li>Prolactin</li>
            </ol>

            <a href="/" className="view4">View All Parameters</a>
            <h2 className="prize4">Rs. 659</h2>
            <button className="book2">Book Now</button>
      </div>
    </div>
  );
};

export default Tests;
