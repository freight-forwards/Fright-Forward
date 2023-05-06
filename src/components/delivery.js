import { Map, Marker, Popup, TileLayer } from 'leaflet';

import React, { Component } from 'react';
import img from  "../img/map2.png"
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BackHandIcon from '@mui/icons-material/BackHand';
import RoomIcon from '@mui/icons-material/Room';
import Blinking from './Blinking';
import "./Blinking.css"
import ReactDOM from 'react-dom';
import { Icon } from '@mui/material';
// import { Map, TileLayer, Marker, Popup } from 'leaflet';
// import './styles.css';

const DeliveryMap=()=> {


    return (
      <div>
         <TwoWheelerIcon className='blink' sx={{position:"absolute",fontSize:"81px",top:"564px",left:"207px"}}/>
         <BackHandIcon className='blink' sx={{position:"absolute",fontSize:"20px",top:"401px",left:"145px"}}/>
         <BackHandIcon className='blink' sx={{position:"absolute",fontSize:"20px",top:"413px",left:"460px"}}/>
         <BackHandIcon className='blink' sx={{position:"absolute",fontSize:"20px",top:"244px",left:"430px"}}/>
         <RoomIcon className='blink' sx={{position:"absolute",fontSize:"40px",top:"230px",left:"685px"}}/>
        <img src={img} alt = "nice one" style={{height:"100vh",width:"100vw"}}/>
        
      </div>
    );
  
}

export default DeliveryMap;