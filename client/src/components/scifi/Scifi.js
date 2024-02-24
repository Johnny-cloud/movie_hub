import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Scifi = () => {
    const { allMovies} = useContext(AppContext)

    const landingMovie = {
        name: "Iron Man", 
        image: "https://m.media-amazon.com/images/M/MV5BNWFlMjllMmItODk4NS00YTE1LTg1YzktMDMyYmQzNzc5NzdlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMTMwOTIwMTk2Nl5BMl5BanBnXkFtZTcwNDEzNTIzMw@@._V1_.jpg",
        description: "",
        runtime: 150,
        release_year: 2020,
        rating: 7.7,
        category: "sci-fi"
    }

  return (
    <div className='genre-display'>
    <Landing movieLanding={landingMovie} />

    <div className="main-section movies-section">
        <div>
            <h5 className='red'>RECENTLY ADDED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "sci-fi").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>
        </div>
         
        <div>
            <h5 className='red'>MOST LIKED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "sci-fi").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
        <div>
            <h5 className='red'>MOST WATCHED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "sci-fi").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
    </div>
</div>
  )
}

export default Scifi