import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Romance = () => {
    const { allMovies} = useContext(AppContext)

    const landingMovie = {
        name: "Romantic", 
        image: "https://m.media-amazon.com/images/M/MV5BOTZmMjk4NDYtYTA0Yy00MmY1LTk3ZTAtZWU1NjU0ZDM4MjUwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        horizontalImage: "https://image-resizer-cloud-api.akamaized.net/image/4B3B52DC-0B29-4C28-A0AB-1819FEB3B27C/0-16x9.jpg?width=1920&updatedTime=2024-02-16T10:58:59Z&dt=Web",
        description: "",
        runtime: "",
        release_year: 2020,
        rating: 7.7,
        category: "romance"
    }

  return (
    <div className='genre-display'>
    <Landing movieLanding={landingMovie} />

    <div className="main-section movies-section">
        <div>
            <h5 className='red'>RECENTLY ADDED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "romance").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div>
        </div>
         
        <div>
            <h5 className='red'>MOST LIKED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "romance").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
        <div>
            <h5 className='red'>MOST WATCHED</h5>
            <div className="movies-container">
                {allMovies.filter(movie => movie.category === "romance").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
            </div> 
        </div>
        
    </div>
</div>
  )
}

export default Romance