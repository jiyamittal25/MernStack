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
          <BrowserRouter>
            <Route path="/home" exact Component={Homescreen} />
            <Route path="/booking" exact Component={Bookingscreen} />
          </Routes>
        </div>
      </Router>
    </>

  );
};

export default App;
