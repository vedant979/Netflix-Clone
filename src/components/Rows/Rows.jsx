import React, { useEffect, useRef, useState } from 'react'
import axios from "../../axios";
import "./Rows.css";
import 'react-multi-carousel/lib/styles.css';
import { Cards } from '../Cards/Cards';

export const Rows = ({title,isLarge,fetchUrl,OnlyNetflix, TopRated, Top10}) => {
  const[movies, setMovies] = useState([]);
  const[topRated, setTopRated] = useState([]);
  var[count, setCount] = useState(1);
  // var TopRated10 = topRated.splice(10,10);
  useEffect(()=>{
    async function fetchData(){
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
  }
  fetchData();
  },[fetchUrl]);
  useEffect(()=>{
  if(TopRated){
      async function fetchTopRated(){
        const res = await axios.get(fetchUrl);
        setTopRated(res.data.results)
      }
      fetchTopRated();
    }
  }
  ,[])


  return (
    <div className='row-item-container'>
      <div className='title' >
      <strong className='title-header'>{title}</strong>
      </div>
      <div className='card-container1'>
          { !TopRated &&
            movies.map((movies)=>{

               return (
                  <Cards num= {count++}  TopRated={TopRated} OnlyNetflix={OnlyNetflix} about={movies.overview} isLarge={isLarge} name={movies.original_name} name2={movies.original_title} match={movies.vote_average*10} title={title} link={OnlyNetflix ? movies.poster_path : movies.backdrop_path} key={movies.id}/>
                )
                
            })

          }
          { TopRated &&
            Top10.map((movies)=>{

               return (
                  <Cards num= {count++}  TopRated={TopRated} OnlyNetflix={OnlyNetflix} about={movies.overview} isLarge={isLarge} name={movies.original_name} name2={movies.original_title} match={movies.vote_average*10} title={title} link={OnlyNetflix ? movies.poster_path : movies.backdrop_path} key={movies.id}/>
                )
                
            })

          }

      </div>
    </div>
  )
}
