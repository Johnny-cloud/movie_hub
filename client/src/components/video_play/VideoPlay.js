import './video_play.css'
import { useContext, useEffect } from 'react'
import AppContext from '../AppContext'
import RelatedAndUpcoming from './RelatedAndUpcoming'

const VideoPlay = () => {
    const {allMovies, selectedMovie} = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selectedMovie])

    if(allMovies && selectedMovie){
        return (
            <div className='video-play main-section'>
               <div className='selected-movie movies-container'>
                <div className='image-container'>
                    <img src={selectedMovie.image} alt='' />
                </div>
                <div className='details'>
                    <h1>{selectedMovie.name}</h1>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i> <span className='rating'>{selectedMovie.rating}</span></p>
                    <p>Release year: {selectedMovie.release_year} </p>
                    <p>Runtime: {selectedMovie.runtime} mins</p>
                    <p>Tags: {selectedMovie.category}</p>
                    <p>{selectedMovie.description}</p>

                </div>
               </div>
                <RelatedAndUpcoming /> 
            </div>
        )
    } 

}

export default VideoPlay