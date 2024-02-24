import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Drama = () => {
    const { allMovies} = useContext(AppContext)

    const landingMovie = {
        name: "Good Girls",
        image: "https://m.media-amazon.com/images/M/MV5BZTk3MTdmODUtMTEwMy00NjNhLTg3NGUtMzE5NGNiYTA5ZTA3XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZjQ1MDY4ZjgtNjlkZS00MmZlLWI4ZDktMmM5NzdlZjg3ZjI5XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
        description: "",
        runtime: 150,
        rating: 6.7,
        category: "Drama"
    }

  return (
    <div className='genre-display'>
    <Landing movieLanding={landingMovie} />

    <div className="main-section movies-section">
        <div>
            <h5 className='red'>RECENTLY ADDED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "drama").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>
        </div>
         
        <div>
            <h5 className='red'>MOST LIKED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "drama").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
        <div>
            <h5 className='red'>MOST WATCHED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "drama").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
    </div>
</div>
  )
}

export default Drama