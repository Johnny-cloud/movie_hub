import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"
import "./movie.css"

const New = () => {
    const [newMovies, setNewMovies] = useState(null)


    const fetchMovies = async () => {
      const response = await fetch('/movies')
      if( response.ok ){
          let fetchedMovies = await response.json()
          setNewMovies(fetchedMovies.filter(movie => movie.release_year === 2023))
      }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if(newMovies){
    console.log(newMovies)
    return (
      <div>
          <h2>New & Hot movies</h2>
          <div className="container">
            {newMovies.map(movie => <MovieCard movie={movie} key={movie._id}/>)} 
          </div>
          
      </div>
    )
  }else{
    return(
      <div className="error-message">
        <h3>New Movies</h3>
      </div>
    )
  }
  
}

export default New