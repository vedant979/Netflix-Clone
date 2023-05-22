import React from 'react'
import "./HomePage.css"
// import { Link, NavLink } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import {Banner} from '../../components/Banner/Banner';
import { Slider } from '../../components/Slider/Slider';

export const HomePage = () => {
  return (
    <div className='homeScreen' 
    style={{backgroundColor:"#141414"}}
    >
        {/* NavBar */}
          <Navbar/>

        {/* Body */}
          <Banner/>
          
        {/*Rows*/}
        <Slider/>

    <footer className='footer' style={{height:"250px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"}}>
        <p className='footer-text' style={{color:"white",
      fontWeight:"400",
      fontSize:"17px"
      }}>Made By <strong style={{color:"white",
      fontSize:"20px",
      fontWeight:"600"
  }}> Vedant Sharma</strong></p>
    </footer>
    </div>
  )
}
