import GenreDisplay from "../genre_display/GenreDisplay"

const Drama = () => {

    const landingMovie = {
        name: "Good Girls",
        image: "https://m.media-amazon.com/images/M/MV5BZTk3MTdmODUtMTEwMy00NjNhLTg3NGUtMzE5NGNiYTA5ZTA3XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZjQ1MDY4ZjgtNjlkZS00MmZlLWI4ZDktMmM5NzdlZjg3ZjI5XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
        description: "",
        runtime: 150,
        rating: 6.7,
        category: "drama"
    }

  return (
    <GenreDisplay landingMovie={landingMovie} />
  )
}

export default Drama