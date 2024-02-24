import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Comedy = () => {
    const { allMovies} = useContext(AppContext)
    const landingMovie = {
        name: "White Chicks", 
        image: "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BODRkZjU3ODAtMTAyZS00YjhhLWEzOGYtODg5MmRkYWExMzU2XkEyXkFqcGdeQWpnYW1i._V1_FMjpg_UX1000_.jpg",
        description: "",
        runtime: 205,
        release_year: 2020,
        rating: 7.7,
        category: "comedy"
    }

  return (
    <div className='genre-display'>
    <Landing movieLanding={landingMovie} />

    <div className="main-section movies-section">
        <div>
            <h5 className='red'>RECENTLY ADDED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "comedy").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>
        </div>
         
        <div>
            <h5 className='red'>MOST LIKED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "comedy").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
        <div>
            <h5 className='red'>MOST WATCHED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "comedy").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
    </div>
</div>
  )
}

export default Comedy