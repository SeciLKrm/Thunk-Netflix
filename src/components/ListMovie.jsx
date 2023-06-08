import React, {useEffect, useState} from 'react'
import { fetchByUrl } from '../app/actions/MovieAction'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from './Hero';
import {Link} from 'react-router-dom'


const ListMovie = ({genre}) => {
const [movies,setMovies]=useState(null)

useEffect (()=>{
fetchByUrl(`/discover/movie?with_genres=${genre.id}`).then((res)=>
// console.log(res)
setMovies(res.results))
})
if(!movies) return 'Loading...'
  return (
    <div className='bg-black text-light py-4'>
      <h1> {genre.name}  </h1>
    <Splide options={{autoWidth: true, pagination: false, gap : '14px'}} >
     {
        movies.map((film)=>(
            <SplideSlide>
       <Link to={`/movie/${film.id}`}>  <img className='film' src={`${baseImgUrl}${film.poster_path}`} alt="" />    </Link> 
         </SplideSlide> 
        ))
     }
  </Splide>
    
    

    </div>
  )
}

export default ListMovie