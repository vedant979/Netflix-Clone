import React, { useEffect } from 'react'
import "./Cards.css"
import { useState } from 'react';
import {IoPlayCircleSharp} from "react-icons/io5";
import {RiThumbUpLine, RiThumbDownLine,} from "react-icons/ri";
import {IoAddCircleOutline,IoChevronDownCircleOutline} from "react-icons/io5";
import { Modal } from '../Modal/Modal';
import { IoCloseCircleOutline} from "react-icons/io5";
import { useRef } from 'react';

export const Cards = (props) => {
  const[isHovered, setIsHovered] = useState(false);
  const[isCheck,setIsCheck] = useState(false);
  const[isOnlyNetflix, setIsOnlyNetflix] = useState(props.OnlyNetflix);
  const [show, setShow] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/w500";
  const[showModal, setShowModal] = useState(false);
  const[isTopRated, setIsTopRated] = useState(props.TopRated);

  
  const handleEnter=()=>{
    setIsHovered(true)
  }
  const handleLeave=()=>{
    setIsHovered(false)
  }
  const handleClick = ()=>{
    setIsCheck(true);
  }
  const handleClick1 = ()=>{
    setIsCheck(false);
  }
  const handleClick3 = ()=>{
    setShow(true);
    setShowModal(!showModal)
  }

  return (
    <>
    {
      showModal && (
        <div className='modal-banner-container'>

          <div className='modal-banner'>
                  <IoCloseCircleOutline  style={{ color:"white", fontSize:"30px"}} className='close-btn icons' onClick={()=>{
                  setShowModal(!showModal);}}/>
              <Modal about={props.about} name={props.name} name2={props.name2} match={props.match}  link={props.link}/>  
          </div>
          </div>
      )
  }
  <div className='card-container' onMouseLeave={handleLeave} onMouseEnter={handleEnter} style={props.OnlyNetflix && {height:"24rem"}}>

        {
          isTopRated ?
          <>{!isHovered && (
              <div className='toprated-container'>
                <p className='rank'>{props.num}</p>
                <div className='img-holder'>
                <img src={`https://image.tmdb.org/t/p/w500${props.link}`}  className={"toprated-card-image"}/>
                </div>
              </div>
          )} </>
          :
          <> {
            !isHovered && (
              <img src={`${base_url}${props.link}`}  className={`card-img ${props.isLarge && "large-card-image"}`}/>
              ) 
          }</>
        }

              {
                isHovered && 
                <>{
                  isOnlyNetflix ? (
                  <div className='big-container'>
                    <img src={`${base_url}${props.link}`}  className={`card-img ${props.isLarge && "large-card-image"}`}/>
                    <div className='total-items-large'>
                      <div className='btns'>
                        <div className='icon-items-large'>

                          <IoPlayCircleSharp style={{ color:"white", fontSize:"30px"}} className='icon'/>
                          
                          <IoAddCircleOutline style={{ color:"rgb(206, 206, 206))", fontSize:"30px"}} className='icon'/>

                        </div>
                          <div className='last-icon'>
                            <IoChevronDownCircleOutline style={{ color:"rgb(206, 206, 206)", fontSize:"25px"}} className='icon'onClick={()=>{
                              setShowModal(!showModal);
                            }}/>

                          </div>
                        </div>
                      <div className='about-items'>
                        <strong className='movie-name'>{props.name}</strong>
                        <div className='movie-match'>
                          {props.match}% Match
                        </div>

                        
                      </div>
                    </div>
                  </div>
                ) :
                <>
                  {
                  window.innerWidth>=600 ?
                ( 
                  <div className='main-container'>
              
                   <img src={`${base_url}${props.link}`}  className={`card-img ${props.isLarge && "large-card-image"}`}/>
                   


                    <div className='total-items'>
                      <div className='btns'>
                            <div className='icon-items'>

                              <IoPlayCircleSharp style={{ color:"white", fontSize:"25px"}} id='icon'/>
                              <IoAddCircleOutline style={{ color:"rgb(206, 206, 206))", fontSize:"25px"}} className='icon'/>
                              <RiThumbUpLine style={{ color:"rgb(206, 206, 206)", fontSize:"25px"}} className='icon'/>
                              <RiThumbDownLine style={{ color:"rgb(206, 206, 206)", fontSize:"25px"}} className='icon'/>

                            </div>
                            <div className='last-icon'>
                              <IoChevronDownCircleOutline style={{ color:"rgb(206, 206, 206)", fontSize:"25px"}} className='icon'
                              onClick={handleClick3} 
                              />
                              
                            </div>
                      </div>
                      <div className='about-items'>
                        <strong className='movie-name'>{!props.name2 && props.name} {!props.name && props.name2}</strong>
                        <div className='movie-match'>
                          {props.match}% Match
                        </div>
                        
                      </div>
                    </div>

                  </div>
                ) :
                (
                  <> {
                    
                    isTopRated  ? (
                        <div className='toprated-container'>
                          <div className='rank'>{props.num}</div>
                          <div className='img-holder'>
                          <img src={`https://image.tmdb.org/t/p/w500${props.link}`}  className={"toprated-card-image"}/>
                          </div>
                        </div>
                    )
                    :
                    
                     (
                        <img src={`${base_url}${props.link}`}  className={`card-img ${props.isLarge && "large-card-image"}`}/>
                        ) 
                     }</>
                  
                )
}</>
              }
                </>   
      }
    
    </div>
    
    </>


  )}

