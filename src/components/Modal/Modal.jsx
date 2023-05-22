import React from 'react'
import play from "../../assets/play.png";
import {IoPlayCircleSharp, IoCloseCircleOutline} from "react-icons/io5";
import {RiThumbUpLine, RiThumbDownLine,} from "react-icons/ri";
import {IoAddCircleOutline,IoChevronDownCircleOutline} from "react-icons/io5";
import "./Modal.css"
export const Modal = (props) => {

  return (
    <>

      <div className='modal-container '>
          
          <img className='background-img' src={`https://image.tmdb.org/t/p/original/${props.link}`}></img>
          <div className='modal-details'>
            <div className='movie_name'>{!props.name && props.name2 }{!props.name2 && props.name}</div>
            <div className='control-btns-modal'>
              <button className='btn-1'>
                <img src={play} style={{height:"17px", margin:"0%"}}></img>
                <p style={{display:"inline-block",margin:"0%", marginLeft:"8px"}}>Play</p>
              </button>
              <IoAddCircleOutline style={{ color:"white", fontSize:"30px"}} className='icons'/>
              <RiThumbUpLine style={{ color:"white", fontSize:"25px"}} className='icons'/>
              <RiThumbDownLine style={{ color:"white", fontSize:"25px"}} className='icons'/>
            </div>
            <div className='likes'>{props.match}% Match</div>
          </div>
          {/* <div className='modal-cross' style={{color:"white"}}>X</div> */}
          <div className='bottom-container'>
            <div className='about'>
              <p className='movie-abt'>{props.about}</p>
            </div>
          </div>
      </div>
    </>
  )
}
