import NewMovieGenreDisplay from "./NewMovieGenreDisplay"

const NewMovies = () => {
    const landingMovie = {
        name: "Shazam", 
        image: "https://m.media-amazon.com/images/M/MV5BNGVlMDFhNGQtNjIyMy00YjkxLWJjZjQtNGUxMDI0YjYzYzZmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZDAyZTRlMzItZTMzOC00ODU4LWI5MWEtZDhmMTJlMzY2MTVjXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
        description: "",
        runtime: 200,
        release_year: 2023,
        rating: 8.7,
        category: "sci-fi"
    }
  return (
    <NewMovieGenreDisplay landingMovie={landingMovie} />
  )
}

export default NewMovies