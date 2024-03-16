import {useEffect} from 'react'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'
import {useContext} from 'react'
import AppContext from '../AppContext'

const NewMovieGenreDisplay = ({landingMovie}) => {
    const { allMovies} = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='genre-display'>
        <Landing movieLanding={landingMovie} />
    
        <div className="main-section movies-section">
            <div>
                <h5 className='red'>RECENTLY ADDED</h5>
                <div className="movies-container">
                    {allMovies.filter(movie => movie.release_year >= 2022).slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                </div>
            </div>
             
            <div>
                <h5 className='red'>MOST LIKED</h5>
                <div className="movies-container">
                    {allMovies.filter(movie => movie.release_year >= 2022).slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                </div> 
            </div>
            
            <div>
                <h5 className='red'>MOST WATCHED</h5>
                <div className="movies-container">
                    {allMovies.filter(movie => movie.release_year >= 2022).slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                </div> 
            </div>
            
        </div>
    </div>
    )
}

export default NewMovieGenreDisplay