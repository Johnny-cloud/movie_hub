import HomeMovieCard from './HomeMovieCard'
import { useContext} from 'react'
import AppContext from '../AppContext'

const TopPicks = () => {
    const {allMovies} = useContext(AppContext)



    if(allMovies){
        return (
            <div className="movies-section">
                <h2>Top Picks for 2023</h2>
                <div className="movies-container">
                    {allMovies.filter(movie => movie.release_year === 2023 && movie.rating >7 ).slice(0, 5).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                </div>
            </div>
        )
    }
  
}

export default TopPicks