import React from 'react'

const MovieCard = ({movie}) => {
  return (
        <div className='movie-card' key={movie._id}>
            <img src={movie.image} alt='movie display'/>
            <h4>{movie.name}</h4>
        </div>
  )
}

export default MovieCard