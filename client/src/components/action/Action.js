import {useContext} from 'react'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Landing from '../landing/Landing'

const Action = () => {
    const { allMovies} = useContext(AppContext)
    const landingMovie = {
        name: "John Wick", 
        image: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BOWEwNDRmMzQtYWQzZC00MGRjLWEyYzMtZGQwNWRkNTNmNTQ4XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
        description: "",
        runtime: 200,
        release_year: 2020,
        rating: 8.7,
        category: "action"
    }
  return (
    <div className='genre-display'>
                <Landing movieLanding={landingMovie} />

                <div className="main-section movies-section">
                    <div>
                        <h5 className='red'>RECENTLY ADDED</h5>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === "action").slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div>
                    </div>
                     
                    <div>
                        <h5 className='red'>MOST LIKED</h5>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === "action").slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div> 
                    </div>
                    
                    <div>
                        <h5 className='red'>MOST WATCHED</h5>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === "action").slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div> 
                    </div>
                    
                </div>
            </div>
  )
}

export default Action