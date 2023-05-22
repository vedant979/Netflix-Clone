import React, { useEffect, useState } from 'react';
import './Banner.css';
import play from "../../assets/play.png";
import plus from "../../assets/plus.png";
import request from "../../Request.js";
import axios from "../../axios.js";
import { Modal } from '../Modal/Modal';
import { IoCloseCircleOutline} from "react-icons/io5";



export const Banner = () => {
    const[modal, setModal] = useState(false);
    const[movie, setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get(request.fetchTopRated);

            setMovie(
                req.data.results[Math.floor(Math.random()*req.data.results.length-1)]  
            );
            return req;
        }
        fetchData();
    },[])
    const toggleModal = ()=>{
        setModal(!modal);
    }
  return (
    <div className='banner'>

            {
                modal && (
                <div className='modal-banner-container'>
                    <div className='modal-banner'>
                            <IoCloseCircleOutline  style={{ color:"white", fontSize:"30px"}} className='close-btn icons' onClick={()=>{
                            setModal(!modal);}}/>
                        <Modal about={movie.overview} name={movie.name} name2={movie.original_title} match={movie.vote_average*10}  link={movie.backdrop_path}/>  
                    </div>
                    
                </div>

                )
            }
        <div className='banner-content'>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className='img-background'/>
            <div className='about-banner'>
                <div className='movie-title'>
                    {movie.name}
                </div>
                {/* <div className='movie-overview'>
                    {movie.overview}
                </div> */}
                <div className='control-btns'>
                    <button className='btn-1'>
                        <img src={play} style={{height:"17px", margin:"0%"}}></img>
                        <p style={{display:"inline-block",margin:"0%", marginLeft:"8px"}}>Play</p>
                    </button>
                    <p style={{width:"15px"}}></p>
                    <button className='btn-2' onClick={toggleModal}>
                        <img src={plus} style={{height:"17px", margin:"0%"}}></img>
                        <p style={{display:"inline-block" ,margin:"0%", marginLeft:"8px"}}>More Info</p>
                    </button>
                </div>
                
            </div>
        </div>
        <div className='blur'>
            
        </div>
    </div>
  )
}
