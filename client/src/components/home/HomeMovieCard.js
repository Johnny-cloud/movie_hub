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
          <h5>{movie.name}</h5> 
          <h6>Runtime: {movie.runtime} mins</h6>  
        </div>
      </div>
    </Link>
    
  )
}

export default HomeMovieCard