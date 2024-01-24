import {useContext, useEffect, useState} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Coming from './Coming'

const RelatedAndUpcoming = () => {
    const {allMovies, selectedMovie} = useContext(AppContext)
    const [startingNumber, setStartingNUmber] = useState(0)
    const [upStarting, setUpStarting] = useState(0)
    const [endingNumber, setEndingNumber] = useState(startingNumber + 6)
    const [upEndingNumber, setUpEndingNumber] = useState(startingNumber + 6)
    

    useEffect(() => {
        setStartingNUmber(Math.floor(Math.random() * 25))
        setUpStarting(Math.floor(Math.random() * 10))
    }, [selectedMovie])

    useEffect(() => {
        setEndingNumber(startingNumber + 6)
        setUpEndingNumber(upStarting + 6)
    }, [startingNumber, upStarting])

    if(allMovies && selectedMovie){
        return (
            <div>
                <div className='movies-section'>
                            <h2>Related Movies</h2>
                            <div className='movies-container'>
                                {allMovies.filter(movie => (movie.category === selectedMovie.category || movie.runtime > 120) && movie._id !== selectedMovie._id).slice(startingNumber, endingNumber).map(movie => <HomeMovieCard key={movie._id} movie={movie} /> )}
                            </div>
                        </div>

                        <div className='movies-section'>
                            <h1>Watch out for this!</h1>
                            <Coming />
                        </div>
                        
        
                        <div className='movies-section'>
                            <h2>Upcoming Movies</h2>
                            <div className='movies-container'>
                                {allMovies.filter(movie => movie.release_year === 2023 && movie._id !== selectedMovie._id).slice(upStarting, upEndingNumber).map(movie => <HomeMovieCard key={movie._id} movie={movie} /> )}
                            </div>
                        </div>
            </div>
          )
    } else if(allMovies && !selectedMovie){
        return (
            <div>
                <div className='movies-section'>
                            <h2>Related Movies</h2>
                            <div className='movies-container'>
                                {allMovies.filter(movie => movie.category === "action" && movie.release_year !== 2023).slice(0, 5).map(movie => <HomeMovieCard key={movie._id} movie={movie} /> )}
                            </div>
                        </div>
        
                        <div className='movies-section'>
                            <h2>Upcoming Movies</h2>
                            <div className='movies-container'>
                                {allMovies.filter(movie => movie.release_year === 2023).slice(0, 5).map(movie => <HomeMovieCard key={movie._id} movie={movie} /> )}
                            </div>
                        </div>
            </div>
          )

    }
 
}

export default RelatedAndUpcoming