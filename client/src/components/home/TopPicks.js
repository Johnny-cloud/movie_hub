import HomeMovieCard from './HomeMovieCard'
import { useContext} from 'react'
import AppContext from '../AppContext'
import Loading from '../animations/Loading'

const TopPicks = () => {
    const {allMovies} = useContext(AppContext)



    if(allMovies){
        return (
            <div className="movies-section">
                <h5 className='red'>TOP PICKS FOR 2023</h5>
                <div>
                    <div className='movies-container'>
                        {allMovies.filter(movie => movie.release_year === 2023 && movie.rating >7 ).slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                    </div>
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

export default TopPicks