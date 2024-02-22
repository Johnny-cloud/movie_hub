import {useContext, useEffect} from 'react'
import './genre_display.css'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Loading from '../animations/Loading'

const GenreDisplay = () => {
    const {selectedGenre, allMovies} = useContext(AppContext)
    let url =  "https://images.unsplash.com/photo-1505775561242-727b7fba20f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    useEffect(() => {
        window.scrollTo(0, 0)

    }, [selectedGenre])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if(selectedGenre){
        return (
            <div className='genre-display'>
                <div className='landing small-landing genre-landing' style={{backgroundImage: `url(${url})`}}>
                <div className='details'>
                    <h1 className='red'>{selectedGenre} movies</h1>
                </div>
                </div>

                <div className="main-section movies-section">
                    <div>
                        <h4>Recently added</h4>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === selectedGenre).slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div>
                    </div>
                     
                    <div>
                        <h4>Most liked</h4>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === selectedGenre).slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div> 
                    </div>
                    
                    <div>
                        <h4>Most watched</h4>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === selectedGenre).slice(12, 18).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div> 
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

export default GenreDisplay