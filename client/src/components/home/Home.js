import './home.css'
import Top10 from './Top10'
import TopPicks from './TopPicks'
import InTheatres from './InTheatres'
import MovieOfTheYear from './MovieOfTheYear'
import BestEver from './BestEver'
import Trending from './Trending'
import Landing from '../landing/Landing'

const Home = () => {

  const homeLanding = {
    name: "Avatar",
    release_year: "2023",
    rating: 8.0,
    runtime: 260,
    category: "sci-fi",
    image: 'https://pbs.twimg.com/media/FeE3_w-XgAEe1Fu.jpg:large',
    horizontalImage: 'https://m.media-amazon.com/images/M/MV5BMTQ1ODE5NjYxMl5BMl5BanBnXkFtZTcwOTA3MTUzNA@@._V1_.jpg',
  }

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