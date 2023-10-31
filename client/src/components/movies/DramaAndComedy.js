import {useState, useEffect} from 'react'
import MovieCard from './MovieCard'

const DramaAndComedy = () => {
    const [dramaAndComedy, setDramaAndComedy] = useState(null)
    const fetchMovies = async () => {
        const response = await fetch('/movies')
        if(response.ok){
            const movies = await response.json()
            setDramaAndComedy(movies.filter(movie => movie.category === 'drama' || movie.category === 'comedy'))
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    if(dramaAndComedy){
       return (
        <div>
            <h2>Drama & Comedy</h2>
            <div className='container'>
                {dramaAndComedy.map(movie => <MovieCard movie={movie} key={movie._id}/>)}
            </div> 
        </div>
           
        ) 
    }
  
}

export default DramaAndComedy