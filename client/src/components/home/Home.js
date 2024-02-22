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
      name: "Avatar",
      release_year: "2023",
      rating: 8.0,
      runtime: 260,
      category: "sci-fi",
      image: 'https://pbs.twimg.com/media/FeE3_w-XgAEe1Fu.jpg:large',
    })
  }

  return (
    <div id='home'>
        <div className='landing' style={{backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BMTQ1ODE5NjYxMl5BMl5BanBnXkFtZTcwOTA3MTUzNA@@._V1_.jpg'})`}}>
          <div className='overlay'></div>
          <div className='details'>
            <h1>Avatar</h1>
            <p className='rating'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
            </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i></p>
            <p><span className='red'>Runtime:</span> 260 mins</p>
            <p><span className='red'>Genres:</span> Sci-Fi</p>
            <p>Enjoy the best exclusive movies and tv shows only on Movie Hub. Watch now cancel anytime.</p>
            <p><Link to={'/video-play'} onClick={handleClick} className='play-btn'>Watch <i class="bi bi-caret-right-fill"></i></Link></p>
          </div>
        </div>
        <div className='main-section'>
          <TopPicks />
          <InTheatres />
          <MovieOfTheYear />
          <Top10 />
          <BestEver />
          <Trending />
        </div>
    </div>
  )
}

export default Home