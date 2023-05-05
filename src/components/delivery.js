import { Map, Marker, Popup, TileLayer } from 'leaflet';

import React, { Component } from 'react';
import img from  "../img/map2.png"
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ReactDOM from 'react-dom';
import { Icon } from '@mui/material';
// import { Map, TileLayer, Marker, Popup } from 'leaflet';
// import './styles.css';

const DeliveryMap=()=> {


    return (
      <div>
         <TwoWheelerIcon sx={{position:"absolute",fontSize:"81px",top:"564px",left:"207px"}}/>
        <img src={img} alt = "nice one" style={{height:"100vh",width:"100vw"}}/>
      </div>
    );
  
}

export default DeliveryMap;