import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from './HomeMovieCard'

const Trending = () => {
    const {allMovies} = useContext(AppContext)

    if(allMovies){
        return (
            <div className="movies-section">
                <h2>Trending Movies</h2>
            <div className="movies-container">
                {allMovies.filter(movie => movie.trending === true).slice(5, 10).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
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

export default Trending