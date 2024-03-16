import PopularGenreDisplay from "./PopularGenreDisplay"

const PopularMovies = () => {
    const landingMovie = {
        name: "Titanic", 
        image: "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMjMzMjQ4NzU1NV5BMl5BanBnXkFtZTgwMDkwODA3NzE@._V1_.jpg",
        description: "",
        runtime: 200,
        release_year: 2020,
        rating: 8.7,
        category: "romance"
    }
  return (
    <PopularGenreDisplay landingMovie={landingMovie} />
  )
}

export default PopularMovies