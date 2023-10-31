import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import "./movie.css"

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState(null)


  const fetchMovies = async () => {
    const response = await fetch('/movies')
    if( response.ok ){
        let fetchedMovies = await response.json()
        setTrendingMovies(fetchedMovies.filter(movie => movie.trending === true))
    }
}

  useEffect(() => {
    fetchMovies()
  }, [])
  
  if(trendingMovies){
    return (
    <div>
        <h2>Trending movies today!</h2>
        <div className="container">
           {trendingMovies.map(movie => <MovieCard movie={movie} key={movie._id}/>)} 
        </div>
        
    </div>
  )
  }else{
    return(
      <div className="error-message">
        <h3>Trending movies</h3>
      </div>
    )
  }
  
}

export default Trending