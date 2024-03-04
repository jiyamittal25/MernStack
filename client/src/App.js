import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homescreen from "./screens/homescreen";

const App = () => {
  return (
    <>
      <Router>
        {" "}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" exact Component={Homescreen} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
