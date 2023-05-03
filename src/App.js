import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Food from "./components/Food";
import FoodOptions from "./components/FoodOptions";
import FilterButtons from "./components/FilterButtons";
import ColoredLine from "./components/ColoredLine";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import MFA from "./components/MFA";
import Main from "./components/main";

function App() {
 
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={< Main />}></Route>
                <Route exact path='/mfa' element={< MFA />}></Route>
                {/* <Route exact path='/dashboard' element={< DashBoard />}></Route> */}
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
