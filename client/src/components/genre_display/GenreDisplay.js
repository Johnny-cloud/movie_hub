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
                    <div className="movies-container">
                        {allMovies.filter(movie => movie.category === selectedGenre).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
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