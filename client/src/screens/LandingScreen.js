import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
<<<<<<< HEAD
    <div className="row landing "style={{width:'100vw',height:'91vh'}}>
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
          MERN HOTEL
=======
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
          SuiteSpot
>>>>>>> a9d551c75f857c6fd35af061259db45f7ab90cc5
        </h2>
        <h1 data-aos="zoom-out" style={{ color: "white" }}>
          There is only one boss. The Guest.
        </h1>
<<<<<<< HEAD
        <Link to="/login">
=======
        <Link to="/home">
>>>>>>> a9d551c75f857c6fd35af061259db45f7ab90cc5
          <button className="btn btn-primary landingBtn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
