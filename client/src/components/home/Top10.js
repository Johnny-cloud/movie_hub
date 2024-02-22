import HomeMovieCard from './HomeMovieCard'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext'
import Loading from '../animations/Loading'

const Top10 = () => {
  const {allMovies, selectedMovie} = useContext(AppContext)
  const [startingNumber, setStartingNUmber] = useState(0)
  const [endingNumber, setEndingNumber] = useState(startingNumber + 6)

  useEffect(() => {
    setStartingNUmber(Math.floor(Math.random() * 20))
  }, [selectedMovie])

  useEffect(() => {
    setEndingNumber(startingNumber + 6)
  }, [startingNumber])

  useEffect(() => {
    setStartingNUmber(Math.floor(Math.random() * 20))
  }, [])

  if(allMovies){
    return(
      <div className="movies-section">
        <h4>Greatest Of All Times</h4>
        <div className="movies-container">
          {allMovies.filter(movie => movie.rating > 6.0 && movie.release_year !== 2023).slice(startingNumber,endingNumber).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
        </div>
      </div>
    )
  }else{
    return(
        <div>
            <Loading />
        </div>
    )
}

}

export default Top10