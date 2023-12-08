import './home.css'
import Top10 from './Top10'
import TopPicks from './TopPicks'
import InTheatres from './InTheatres'
import vision from '../images/vision.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../AppContext'
import MovieOfTheYear from './MovieOfTheYear'
import BestEver from './BestEver'
import Trending from './Trending'

const Home = () => {
  const {setSelectedMovie} = useContext(AppContext)

  const handleClick = () => {
    setSelectedMovie({
      name: "Captain Marvel",
      release_year: "2023",
      rating: 8.0,
      runtime: 260,
      category: "sci-fi",
    })
  }

  return (
    <div id='home'>
        <div className='landing' style={{backgroundImage: `url(${vision})`}}>
          <div className='details'>
            <h1>CAPTAIN MARVEL</h1>
            <p className='rating'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
            </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i></p>
            <p>Runtime: 260 mins</p>
            <p><span className='red-title'>Genres:</span> Sci-Fi</p>
            <p><Link to={'/video-play'} onClick={handleClick} className='play-btn'>Watch <i class="bi bi-caret-right-fill"></i></Link></p>
          </div>
        </div>
        <TopPicks />
        <InTheatres />
        <MovieOfTheYear />
        <Top10 />
        <BestEver />
        <Trending />
    </div>
  )
}

export default Home