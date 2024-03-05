import './landing.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../AppContext'

const Landing = ({movieLanding}) => {
    const {setSelectedMovie} = useContext(AppContext)

    const handleClick = () => {
        setSelectedMovie(movieLanding)
      }

    return (
    <div className='landing' style={{backgroundImage: `url(${movieLanding.horizontalImage})`}}>
          <div className='overlay'></div>
          <div className='details'>
            <h1>{movieLanding.name}</h1>
            <p className='rating'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
            </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i> {movieLanding.rating}</p>
            <p><span className='red'>Runtime:</span> {movieLanding.runtime} mins</p>
            <p><span className='red'>Genres:</span> {movieLanding.category}</p>
            <p>Enjoy the best exclusive movies and tv shows only on Movie Hub.</p>
            <p><Link to={'/video-play'} onClick={handleClick} className='play-btn'>Watch <i class="bi bi-caret-right-fill"></i></Link></p>
          </div>
        </div>
  )
}

export default Landing