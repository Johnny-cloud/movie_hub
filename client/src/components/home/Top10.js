import HomeMovieCard from './HomeMovieCard'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext'

const Top10 = () => {
  const {allMovies, selectedMovie} = useContext(AppContext)
  const [startingNumber, setStartingNUmber] = useState(0)
  const [endingNumber, setEndingNumber] = useState(startingNumber + 5)

  useEffect(() => {
    setStartingNUmber(Math.floor(Math.random() * 20))
  }, [selectedMovie])

  useEffect(() => {
    setEndingNumber(startingNumber + 5)
  }, [startingNumber])

  useEffect(() => {
    setStartingNUmber(Math.floor(Math.random() * 20))
  }, [])

  if(allMovies){
    return(
      <div className="movies-section">
        <h2>Greatest Of All Times</h2>
        <div className="movies-container">
          {allMovies.filter(movie => movie.rating > 6.0 && movie.release_year !== 2023).slice(startingNumber,endingNumber).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
        </div>
      </div>
    )
  }

}

export default Top10