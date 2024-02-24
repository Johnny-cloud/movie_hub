import GenreDisplay from "../genre_display/GenreDisplay"

const Scifi = () => {

    const landingMovie = {
        name: "Iron Man", 
        image: "https://m.media-amazon.com/images/M/MV5BNWFlMjllMmItODk4NS00YTE1LTg1YzktMDMyYmQzNzc5NzdlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMTMwOTIwMTk2Nl5BMl5BanBnXkFtZTcwNDEzNTIzMw@@._V1_.jpg",
        description: "",
        runtime: 150,
        release_year: 2020,
        rating: 7.7,
        category: "sci-fi"
    }

  return (
    <GenreDisplay landingMovie={landingMovie} />
  )
}

export default Scifi