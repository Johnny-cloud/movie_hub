import HomeMovieCard from "./HomeMovieCard"
import { useContext } from 'react'
import AppContext from '../AppContext'

const InTheatres = () => {
    const {allMovies} = useContext(AppContext)

    if(allMovies){
        return (
            <div className="movies-section">
                <h2>Showing in Theatres</h2>
            <div className="movies-container">
                {allMovies.filter(movie => movie.rating <= 5).slice(5, 10).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>  
            </div>
           
        )
    } else{
        return(
            <div>
                <h3>Couldn't fetch</h3>
            </div>
        )
    }
}

export default InTheatres