import { React, useState } from "react";
import "./App.css";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import MFA from "./components/MFA";
import Main from "./components/main";
import DeliveryMap from "./components/delivery";
import RiderMap from "./components/Ridermap";


function App() {


  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={< Main />}></Route>
                <Route exact path='/mfa' element={< MFA />}></Route>
                <Route exact path='/map' element={< DeliveryMap />}></Route>
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
