import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getGenres } from '../app/actions/MovieAction'
import Hero from '../components/Hero'
import ListMovie from '../components/ListMovie'


const MainPage = () => {
    const state = useSelector((state)=> state.MovieReducer)
    console.log(state)
const dispatch =useDispatch()

  
useEffect(()=>{
    // populer filmleri çek ve store'a aktar
    dispatch(getMovies())
     // kategori verisini çek ve store'a aktar
   dispatch(getGenres())
},[])


  return (
    <div>
     <Hero/>
     {
       state.genres.map((genre)=>(
        <ListMovie key={genre.id} genre={genre}/>
       )

       )
     }
     
     
    </div>
  )
}

export default MainPage