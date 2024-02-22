import {useContext} from 'react'
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'
import spiderman from '../images/spiderman.jpg'

const BestEver = () => {
    const {setSelectedMovie} = useContext(AppContext)

    const handleClick = () => {
      setSelectedMovie({
        name: "Spiderman",
        release_year: "2023",
        rating: 8.0,
        runtime: 250,
        category: "sci-fi",
      })
    }

  return (
    <div className='movies-section'>
         <div className='small-landing landing' style={{backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BOTFlZTA4YjUtYzY3Zi00Mzc2LTllNzAtYjI2ZWNiMGZkZjE2XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg'})`}}>
            <div className='details'>
                <h1>SPIDERMAN</h1>
                <p className='rating'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
                </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i></p>
                <p>Runtime: 250 mins</p>
                <p><span className='red-title'>Genres:</span> Sci-Fi</p>
                <p><Link to={'/video-play'} onClick={handleClick} className='play-btn'>Watch <i class="bi bi-caret-right-fill"></i></Link></p>
            </div>
        </div>
    </div>
   
  )
}

export default BestEver