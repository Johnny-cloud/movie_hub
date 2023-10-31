import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"
import "./movie.css"

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState(null)


  const fetchMovies = async () => {
      const response = await fetch('/movies')
      if( response.ok ){
          let fetchedMovies = await response.json()
          setPopularMovies(fetchedMovies.filter(movie => movie.rating > 7.0))
      }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if(popularMovies){
    return (
      <div>
          <h2>Popular movies today!</h2>
          <div className="container">
             {popularMovies.map(movie => <MovieCard movie={movie} key={movie._id}/>)} 
          </div>
          
      </div>
    )
  }else{
    return(
      <div className="error-meassage">
        <h3>Popular movies</h3>
      </div>
    )
  }
  
}

export default Popular