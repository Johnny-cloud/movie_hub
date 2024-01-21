import {useContext} from 'react'
import AppContext from '../AppContext'
import harleyJoker from '../images/harleyJoker.jpg'
import { Link } from 'react-router-dom'

const Coming = () => {
    const {setSelectedMovie} = useContext(AppContext)

    const handleClick = () => {
      setSelectedMovie({
        name: "Joker",
        release_year: "2023",
        rating: 8.0,
        runtime: 280,
        category: "sci-fi",
      })
    }
  return (
    <div className='movie-of-the-year landing' style={{backgroundImage: `url(${harleyJoker})`}}>
         <div className='details'>
            <h1>Joker</h1>
            <p className='rating'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
            </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i></p>
            <p>Runtime: 280 mins</p>
            <p><span className='red-title'>Genres:</span> Sci-Fi</p>
            <p><Link to={'/video-play'} onClick={handleClick} className='play-btn'>Watch<i class="bi bi-caret-right-fill"></i></Link></p>
          </div>
    </div>
  )
}

export default Coming