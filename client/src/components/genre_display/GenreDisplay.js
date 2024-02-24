import {useContext, useEffect, useState} from 'react'
import './genre_display.css'
import AppContext from '../AppContext'
import HomeMovieCard from '../home/HomeMovieCard'
import Loading from '../animations/Loading'
import Landing from '../landing/Landing'

const GenreDisplay = () => {
    const {selectedGenre, allMovies} = useContext(AppContext)
    const [landingMovie, setLandingMovie] = useState({
        name: "",
        image: "https://m.media-amazon.com/images/M/MV5BZTk3MTdmODUtMTEwMy00NjNhLTg3NGUtMzE5NGNiYTA5ZTA3XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZjQ1MDY4ZjgtNjlkZS00MmZlLWI4ZDktMmM5NzdlZjg3ZjI5XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
        description: "",
        runtime: 100,
        release_year: 2020,
        rating: 8.7,
        category: "Drama"
    })

    const actionLanding = {
        name: "John Wick", 
        image: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BOWEwNDRmMzQtYWQzZC00MGRjLWEyYzMtZGQwNWRkNTNmNTQ4XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
        description: "",
        runtime: 200,
        release_year: 2020,
        rating: 8.7,
        category: "action"
    }

    const comedyLanding = {
        name: "White Chicks", 
        image: "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BODRkZjU3ODAtMTAyZS00YjhhLWEzOGYtODg5MmRkYWExMzU2XkEyXkFqcGdeQWpnYW1i._V1_FMjpg_UX1000_.jpg",
        description: "",
        runtime: 205,
        release_year: 2020,
        rating: 7.7,
        category: "comedy"
    }

    const dramaLanding = {

            name: "Good Girls",
            image: "https://m.media-amazon.com/images/M/MV5BZTk3MTdmODUtMTEwMy00NjNhLTg3NGUtMzE5NGNiYTA5ZTA3XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
            horizontalImage: "https://m.media-amazon.com/images/M/MV5BZjQ1MDY4ZjgtNjlkZS00MmZlLWI4ZDktMmM5NzdlZjg3ZjI5XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
            description: "",
            runtime: 150,
            rating: 6.7,
            category: "Drama"
        }
    

    const thrillerLanding = {
        name: "Anabelle", 
        image: "https://m.media-amazon.com/images/M/MV5BNWE3Mzk4MzMtMjc2NC00N2I0LWE5NWMtM2I1YTA3YzE1M2RmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZWFmNjVhNGItOTJmMC00MzZmLTk4ZTktNmJiMDRkOWJmZTI5XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
        description: "",
        runtime: 198,
        release_year: 2020,
        rating: 7.2,
        category: "thriller"
    }

    const horrorLanding = {
        name: "Get Out", 
        image: "https://m.media-amazon.com/images/M/MV5BMmM3NGVkOGEtNzdlYy00MWNmLWIwZWYtM2JmNWMyMjI4N2U0XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMTUxMjEzNzE1NF5BMl5BanBnXkFtZTgwNDYwNjUzMTI@._V1_.jpg",
        description: "",
        runtime: 185,
        release_year: 2020,
        rating: 7.5,
        category: "horror"
    }

    const scifiLanding = {
        name: "Iron Man", 
        image: "https://m.media-amazon.com/images/M/MV5BNWFlMjllMmItODk4NS00YTE1LTg1YzktMDMyYmQzNzc5NzdlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMTMwOTIwMTk2Nl5BMl5BanBnXkFtZTcwNDEzNTIzMw@@._V1_.jpg",
        description: "",
        runtime: 150,
        release_year: 2020,
        rating: 7.7,
        category: "sci-fi"
    }

    const romanceLanding = {
        name: "Romantic", 
        image: "https://m.media-amazon.com/images/M/MV5BOTZmMjk4NDYtYTA0Yy00MmY1LTk3ZTAtZWU1NjU0ZDM4MjUwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        horizontalImage: "https://image-resizer-cloud-api.akamaized.net/image/4B3B52DC-0B29-4C28-A0AB-1819FEB3B27C/0-16x9.jpg?width=1920&updatedTime=2024-02-16T10:58:59Z&dt=Web",
        description: "",
        runtime: "",
        release_year: 2020,
        rating: 7.7,
        category: "romance"
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        switch (selectedGenre){
            case "action":
                setLandingMovie(actionLanding)
                break;
    
            case "drama":
                setLandingMovie(dramaLanding)
                break;
    
            case "comedy":
                setLandingMovie(comedyLanding)
                break;
    
            case "thriller":
                setLandingMovie(thrillerLanding)
                break;
            
            case "horror":
                setLandingMovie(horrorLanding)
                break;
                
            case "sci-fi":
                setLandingMovie(scifiLanding)
                break;
    
            case "romance":
                setLandingMovie(romanceLanding)
                break;
            
            default:
                setLandingMovie(dramaLanding)
        }
    }, [selectedGenre])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if(selectedGenre){
        return (
            <div className='genre-display'>
                <Landing movieLanding={landingMovie} />

                <div className="main-section movies-section">
                    <div>
                        <h5 className='red'>RECENTLY ADDED</h5>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === selectedGenre).slice(0, 6).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div>
                    </div>
                     
                    <div>
                        <h5 className='red'>MOST LIKED</h5>
                        <div className="movies-container">
                            {allMovies.filter(movie => movie.category === selectedGenre).slice(6, 12).map(movie => <HomeMovieCard movie={movie} key={movie._id} />)}
                        </div> 
                    </div>
                    
                    <div>
                        <h5 className='red'>MOST WATCHED</h5>
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