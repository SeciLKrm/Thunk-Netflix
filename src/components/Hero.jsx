import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const baseImgUrl = 'https://image.tmdb.org/t/p/original'

const Hero = () => {
   const state = useSelector((store)=>store.MovieReducer)

    const index = Math.round(Math.random() *19)
    const film = state.popularFilms[index]
  if(!film) return 'Loading...'
  return (
    <div className='row p-4 bg-black text-light'>

       <div className='col-md-6  d-flex  flex-column justify-content-center gap-4'>
       <h1> {film.title} </h1>
       <p> {film.overview} </p>
       <p> IMDB: {film.vote_average} </p>

      <div className='d-flex justify-content-center gap-3 pb-4'>
      <Link to={`/movie/${film?.id}`} className='btn btn-danger text-light'> Film İzle </Link>
       <button className='btn btn-info'> Listeye Ekle </button>
      </div>
      
      </div>

       <div className='col-md-6 '>
       <img src={`${baseImgUrl}${film.poster_path}`} className='img-fluid rounded shadow '  alt="" />
       </div>

        
    </div>
  )
}

export default Hero