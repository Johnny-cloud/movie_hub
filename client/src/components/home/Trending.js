import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from './HomeMovieCard'
import Loading from '../animations/Loading'

const Trending = () => {
    const {allMovies} = useContext(AppContext)

    if(allMovies){
        return (
            <div className="movies-section">
                <h5 className='red'>TRENDING MOVIES</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.trending === true).slice(5, 11).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>  
            </div>
           
        )
    } else{
        return(
            <div>
                <Loading />
            </div>
        )
    }
}

export default Trending