import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homescreen from "./screens/homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
const App = () => {
  return (

    <>
      <Router>
        {" "}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" exact Component={Homescreen} />
            <Route path="/booking" exact Component={Bookingscreen} />
            <Route path="/register" exact Component={Registerscreen} />
            <Route path="/login" exact Component={Loginscreen} />
          </Routes>
        </div>
      </Router>
    </>

  );
};

export default App;
