import React from 'react'
import { Rows } from '../Rows/Rows';
import axios from "../../axios";

import requests from "../../Request";
import "./Slider.css"
import { useEffect, useState } from 'react';
export const Slider = () => {
  const[topRated, setTopRated] = useState([]);
  const[top10, setTop10] = useState([]);
  useEffect(()=>{
    async function fetchMovie(){
      const res = await axios.get(requests.fetchTrending)
      setTopRated(res.data.results.splice(10,10));
    } 
    fetchMovie();
  },[])
  
// console.log(topRated)

  return (
    <div  style={{marginTop:"-9rem"}} className='slider-container'>
          <Rows
          title="Upcoming"
          fetchUrl = {`${requests.fetchUpComing}`}
        />
        <Rows
          title="Top 10 In US Today"
          TopRated={true}
          fetchUrl = {`${requests.fetchTrending}`}
          Top10 = {topRated}
        />
        <Rows
          title="Horror Movies"
          fetchUrl = {`${requests.fetchHorrorMovies}`}
        />
        <Rows 
          title="Only In Netflix"
          isLarge={true}
          fetchUrl = {`${requests.fetchTopRated}`}
          OnlyNetflix= {true}
        />
        <Rows 
          title="Popular On Netflix"
          isLarge={true}
          fetchUrl = {`${requests.fetchNetflixOriginals}`}
        />
        

        <Rows
          title="Comedies"
          fetchUrl = {`${requests.fetchComedyMovies}`}
        />
        <Rows
          title="Action Movies"
          fetchUrl = {`${requests.fetchActionMovies}`}
        />
        <Rows
          title="TV Sci-Fi And Horror"
          fetchUrl = {`${requests.fetchTVSeries}`}
        />

        <Rows
          title="Animation"
          fetchUrl = {`${requests.fetchAnimation}`}
        />
        <Rows
          title="Drama"
          fetchUrl = {`${requests.fetchDrama}`}
        />

    </div>
  )
}
