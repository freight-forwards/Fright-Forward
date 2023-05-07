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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'leaflet';
// import './styles.css';

const DeliveryMap=()=> {

  const navigate = useNavigate();

 
  // setInterval(async () => {
  //   await loadData();
  // }, 10000);
 
  const [position,setPosition] = useState({
    top:"546px",
    left :"207px"
  })
  const data = {
    "Number":localStorage.getItem("number"),
    "Email": localStorage.getItem("email")
  }

  useEffect(async ()=>{
    await  axios.post("https://otp-service.freightforward.live/api/deliveryassigned",data)
  },[])

  setTimeout(
     () => {
    setPosition({
      top:"385px",
    left :"140px"
    })
    setTimeout(() => {

      setPosition({
        top:"230px",
        left :"425px"
      })
      setTimeout(async () => {
        setPosition({
        top:"413px",
      left :"460px"
        })
        setTimeout(async () => {
         
          setPosition({
          top:"230px",
        left :"685px"
          })
          setTimeout(() => {
            navigate({
              pathname: '/',
              search: '?order=delivered',
            })
          }, 3000);
          
          
        }, 5000);
      }, 5000);

    }, 5000);
    
  }, 5000)

  
  
 
  


   const  loadData = async () => {
      try {
         const res = await fetch('https://otp-service.freightforward.live/api/deliveryassigned');
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
      <div>
         <TwoWheelerIcon  sx={{position:"absolute",fontSize:"81px",top:position.top,left:position.left}}/>
         <BackHandIcon className='blink' sx={{position:"absolute",fontSize:"20px",top:"401px",left:"145px"}}/>
         <BackHandIcon className='blink' sx={{position:"absolute",fontSize:"20px",top:"413px",left:"460px"}}/>
         <BackHandIcon className='blink' sx={{position:"absolute",fontSize:"20px",top:"244px",left:"430px"}}/>
         <RoomIcon className='blink' sx={{position:"absolute",fontSize:"40px",top:"230px",left:"685px"}}/>
        <img src={img} alt = "nice one" style={{height:"100vh",width:"100vw"}}/>
        
      </div>
    );
  
}

export default DeliveryMap;