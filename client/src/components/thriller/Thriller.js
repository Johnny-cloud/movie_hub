import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Thriller = () => {
    const { allMovies} = useContext(AppContext)

    const landingMovie = {
        name: "Anabelle", 
        image: "https://m.media-amazon.com/images/M/MV5BNWE3Mzk4MzMtMjc2NC00N2I0LWE5NWMtM2I1YTA3YzE1M2RmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZWFmNjVhNGItOTJmMC00MzZmLTk4ZTktNmJiMDRkOWJmZTI5XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
        description: "",
        runtime: 198,
        release_year: 2020,
        rating: 7.2,
        category: "thriller"
    }

  return (
    <div className='genre-display'>
    <Landing movieLanding={landingMovie} />

    <div className="main-section movies-section">
        <div>
            <h5 className='red'>RECENTLY ADDED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "thriller").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>
        </div>
         
        <div>
            <h5 className='red'>MOST LIKED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "thriller").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
        <div>
            <h5 className='red'>MOST WATCHED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "thriller").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
    </div>
</div>
  )
}

export default Thriller