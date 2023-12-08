import { Link } from "react-router-dom"
import { useContext } from "react"
import AppContext from "../AppContext"

const HomeMovieCard = ({movie}) => {
  const {setSelectedMovie} = useContext(AppContext)
  
  const handleClick = () => {
    setSelectedMovie(movie)
  }

  return (
    <Link to='/video-play' onClick={handleClick}>
      <div className='home-movie-card'>
        <img src={movie.image} alt='movie'/>
        <div className="play-controls"><i class="bi bi-play-circle-fill"></i></div>
        <div className="description">
          <h3>{movie.name}</h3> 
          <h4>Runtime: {movie.runtime} mins</h4>  
        </div>
      </div>
    </Link>
    
  )
}

export default HomeMovieCard