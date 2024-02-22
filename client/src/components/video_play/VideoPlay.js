import './video_play.css'
import { useContext, useEffect } from 'react'
import AppContext from '../AppContext'
import RelatedAndUpcoming from './RelatedAndUpcoming'

const VideoPlay = () => {
    const {allMovies, selectedMovie} = useContext(AppContext)
    const cast = [
        {
            name: "Tony Smith",
            image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Monty Mild",
            image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Shirlyn Koome",
            image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Justus Kip",
            image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]

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
                    <p><span className='red'>Release year:</span> {selectedMovie.release_year} </p>
                    <p><span className='red'>Runtime:</span> {selectedMovie.runtime} mins</p>
                    <p><span className='red'>Tags:</span> {selectedMovie.category}</p>
                    <p>{selectedMovie.description}</p>
                    <p><h3>Cast</h3></p>
                    <p className='movies-container'>
                        {cast.map(member => {
                            return(
                                <div className='cast-member' key={member.image}>
                                    <div className='image-container'><img src={member.image} alt='' /></div>
                                    <div><h5>{member.name}</h5></div>
                                </div>
                            )
                        })}
                    </p>
                </div>
               </div>
                <RelatedAndUpcoming /> 
            </div>
        )
    } 

}

export default VideoPlay