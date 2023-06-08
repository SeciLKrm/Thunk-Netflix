import React, { useEffect, useState } from 'react'
import { fetchByUrl } from '../app/actions/MovieAction'
import {useParams} from 'react-router-dom'
import { baseImgUrl } from '../components/Hero'

const MovieDetail = () => {
    const {movieId}=useParams()

    const [movieDetail , setMovieDetail]= useState (null)

    useEffect(()=>{
    
        fetchByUrl(`/movie/${movieId}`).then((res)=>{
            setMovieDetail(res)
        })
    })
    if (movieDetail === null) return 'Loading...';
    console.log(movieDetail)
  return (
    <div className='d-flex bg-black text-light movie-detail'>
  <div className='col-md-5 d-flex align-items-center justify-content-center'>
    <img className='img-fluid  detail-img' src={`${baseImgUrl}${movieDetail.poster_path}`} alt="" />
  </div>
  <div className='col-md-7 d-flex flex-column justify-content-center p-3'>
     <h1> {movieDetail.title} </h1>
     <p> {movieDetail.overview} </p>
     <div className='row row-cols-1'>
      <p className='fw-bold'>Maliyet :{movieDetail.budget} </p>
      <p className='fw-bold'>Hasılat : {movieDetail.revenue} </p>
      <p className='fw-bold text-danger'> Kar : {movieDetail.revenue - movieDetail.budget} </p>
     </div>
<div>
<div className='d-flex gap-2'>
      Kategori(ler):
      {
        movieDetail.genres.map((genre)=>(
          <p className='badge bg-secondary'> {genre.name} </p>
        )  )
      }
     </div>
     <div className='d-flex gap-2'>
      Dil(ler):
      {
        movieDetail.spoken_languages.map((lang)=>(
          <p className='badge bg-warning'> {lang.name} </p>
        ))

      }
     </div>
     <div className='d-flex gap-2 flex-wrap'>
 Yapımcı(lar):
 {
   movieDetail.production_companies.map((pro)=>(
     <p className='badge bg-success-subtle'> {pro.name} </p>
   ))
 }
</div>
</div>























  </div>

    </div>
  )
}

export default MovieDetail