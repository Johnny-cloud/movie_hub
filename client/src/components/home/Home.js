import './home.css'
import Top10 from './Top10'
import TopPicks from './TopPicks'
import InTheatres from './InTheatres'
import MovieOfTheYear from './MovieOfTheYear'
import BestEver from './BestEver'
import Trending from './Trending'
import Landing from '../landing/Landing'
import { useEffect } from 'react'

const Home = () => {

  const homeLanding = {
    name: "Avatar",
    release_year: "2023",
    rating: 8.0,
    runtime: 260,
    category: "sci-fi",
    image: 'https://m.media-amazon.com/images/M/MV5BYzRjOTdiZGQtZDJhNC00OTk4LTk1YjAtYTM0NGFjM2MxYzIzXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
    horizontalImage: 'https://m.media-amazon.com/images/M/MV5BMTQ1ODE5NjYxMl5BMl5BanBnXkFtZTcwOTA3MTUzNA@@._V1_.jpg',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id='home'>
        <Landing movieLanding={homeLanding} />
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