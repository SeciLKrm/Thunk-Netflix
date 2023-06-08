import axios from "axios"
import { ActionTypes } from "../ActionTypes";

const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGUwNmEzMWRlZDVmN2JjNTk0ZjQxNmM3NDY2MmM3ZSIsInN1YiI6IjY0ODA2NDc4NjQ3NjU0MDBjN2I2YTdlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HV_RF2iV5bxd9crL8N9-rxoZNUlRSOF_LmLeL92YF9g'
    }
  };


axios.defaults.baseURL= 'https://api.themoviedb.org/3/'

export const getMovies= ()=> (dispatch) => {
    axios.get('/movie/popular', options).then((res)=>

    dispatch({
        type : ActionTypes.SET_MOVIES,
        payload : res.data.results
    })
    
    )
   
}

export const getGenres =()=>(dispatch)=>{
axios.get ('/genre/movie/list', options).then((res)=>
dispatch({
    type : ActionTypes.SET_GENRES,
    payload: res.data.genres
}))
}

// CUSTOM HOOK

export  const fetchByUrl = async (url)=>{
    const res = await axios.get(url, options)
    return res.data
}