import avatarImage from '../images/avatar.webp'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../AppContext'

const MovieOfTheYear = () => {
    const {setSelectedMovie} = useContext(AppContext)

    const handleClick = () => {
      setSelectedMovie({
        name: "Captain Marvel",
        release_year: "2023",
        rating: 8.0,
        runtime: 280,
        category: "sci-fi",
      })
    }
  return (
    <div className='movies-section'>
        <div className='small-landing landing' style={{backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BNmYwMzU2ODgtNzBiMS00OGNkLTlmZjUtMGViOTY4ZmZiNTZhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg'})`}}>
            <div className='details'>
                <h1>Captain Marvel</h1>
                <p className='rating'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
                </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i></p>
                <p>Runtime: 280 mins</p>
                <p><span className='red-title'>Genres:</span> Sci-Fi</p>
                <p><Link to={'/video-play'} onClick={handleClick} className='play-btn'>Watch <i class="bi bi-caret-right-fill"></i></Link></p>
            </div>
        </div>
    </div>
    
  )
}

export default MovieOfTheYear