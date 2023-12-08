import './video_play.css'
import netflixVideo from '../videos/Netflix logo intro -2021-.mp4'
import marvelVideo from '../videos/MARVEL STUDIOS INTRO.mp4'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext'
import RelatedAndUpcoming from './RelatedAndUpcoming'
import HarleyJoker from '../images/harleyJoker.jpg'
import NetflixPoster from '../images/netflix.png'
import MarvelPoster from '../images/marvelstudios.jpg'

const VideoPlay = () => {
    const {allMovies, selectedMovie} = useContext(AppContext)

    const [movieVideo, setMovieVideo] = useState(marvelVideo)
    const [moviePoster, setMoviePoster] = useState(MarvelPoster)

    const changeMovieVideo = () => {
       if(movieVideo === marvelVideo){
        setMovieVideo(netflixVideo)
        setMoviePoster(NetflixPoster)
       }
       else{
        setMovieVideo(marvelVideo)
        setMoviePoster(MarvelPoster)
       }
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        changeMovieVideo()
    }, [selectedMovie])

    if(allMovies && selectedMovie){
        return (
            <div className='video-play'>
                <div className='video-play-section'>
                    <div className='movie-details'>
                        <h1>{selectedMovie.name}</h1>
                        <h3><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">

                        </i><i class="bi bi-star-fill"></i> {selectedMovie.rating}</h3>
                        <h3>Year: {selectedMovie.release_year}</h3>
                        <h3>Runtime: {selectedMovie.runtime} mins</h3>
                    </div>
                    <div className='video-container'>
                        <video src={movieVideo} width={"100%"} height={"580px"} poster={moviePoster}  controls onEnded={(event) => event.target.load()}>
                            
                        </video>
                    </div>
                    <div className='movie-description'>
                        
                        <h2>About This Movie</h2>
                        <p>{selectedMovie.description}</p>
                    </div>
                </div>
            <RelatedAndUpcoming />
                
            </div>
        )
    } else if(allMovies && !selectedMovie){
        return (
            <div className='video-play'>
                <div className='video-play-section'>
                    <div className='video-container'>
                        <video poster={HarleyJoker} width={"100%"} height={"600px"}  controls loop>
                            <source src={marvelVideo} type='video/mp4'/>
                        </video>
                    </div>
                </div>
                <RelatedAndUpcoming />
            </div>
        )
    }

}

export default VideoPlay