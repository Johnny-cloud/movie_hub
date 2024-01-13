import {useContext, useEffect, useState} from 'react'
import './genre_display.css'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import action from '../images/action.jpg'
import drama from '../images/drama.webp'
import scifi from '../images/sci-fi.webp'
import comedy from '../images/comedy.jpg'
import horror from '../images/horror.jpg'
import romance from '../images/romance.jpg'
import thriller from '../images/thriller.jpg'
import Loading from '../animations/Loading'

const GenreDisplay = () => {
    const {selectedGenre, allMovies} = useContext(AppContext)
    const [url, setUrl] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
        if(selectedGenre === "action"){
            setUrl(action)
        } else if(selectedGenre === "drama"){
            setUrl(drama)
        } else if(selectedGenre === "sci-fi"){
            setUrl(scifi)
        } else if(selectedGenre === "comedy"){
            setUrl(comedy)
        } else if(selectedGenre === "horror"){
            setUrl(horror)
        } else if(selectedGenre === "romance"){
            setUrl(romance)
        } else if(selectedGenre === "thriller"){
            setUrl(thriller)
        }
    }, [selectedGenre])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if(selectedGenre){
        return (
            <div>
                <div className='landing small-landing genre-landing' style={{backgroundImage: `url(${url})`}}>
                <div className='details'>
                    <h1>{selectedGenre} movies</h1>
                </div>
                </div>

                <div className="movies-section">
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