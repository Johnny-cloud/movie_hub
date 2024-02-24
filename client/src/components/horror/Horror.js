import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Horror = () => {
    const { allMovies} = useContext(AppContext)
    
    const landingMovie = {
        name: "Get Out", 
        image: "https://m.media-amazon.com/images/M/MV5BMmM3NGVkOGEtNzdlYy00MWNmLWIwZWYtM2JmNWMyMjI4N2U0XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMTUxMjEzNzE1NF5BMl5BanBnXkFtZTgwNDYwNjUzMTI@._V1_.jpg",
        description: "",
        runtime: 185,
        release_year: 2020,
        rating: 7.5,
        category: "horror"
    }

  return (
    <div className='genre-display'>
    <Landing movieLanding={landingMovie} />

    <div className="main-section movies-section">
        <div>
            <h5 className='red'>RECENTLY ADDED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "horror").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>
        </div>
         
        <div>
            <h5 className='red'>MOST LIKED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "horror").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
        <div>
            <h5 className='red'>MOST WATCHED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "horror").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
    </div>
</div>
  )
}

export default Horror