import { React, useState } from "react";
import "./App.css";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import MFA from "./components/MFA";
import Main from "./components/main";
import DeliveryMap from "./components/delivery";


function App() {
 
//  setInterval(async () => {
//    await loadData();
//  }, 2000);

  const  loadData = async () => {
     try {
        const res = await fetch('https://api.apijson.com/...');
        const blocks = await res.json();
        const dataPanelone = blocks.panelone;
        const dataPaneltwo = blocks.paneltwo;

        this.setState({
           panelone: dataPanelone,
           paneltwo: dataPaneltwo,
        })
    } catch (e) {
        console.log(e);
    }
  }

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
